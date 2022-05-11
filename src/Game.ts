import {Enemy} from "./Enemy";
import {Player} from "./Player";

let canvas = document.getElementById('myCanvas') as HTMLCanvasElement
let ctx = canvas.getContext('2d');

let enemies: Enemy[] = [];
let player = new Player();