
import { Player } from "./playerModule";
import { Enemys } from "./enemyModule";

var canvas = document.getElementById('myCanvas') as HTMLCanvasElement
if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
}
const player = new Player();

function animate() {
    requestAnimationFrame(animate)
    if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        player.update(ctx, canvas)
    }
    
}
animate()

addEventListener('keydown', ({keyCode}) => {     
    //console.log(keyCode)                 // https://www.toptal.com/developers/keycode damit konnte ich die keycodes heruafinden
    switch(keyCode) {
        case 65:
            console.log('left')
            player.velocity.x = -15
            break
                    case 68:
                    console.log('right')
                    player.velocity.x = 15
                    break

                    case 87:
                    console.log('up')
                    player.velocity.y = 0
                    break

            
    }
    console.log(player.velocity)
})

addEventListener('keyup', ({keyCode}) => {     
    //console.log(keyCode)                 // https://www.toptal.com/developers/keycode damit konnte ich die keycodes heruafinden
    switch(keyCode) {
        case 65:
            console.log('left')
            player.velocity.x = 0
            break
                    case 68:
                    console.log('right')
                    player.velocity.x = 0
                    break

                    case 87:
                    console.log('up')
                    player.velocity.y -= 25
                    break

            
    }
    console.log(player.velocity)

    
})



