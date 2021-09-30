import { Options, Vue } from 'vue-class-component'
import { ref, unref } from 'vue'
// import { validPhone } from '@/utils/index'
// import { login, getMe } from '@/api/auth'
// import { useStore } from '@/store'

import TableItem from './table-item'

@Options({
  components: {
    TableItem
  },
  props: {
    loading: Boolean,
    emptyText: {
      type: String,
      default: '暂无数据'
    },
    // 表格列配置
    columns: {
      type: Array,
      default: () => []
    },
    // 表格数据
    tableData: {
      type: Array,
      default: () => []
    }
  }
})
export default class CusTable extends Vue {
  tableRef = ref()
  multipleSelection: unknown[] = []
  /**
   * 情况复选框选中值
   */
  clearSelections(): void {
    const tableRef = unref(this.tableRef)
    tableRef.clearSelection()
  }
  /**
   * 复选框选中值修改
   * @param {Array} selections
   */
  handleSelectionChange(selections: unknown[]): void {
    this.multipleSelection = selections
  }
}
