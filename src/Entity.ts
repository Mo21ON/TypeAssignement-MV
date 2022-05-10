export class Entity{
    position: {
        x: number, y: number
    }
    velocity: {
        x: number, y: number
    }
    width: number
    height: number
    constructor(x: number, y: number, xV: number, yV: number, width: number, height: number) {
        this.position = {
            x,
            y
        }
        this.velocity = {
            x: xV,
            y: yV
        }
        this.width = width
        this.height = height
    }
}