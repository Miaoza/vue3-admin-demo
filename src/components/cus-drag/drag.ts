import { Options, Vue } from 'vue-class-component'
import { Map } from '@/interfaces'

@Options({
  props: {
    sourceData: {
      type: Array,
      default: () => []
    }
  }
})
export default class CusDrag extends Vue {
  target: Map = {}
  targetIndex = -1
  sourceData!: any[]
  mounted(): void {
    this.init()
  }

  /**
   * 初始化
   */
  init(): void {
    // const dom = document.querySelector('.cus-drap-wrap')
    // const nodes = Array.prototype.slice.call(dom?.children)
    // nodes.forEach((node) => {
    //   if (node) {
    //     node.setAttribute('draggable', true)
    //     node.ondragstart = this.handleDragstart
    //     node.ondragover = this.handleDragover
    //     node.ondrop = this.handleDrop
    //     node.ondragend = this.handleDragend
    //     node.ondragenter = this.handleDragenter
    //   }
    // })
  }

  /**
   * 拖拽开始
   * @param {Event} ev
   */
  handleDragstart(ev: Map, index: number): void {
    console.log('start:::::>', ev)
    this.targetIndex = index
    // ev.dataTransfer.setData('application/drag-node', ev.target.id)
    // ev.dataTransfer.dropEffect = 'move'
    // this.target = ev
  }
  /**
   * 拖拽中
   * @param {Event} ev
   */
  handleDragover(ev: Map): void {
    ev.preventDefault()
    // ev.dataTransfer.dropEffect = 'move'
  }
  /**
   * 当拖拽元素进入时调用
   * @param {Event} ev
   */
  handleDragenter(ev: Map, index: number): void {
    ev.preventDefault()
    // 避免源对象触发自身的dragenter事件
    if (this.targetIndex !== index) {
      const moving = this.sourceData[this.targetIndex]
      this.sourceData.splice(this.targetIndex, 1)
      this.sourceData.splice(index, 0, moving)
      // 排序变化后目标对象的索引变成源对象的索引
      this.targetIndex = index
      console.log('handleDragenter:::>', this.targetIndex)
    }
  }
  /**
   * 拖拽结束
   * @param {Event} ev
   */
  handleDragend(ev: Map): void {
    ev.preventDefault()
    // console.log('end::::>>>', ev)
  }
  /**
   * 释放目标
   * @param {Event} ev
   */
  handleDrop(ev: Map): void {
    ev.preventDefault()
    const data = ev.dataTransfer.getData('application/drag-node')
    const isBefore =
      Math.abs(this.target.x - ev.x) > 10
        ? this.target.x > ev.x
        : this.target.y > ev.y
    const nextNode = isBefore ? ev.target : ev.target.nextSibling
    ev.target.parentNode.insertBefore(document.getElementById(data), nextNode)
  }
}
