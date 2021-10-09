import { Options, Vue } from 'vue-class-component'
import LayoutForm from '@/layout/layout-form'
import FormItems from './map/form'

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
}
