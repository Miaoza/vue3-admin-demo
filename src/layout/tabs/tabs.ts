import { Options, Vue } from 'vue-class-component'
import { Map } from '@/interfaces'
import { mutations } from './store'

@Options({
  computed: {
    currentTab() {
      return mutations.getCurrentTab()
    },
    tabs() {
      const tabs = mutations.getTabs()
      console.log(tabs)
      return tabs
    }
  },
  watch: {
    '$route.path': function (path) {
      if (this.tabs.every((tab: Map) => tab.path !== path)) {
        mutations.addTab(this.$route)
      }
      mutations.setCurrentTab({
        path: path,
        title: this.$route.meta.title,
        icon: this.$route.meta.icon
      })
    }
  }
})
class Tabs extends Vue {
  currentTab!: Map
  /**
   * 切换 tab 选项卡
   * @param {Object} tab
   */
  handleToggle(tab: Map): void {
    tab.path &&
      this.$router.push({
        path: tab.path,
        params: tab.params,
        query: tab.query
      })
  }
  /**
   * 关闭标签页
   * @param {Object} tab
   */
  async handleClose(tab: Map): Promise<void> {
    mutations.reduceTab(tab)
    await this.$nextTick()
    console.log(this.currentTab)
    this.$router.push({
      path: this.currentTab.path,
      params: this.currentTab.params,
      query: this.currentTab.query
    })
  }
}
export default Tabs
