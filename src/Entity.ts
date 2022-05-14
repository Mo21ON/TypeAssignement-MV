export class Entity {
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

    hasCollided(entity: Entity) {
        // hilfe für die collision detection https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection & Hilfestellung von Arbeitskollegen
        return this.position.x < entity.position.x + entity.width &&
            this.position.x + this.width > entity.position.x &&
            this.position.y < entity.position.y + entity.height &&
            this.height + this.position.y > entity.position.y;
    }
}