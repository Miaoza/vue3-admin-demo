import { Options, Vue } from 'vue-class-component'
import LayoutTable from '@/layout/layout-table'
import { columns, filterItems } from './map'
import { getUsers } from '@/api/user'
// import { Map } from '@/interfaces'

@Options({
  components: {
    LayoutTable
  }
})
export default class User extends Vue {
  columns: any[] = columns
  filterItems: any[] = filterItems
  getUsers: any = getUsers

  /**
   * 跳转新增用户
   */
  handleAdd(): void {
    this.$router.push({ name: 'user/form', params: { id: 0 } })
  }

  /**
   * 跳转编辑用户
   * @param row 用户ID
   */
  handleToForm(id: number): void {
    console.log('用户ID:', id)
    this.$router.push({
      name: 'user/form',
      params: {
        id
      }
    })
  }
}
