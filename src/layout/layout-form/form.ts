import { Options, Vue } from 'vue-class-component'
import CusForm from '@/components/cus-form'
import { Map } from '@/interfaces'

@Options({
  components: { CusForm },
  props: {
    pageTitle: {
      type: String,
      default: ''
    },
    labelWidth: {
      type: String,
      default: '80px'
    },
    formItems: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    slotItems() {
      return this.formItems.filter((item: Map) => item.type === 'slot')
    }
  }
})
export default class LayoutForm extends Vue {
  /**
   * 返回上一页
   */
  goBack(): void {
    this.$router.back()
  }
}
