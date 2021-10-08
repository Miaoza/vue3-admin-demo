import { Options, Vue } from 'vue-class-component'
import { Map } from '@/interfaces'

@Options({
  props: {
    labelWidth: {
      type: String,
      default: '80px'
    },
    formItems: {
      type: Array,
      default: () => []
    }
  }
})
export default class CusForm extends Vue {
  formItems!: Map[]
  form: Map = {}
  created(): void {
    this.init()
  }
  /**
   * 初始化表单
   */
  init(): void {
    this.formItems.forEach((item) => {
      this.form[item.model] = item.defaultValue || ''
    })
  }
  /**
   * 表单值 change 回调
   */
  handleChange(): void {
    this.$emit('change', this.form)
  }
}
