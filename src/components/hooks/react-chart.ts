import { Map } from '@/interfaces'

const XAXIS = {
  type: 'name'
}
const YAXIS = {
  type: 'value'
}

export default function (): Map {
  return {
    props: {
      xAxis: {
        type: Object,
        default: () => ({ ...XAXIS })
      },
      yAxis: {
        type: Object,
        default: () => ({ ...YAXIS })
      },
      series: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      setOption() {}
    }
  }
}
