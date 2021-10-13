import * as echarts from 'echarts'
import { Options, Vue } from 'vue-class-component'
import { Map } from '@/interfaces'
type EChartsOption = echarts.EChartsOption

@Options({
  props: {
    chartId: {
      type: String,
      default: 'main'
    },
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    },
    xAxis: {
      type: Object,
      default: () => ({})
    },
    yAxis: {
      type: Object,
      default: () => ({})
    },
    series: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    series() {
      this.draw()
    }
  }
})
export default class CusRectChart extends Vue {
  chartId!: string
  xAxis!: Map
  yAxis!: Map
  series!: Map[]
  option!: EChartsOption
  chart!: echarts.ECharts
  width!: number
  height!: number

  async mounted(): Promise<void> {
    console.log('mounted::::>')
    this.init()
    await this.$nextTick()
    this.chart && this.chart.resize()
  }

  /**
   * 初始化
   */
  init(): void {
    const chartDom = document.getElementById(this.chartId)
    if (chartDom) {
      const style =
        this.width && this.height
          ? {
              width: this.width,
              height: this.height
            }
          : undefined
      this.chart = echarts.init(chartDom, undefined, style)
      this.draw()
    }
  }

  /**
   * 渲染
   */
  draw(): void {
    this.option = {
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      series: this.series
    }
    this.option && this.chart.setOption(this.option)
  }
}
