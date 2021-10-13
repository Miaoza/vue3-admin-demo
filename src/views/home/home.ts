import { Options, Vue } from 'vue-class-component'
import LayoutBar from '@/layout/layout-bar'
import { filterItems } from './map/filter'
import { getProductsSummary } from '@/api/chart'

@Options({
  components: { LayoutBar }
})
export default class Home extends Vue {
  filterItems = filterItems
  getProductsSummary: any = getProductsSummary
}
