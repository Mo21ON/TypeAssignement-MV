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
    }
   
    update(c: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        this.draw(c)

        if(this.jumpTime && this.jumpTime + 200 < Date.now()){
            this.jumpTime = null;
        }
        if(this.jumpTime){
            this.velocity.y = -6;
        }
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        if (this.position.y + this.height + this.velocity.y <= canvas.height)
            this.velocity.y += this.gravity
        else {
            this.velocity.y = 0
        }
       

    }
}
