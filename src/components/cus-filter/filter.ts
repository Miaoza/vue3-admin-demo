import { defineComponent } from 'vue'
import { Map } from '@/interfaces'
// import { isEmptyObject } from '@/utils'

const CusFilter = defineComponent({
  // 已启用类型推断
  components: {},
  props: {
    value: {
      type: Object,
      default: () => ({})
    },
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
  mounted() {
    this.init()
  },
  methods: {
    /**
     * 初始化筛选项
     */
    init(): void {
      console.log('2333', this.value)
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
      this.$emit('update:value', this.filter)
    },
    /**
     * 筛选项选中值改变
     */
    handleChange(): void {
      this.$emit('update:value', this.filter)
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
      this.handleSearch()
    }
  }
})

export default CusFilter
