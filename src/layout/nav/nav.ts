import { defineComponent } from 'vue'
import MENUS from '@/menus'
import SubMenuItem from './sub-menu-item'

const Nav = defineComponent({
  // 已启用类型推断
  components: { SubMenuItem },
  computed: {
    // isCollapse() {
    //   const bodyWidth = document.body.clientWidth
    //   return bodyWidth < 1380
    // },
    defaultActive() {
      return this.$route.path
    },
    menus() {
      return [...MENUS]
    }
  },
  data() {
    return {
      isCollapse: false
    }
  },
  mounted() {
    window.onresize = () => {
      const bodyWidth = document.body.clientWidth
      this.isCollapse = bodyWidth < 1200
    }
  }
  // methods: {
  //   resetCollpase() {
  //     const bodyWidth = document.body.clientWidth
  //     this.isCollapse = bodyWidth < 1200
  //   }
  // }
})

export default Nav
