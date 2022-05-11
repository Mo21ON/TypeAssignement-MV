import {Entity} from "./Entity";

export class Enemy extends Entity{
    toDelete: boolean = false

    constructor() {
        super(1000, Math.random() < 0.5 ? 600 : 700, -5, 0, 100, 100);
    }
}
