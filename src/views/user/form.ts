import { Options, Vue } from 'vue-class-component'
import LayoutForm from '@/layout/layout-form'
import FormItems from './map/form'
import { getUserById } from '@/api/user'
import { Map } from '@/interfaces'

@Options({
  components: { LayoutForm },
  computed: {
    pageTitle() {
      const userId = this.$route.params.id
      return +userId ? '编辑用户' : '新增用户'
    }
  }
})
export default class UserForm extends Vue {
  formItems = FormItems
  loading = false

  created(): void {
    this.$route.params.id && this.getUser()
  }

  /**
   * 设置表单默认值
   * @param {Object} user
   */
  setFormItem(user: Map): void {
    const KEYS = Object.keys(user)
    this.formItems = FormItems.map((item) => {
      if (KEYS.includes(item.model)) {
        item.defaultValue = user[item.model] || item.defaultValue
      }
      return item
    })
    console.log(this.formItems)
  }

  /**
   * 查询指定用户信息
   */
  async getUser(): Promise<void> {
    this.loading = true
    try {
      const userId = this.$route.params.id
      const res = await getUserById(+userId)
      if (res.code === 0) {
        this.setFormItem(res.data)
      }
    } catch (err) {
      console.log(err)
    } finally {
      this.loading = false
    }
  }
}
