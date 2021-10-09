import { Options, Vue } from 'vue-class-component'
import CusFilter from '@/components/cus-filter'
import CusTable from '@/components/cus-table'
import { Map } from '@/interfaces'

@Options({
  components: {
    CusFilter,
    CusTable
  },
  props: {
    pseudoPaging: Boolean,
    showAdd: Boolean,
    addBtnText: {
      type: String,
      default: '新增'
    },
    formateParam: {
      type: Function,
      default: (filter: Map) => ({ ...filter })
    },
    promiseRequest: [Promise, Function],
    // promiseExport: [Promise, Array, undefined],
    formateTableData: {
      type: Function,
      default: (data: any[]) => [...data]
    },
    filterItems: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    slotColumns() {
      const c = this.columns.filter((col: Map) => col.type === 'slot')
      console.log('2333::::>>>', c)
      return c
    }
  },
  mounted() {
    this.getTableData()
  }
})
export default class DetailTable extends Vue {
  pseudoPaging!: boolean // 是否是假分页
  promiseRequest!: any
  formateParam!: any
  formateTableData!: any
  filterItems!: any[]
  currentPage = 1
  pageSize = 10
  total = 0
  filter = {}
  tableData = []
  loading = false

  /**
   * 新增
   */
  handleAdd(): void {
    this.$emit('add')
  }

  async getTableData(): Promise<void> {
    this.loading = true
    try {
      const param = this.formateParam({
        pageSize: this.pageSize,
        pageNum: this.currentPage,
        ...this.filter
      })
      const res = await this.promiseRequest(param)
      if (res.code === 0) {
        this.total = res.data.total || 0
        const data = res.data.list || []
        this.tableData = this.formateTableData(data)
        console.log(this.tableData)
      }
    } catch (err) {
      console.log(err)
    } finally {
      this.loading = false
    }
  }
  /**
   * 导出数据
   */
  async exportData(): Promise<void> {
    await this.$nextTick()
  }
  /**
   * 切换每页条数
   * @param {Number} size
   */
  handleSizeChange(size: number): void {
    this.pageSize = size
    this.currentPage = 1
    this.pseudoPaging || this.getTableData()
  }
  /**
   * 翻页
   * @param {Number} page
   */
  handleCurrentChange(page: number): void {
    this.currentPage = page
    this.pseudoPaging || this.getTableData()
  }
  /**
   * 搜索
   * @param {Object} filter
   */
  handleSearch(filter: Map): void {
    this.currentPage = 1
    this.filter = {
      ...filter
    }
    this.getTableData()
  }
}
