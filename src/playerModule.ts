
export class Player {
    position: {
        x: number, y: number
    }
    velocity: {
        x: number, y: number
    }
    width: number
    height: number
    gravity = 0.7
    constructor() {

        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 50
        this.height = 50

    }

    draw(c: CanvasRenderingContext2D) {
        c.fillStyle = 'darkolivegreen'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update(c: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        this.draw(c)
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if (this.position.y + this.height + this.velocity.y <= canvas.height)
            this.velocity.y += this.gravity
        else this.velocity.y = 0
    }
}









