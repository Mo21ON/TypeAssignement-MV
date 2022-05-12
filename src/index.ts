import {Enemy} from "./Enemy";
import {Player} from "./Player";

let canvas = document.getElementById('myCanvas') as HTMLCanvasElement
let ctx = canvas.getContext('2d');
let gameover = false;
let timeBetweenEnemies = 2000;
let removeTimePerScore = 20;
let score = 0;
let lastEnemyTime = Date.now();
let enemies: Enemy[] = [];
let player = new Player();

function animate() {
   if (!ctx || gameover) {
        return;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    player.update(ctx, canvas)
    if(lastEnemyTime + timeBetweenEnemies < Date.now()){
        //spawn of enemy
        console.log("spawn");
        enemies.push(new Enemy());
        lastEnemyTime = Date.now();
}
for(let key in enemies){
    let enemy = enemies[key];
    //update der enemy positions
    enemy.update(ctx);

}

requestAnimationFrame(animate)
}


addEventListener('keydown', ({keyCode}) => {     
    //console.log(keyCode)             
    switch(keyCode) {
        case 87:
        console.log('up')
        if(!player.jumpTime && player.velocity.y === 0){
            player.jumpTime = Date.now();
        }
        break
    }
})

addEventListener('keyup', ({keyCode}) => {
    
})