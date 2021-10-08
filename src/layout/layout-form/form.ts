import { Options, Vue } from 'vue-class-component'
import CusForm from '@/components/cus-form'

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
  }
})
export default class LayoutForm extends Vue {}
