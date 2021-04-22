export class Mouse {
    constructor(public X: number, public Y: number) {}
    toString(): string {
        return `Mouse.X: ${this.X}, Mouse.Y: ${this.Y}`
    }
}
