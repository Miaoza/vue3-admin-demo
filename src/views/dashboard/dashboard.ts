import { Map } from '@/interfaces'
import { Options, Vue } from 'vue-class-component'

@Options({})
export default class Dashboard extends Vue {
  target: Map = {}
  handleDragstart(ev: Map): void {
    console.log('start:::::>', ev)
    ev.dataTransfer.setData('application/drag-node', ev.target.id)
    ev.dataTransfer.dropEffect = 'move'
    this.target = ev
  }
  handleDragover(ev: Map): void {
    ev.preventDefault()
    ev.dataTransfer.dropEffect = 'move'
  }
  handleDrop(ev: Map): void {
    ev.preventDefault()
    const data = ev.dataTransfer.getData('application/drag-node')
    const isBefore =
      Math.abs(this.target.x - ev.x) > 10
        ? this.target.x > ev.x
        : this.target.y > ev.y
    const nextNode = isBefore ? ev.target : ev.target.nextSibling
    ev.target.parentNode.insertBefore(document.getElementById(data), nextNode)
    console.log(isBefore, 'drop:::::>', ev)
  }
  handleDragend(ev: Map): void {
    console.log('end::::>>>', ev)
  }
}
