import { Mouse } from './ts/mouse'
import { Particle } from './ts/canvasObjects/particle'
import { Point } from './ts/point'

const canvas = document.querySelector('#canvas1')! as HTMLCanvasElement
const ctx = canvas.getContext('2d')
const mouse = new Mouse(0, 0)

canvas.width = window.innerWidth
canvas.height = window.innerHeight

window.addEventListener('resize', (event: Event) => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})

window.addEventListener('mousemove', (event: MouseEvent) => {
    mouse.X = event.clientX
    mouse.Y = event.clientY
})
const prtcl: Particle = new Particle(ctx, new Point(mouse.X, mouse.Y), 20)
function init() {}
function animate(): void {
    ctx.clearRect(0, 0, innerWidth, innerHeight)
    new Particle(ctx, new Point(mouse.X, mouse.Y), 20)
    requestAnimationFrame(animate)
}

animate()
