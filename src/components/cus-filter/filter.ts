import { defineComponent } from 'vue'
import { Map } from '@/interfaces'

const CusFilter = defineComponent({
  // 已启用类型推断
  components: {},
  props: {
    filterItems: {
      type: Array,
      default: () => []
    }
  },
  computed: {},
  data() {
    return {
      filter: {}
    }
  },
  methods: {
    /**
     * 初始化筛选项
     */
    init(): void {
      this.filter = this.filterItems.reduce((pre: Map, cur: any): Map => {
        switch (cur.type) {
          case 'select':
            pre[cur.model] = cur.defaultValue || (cur.multiple ? [] : '')
            break
          case 'input':
            pre[cur.model] = cur.defaultValue || ''
            break
          case 'date':
            pre[cur.model] = cur.defaultValue || ''
            break
          case 'daterange':
            pre[cur.model] = cur.defaultValue || []
            break
          case 'cascader':
            pre[cur.model] = cur.defaultValue || []
            break
          default:
            break
        }
        return pre
      }, {})
    },
    /**
     * 搜索
     */
    handleSearch(): void {
      this.$emit('search', this.filter)
    },
    /**
     * 重置筛选项
     */
    handleReset(): void {
      this.init()
      this.$emit('search', this.filter)
    }
  }
})

export default CusFilter
