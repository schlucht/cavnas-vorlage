import { Point } from '../point'
export class Particle {
    constructor(
        public ctx: CanvasRenderingContext2D,
        public point: Point,
        public size: number,
        public color: string = '#ff0000',
        public border: string = '#fffff'
    ) {
        this.draw()
    }

    public draw() {
        this.ctx.beginPath()
        this.ctx.fillStyle = this.color
        this.ctx.strokeStyle = this.border
        this.ctx.arc(this.point.X, this.point.Y, this.size, 0, Math.PI * 2)
        this.ctx.fill()
        this.ctx.stroke()
    }
}
