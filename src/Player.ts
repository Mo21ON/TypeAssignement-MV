import {Entity} from "./Entity";

export class Player extends Entity{
    jumpTime: number | null = null
    gravity = 0.2

    constructor() {
        super(100, 100, 0, 0, 50, 50)
    }

    draw(c: CanvasRenderingContext2D) {
        c.fillStyle = 'darkolivegreen'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }}







