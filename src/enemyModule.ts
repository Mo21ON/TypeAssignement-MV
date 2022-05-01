export class Enemys {

    drawEnemy(ctx: CanvasRenderingContext2D) {
        console.log('Hallo');
        // schwarzer block
        ctx.beginPath();
        ctx.rect(120, 820, 70, 80);
        ctx.fillStyle = 'red';
        ctx.fill();



    }
}
