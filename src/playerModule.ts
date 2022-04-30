export class Player {


    drawPlayer(ctx: CanvasRenderingContext2D) {
        console.log('Hallo');
        // Stroked triangle
        ctx.beginPath();
        ctx.rect(0, 820, 70, 80);
        ctx.fillStyle = 'black';
        ctx.fill();

    }

}
