export class Point {
    constructor(public X: number, public Y: number) {
        this.X = Math.floor(X)
        this.Y = Math.floor(Y)
    }
    toString(): string {
        return `Point.X: ${this.X}, Point.Y: ${this.Y}`
    }
}
