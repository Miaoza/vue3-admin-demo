import { Options, Vue } from 'vue-class-component'
import { useStore } from '@/store'

@Options({
  computed: {
    user() {
      const me = this.$store.state.auth.me || {}
      console.log(me)
      return me
    }
  }
})
export default class Header extends Vue {
  private store = useStore()
  /**
   * 下拉菜单指令事件
   * @param {string} action
   */
  handleCommand(action: string): void {
    switch (action) {
      case 'INFO':
        break
      case 'PASSWORD':
        break
      case 'LOGOUT':
        this.store.dispatch('logout')
        break
      default:
        break
    }
  }
}
