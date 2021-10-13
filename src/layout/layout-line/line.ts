import { Options, Vue } from 'vue-class-component'
import CusFilter from '@/components/cus-filter'
import CusRectChart from '@/components/cus-rect-chart'
import { Map } from '@/interfaces'

@Options({
  components: {
    CusFilter,
    CusRectChart
  },
  props: {
    chartId: {
      type: String,
      default: 'main'
    },
    title: {
      type: String,
      default: ''
    },
    filterItems: {
      type: Array,
      default: () => []
    },
    formateParam: {
      type: Function,
      default: (filter: Map | undefined | null) => filter || {}
    },
    chartConfig: {
      type: Object,
      default: () => ({})
    },
    promiseRequest: [Promise, Function],
    formateData: {
      type: Function,
      default: (data: any[] | undefined | null) => data || []
    }
  },
  computed: {
    series() {
      console.log(this.chartData)
      return [
        {
          data: this.chartData.map((item: Map) => item.num),
          type: 'line',
          smooth: true
        }
      ]
    }
  }
})
export default class LayoutLine extends Vue {
  loading = false
  dialogVisible = false
  filter: Map = {}
  filterItems!: any[]
  promiseRequest!: any
  formateData!: any
  formateParam!: any
  chartData: any[] = []
  xAxis = {
    type: 'category',
    data: ['product1', 'product2', 'product3', 'product4']
  }
  yAxis = {
    type: 'value'
  }

  mounted(): void {
    // this.initFilter()
    this.init()
  }

  /**
   * 初始化筛选项
   */
  // initFilter(): void {
  //   this.filter = this.filterItems.reduce((pre, cur) => {
  //     pre[cur.model] = cur.defaultValue
  //   }, {})
  // }

  /**
   * 初始化
   */
  init(): void {
    this.loading = false
    this.chartData = []
    this.getData()
  }

  /**
   * 查询数据
   */
  async getData(): Promise<void> {
    this.loading = true
    try {
      const params = this.formateParam(this.filter)
      const res = await this.promiseRequest(params)
      if (res.code === 0) {
        this.chartData = this.formateData(res.data.list || [])
      }
    } catch (err) {
      console.log(err)
    } finally {
      this.loading = false
    }
  }

  /**
   * 搜索
   * @param {Object} filter
   */
  handleSearch(filter: Map): void {
    console.log(filter, '<<:::233333:::>>', this.filter)
    this.getData()
  }

  /**
   * 打开弹框
   */
  handleOpenDialog(): void {
    this.dialogVisible = true
    this.getData()
  }
}
