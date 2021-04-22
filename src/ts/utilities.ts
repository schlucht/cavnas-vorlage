export class Utilities {
    public static randomRange(min: number, max: number): number {
        return Math.floor(Math.random() * (min - max + 1) + min)
    }
    public static randomColor(maxColor: number): string {
        const colors: string[] = []
        for (let i = 0; i < maxColor; i++) {
            colors.push(
                `rgb(${Utilities.randomRange(0, 255)}, ${Utilities.randomRange(
                    0,
                    255
                )}, ${Utilities.randomRange(0, 255)})`
            )
        }
        return colors[Utilities.randomRange(0, maxColor)]
    }
}
