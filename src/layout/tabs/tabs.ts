import { Options, Vue } from 'vue-class-component'
import { DArrowLeft, DArrowRight } from '@element-plus/icons'
import { Map } from '@/interfaces'
import { mutations } from './store'
import { ClickOutside } from 'element-plus/lib/directives'
import Contextmenu from './contextmenu'
import CusDrag from '@/components/cus-drag'
// import { onMounted } from 'vue'

@Options({
  components: {
    Contextmenu,
    DArrowLeft,
    DArrowRight,
    CusDrag
  },
  directives: { ClickOutside },
  computed: {
    currentTab() {
      return mutations.getCurrentTab()
    },
    tabs() {
      const tabs = mutations.getTabs()
      return tabs
    }
  },
  watch: {
    '$route.path': function (path) {
      const title = this.$route.meta.title
      if (
        this.tabs.every((tab: Map) => tab.path !== path) &&
        path !== '/home' &&
        title
      ) {
        mutations.addTab(this.$route)
      }
      path !== '/' &&
        title &&
        mutations.setCurrentTab({
          path: path,
          title: this.$route.meta.title,
          icon: this.$route.meta.icon
        })
    }
  }
})
class Tabs extends Vue {
  tabs!: Map[]
  currentTab!: Map
  show = false
  tabIndex = -1
  mounted(): void {
    const path = this.$route.path
    this.tabs.every((tab: Map) => tab.path !== path) &&
      path !== '/home' &&
      mutations.addTab(this.$route)
    path !== '/' &&
      mutations.setCurrentTab({
        path: path,
        title: this.$route.meta.title,
        icon: this.$route.meta.icon
      })
  }

  /**
   * 切换 tab 选项卡
   * @param {Object} tab
   */
  handleToggle(tab: Map): void {
    if (tab.path && tab.path !== this.$route.path) {
      this.show && this.handleCloseMenu()
      this.$router.push({
        path: tab.path,
        params: tab.params || {},
        query: tab.query || {}
      })
    }
  }
  /**
   * 关闭标签页
   * @param {Object} tab
   */
  async handleClose(tab: Map): Promise<void> {
    mutations.reduceTab(tab)
    await this.$nextTick()
    this.show && this.handleCloseMenu()
    console.log(this.currentTab)
    this.$router.push({
      path: this.currentTab.path,
      params: this.currentTab.params || {},
      query: this.currentTab.query || {}
    })
  }
  /**
   * 右键菜单
   */
  handleContextmenu(index: number): void {
    this.show = true
    this.tabIndex = index
  }
  /**
   * 关闭菜单
   */
  handleCloseMenu(): void {
    this.show = false
  }
  /**
   * 点击其他位置关闭菜单
   */
  handleOutSide(): void {
    this.handleCloseMenu()
  }
  /**
   * 右键菜单关闭标签
   * @param {String} context
   */
  async handleCloseTab(context: string): Promise<void> {
    switch (context) {
      case '关闭':
        this.handleClose(this.tabs[this.tabIndex])
        break
      case '关闭其他':
        mutations.reduceOther(this.tabs[this.tabIndex])
        break
      case '关闭右侧':
        mutations.reduceRight(this.tabs[this.tabIndex], this.tabIndex)
        await this.$nextTick
        this.$router.push({ path: this.currentTab.path })
        break
      case '全部关闭':
        mutations.clearTabs()
        this.$router.push({ path: '/home' })
        break
      default:
        break
    }
    this.show = false
  }
}
export default Tabs
