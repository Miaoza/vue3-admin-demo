import { defineComponent } from 'vue'
import Header from '@/layout/header'
import Nav from '@/layout/nav'
import Footer from '@/layout/footer'

const Core = defineComponent({
  // 已启用类型推断
  components: {
    Header,
    Nav,
    Footer
  },
  data() {
    return {}
  },
  methods: {}
})

export default Core
