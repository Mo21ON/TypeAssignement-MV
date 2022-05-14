import {Entity} from "./Entity";

export class Enemy extends Entity{
    toDelete: boolean = false

    constructor() {
        super(1000, Math.random() < 0.5 ? 600 : 700, -5, 0, 100, 100);
    }

    draw(c: CanvasRenderingContext2D) {
        c.fillStyle = 'black'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update(c: CanvasRenderingContext2D) {
        this.draw(c)
        this.position.x += this.velocity.x
    }
}









