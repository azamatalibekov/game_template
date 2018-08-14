import * as PIXI from "pixi.js";

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes
export class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 10;
    }

    draw() {
        // http://pixijs.download/dev/docs/PIXI.Graphics.html
        const graphics = new PIXI.Graphics();

        graphics.beginFill(0xFF0000);
        graphics.drawCircle(this.x, this.y, this.r);
        graphics.endFill();

        return graphics
    }

    go_left = () => {
        this.x - 20 >= 0 ? this.x -= 10 : null
    };

    go_right = () => {
        this.x+17<=window.innerWidth ? this.x += 10 : null
    };

    go_up = () => {
        0 <= this.y - 15 ? this.y -= 10 : null
    };

    go_down = () => {
        this.y + 10 <= window.innerHeight ? this.y += 10 : null
    }
}