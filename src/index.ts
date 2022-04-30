import { Player } from "./playerModule";
function draw() {
  var canvas = document.getElementById('myCanvas') as HTMLCanvasElement
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    // grüner Boden

    if (ctx) {


      ctx.beginPath();
      ctx.rect(0, 900, 1200, 150);
      ctx.fillStyle = 'darkolivegreen';
      ctx?.fill();

      const player = new Player();
      player.drawPlayer(ctx)
    }


  }
}
draw();