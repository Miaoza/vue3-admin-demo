import { Options, Vue } from 'vue-class-component'
import { Map } from '@/interfaces'

let timer: any

@Options({
  props: {
    direction: {
      type: String,
      default: 'vertical' // 【vertical：垂直方向，horizontal：水平方向】
    },
    sourceData: {
      type: Array,
      default: () => []
    }
  }
})
export default class CusDrag extends Vue {
  target: Map = {}
  sourceData!: any[]
  direction!: string

  mounted(): void {
    this.init()
  }

  /**
   * 初始化
   */
  init(): void {
    // const dom = this.$el.nextElementSibling // document.querySelector('.cus-drap-wrap')
    // console.log(dom)
    // const nodes = Array.prototype.slice.call(dom?.children)
    // nodes.forEach((node) => {
    //   if (node) {
    //     // node.style.position = 'absolute'
    //     node.setAttribute('draggable', 'true')
    //     node.ondragstart = this.handleDragstart
    //     node.ondragover = this.handleDragover
    //     node.ondrop = this.handleDrop
    //     node.ondragend = this.handleDragend
    //     node.ondragenter = this.handleDragenter
    //   }
    // })
    // this.calculateDom()
  }
  // 计算可移动dom位置
  // calculateDom(): void {
  //   const dom = document.querySelector('.cus-drap-wrap') as HTMLElement
  //   const nodes = Array.prototype.slice.call(dom?.children)
  //   const INDEX = ['vertical', 'horizontal'].indexOf(this.direction)
  //   const clientWidth = nodes[0]?.clientWidth
  //   const clientHeight = nodes[0]?.clientHeight
  //   const sumSize = nodes.reduce((sum: number, node: Map) => {
  //     node.style.left = `${[0, sum][INDEX]}px`
  //     node.style.top = `${[sum, 0][INDEX]}px`
  //     sum += node?.[['clientHeight', 'clientWidth'][INDEX]] || 0
  //     return sum
  //   }, 0)
  //   const width = this.direction === 'horizontal' ? sumSize : clientWidth
  //   const height = this.direction === 'vertical' ? sumSize : clientHeight
  //   dom.style.width = `${width}px`
  //   dom.style.height = `${height}px`
  // }

  /**
   * 拖拽开始
   * @param {Event} ev
   */
  handleDragstart(ev: Map): void {
    ev.dataTransfer.effectAllowed = 'move'
    this.target = ev
  }

  /**
   * 拖拽中
   * @param {Event} ev
   */
  handleDragover(ev: Map): void {
    ev.preventDefault()
    ev.dataTransfer.dropEffect = 'move'
  }

  /**
   * 当拖拽元素进入时调用
   * @param {Event} ev
   */
  handleDragenter(ev: Map): void {
    // 避免源对象触发自身的dragenter事件
    ev.preventDefault()
  }

  /**
   * 拖拽结束
   * @param {Event} ev
   */
  handleDragend(ev: Map): void {
    ev.preventDefault()
    this.target = {}
  }

  /**
   * 排序
   * @param {Event} ev
   */
  async sortable(ev: Map): Promise<void> {
    const node = this.target.target
    const INDEX = ['vertical', 'horizontal'].indexOf(this.direction)
    const KEY = ['y', 'x'][INDEX]
    const isBefore = this.target[KEY] > ev[KEY]
    const target = ev.path.find((node: Map) => node.draggable)
    const nextNode = isBefore ? target : target.nextSibling
    if (!node || !target.parentNode) {
      return
    }
    if (!nextNode) {
      target.parentNode.appendChild(node)
    } else {
      target.parentNode.insertBefore(node, nextNode)
    }
    // await this.$nextTick()
    // this.calculateDom()
  }
  /**
   * 释放目标
   * @param {Event} ev
   */
  handleDrop(ev: Map): void {
    ev.preventDefault()
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      this.sortable(ev)
    }, 50)
  }
}
