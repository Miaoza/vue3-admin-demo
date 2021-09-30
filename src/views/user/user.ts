import { Options, Vue } from 'vue-class-component'
import LayoutTable from '@/layout/layout-table'
import { columns, filterItems } from './map'
import { getUsers } from '@/api/user'

@Options({
  components: {
    LayoutTable
  }
})
export default class User extends Vue {
  columns: any[] = columns
  filterItems: any[] = filterItems
  getUsers: any = getUsers
}
