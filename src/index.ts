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
     //check for collision de, if yes: game over
     if(player.hasCollided(enemy)){
        gameover = true;
        return;
    }
    //mark for delete if outside canvas
    if(enemy.position.x <= -50){
        enemy.toDelete = true;
    }

}

}

//delete enemies when outside canvas
let lenBefore = enemies.length;
enemies = enemies.filter((en: Enemy) => !en.toDelete); 
let lenAfter = enemies.length;
if(lenBefore !== lenAfter){
    score += lenBefore-lenAfter;
    updateUi()
    console.log("score: ", score);
    if(timeBetweenEnemies - removeTimePerScore > 200){
        timeBetweenEnemies -= removeTimePerScore;
    
    
}

requestAnimationFrame(animate)
   
function updateUi(){
        let scoreP = document.getElementById("score") as HTMLParagraphElement;
        scoreP.innerText = `Score: ${score}`;
    
        //DOM Manipulation
    }
}

function restart() {
    let parent = document.getElementById("gameover") as HTMLDivElement;
    parent.innerHTML = '';
    gameover = false;
    timeBetweenEnemies = 2000;
    score = 0;
    removeTimePerScore = 20;
    lastEnemyTime = Date.now();
    enemies = [];
    player = new Player();
    requestAnimationFrame(animate);
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