import {Player} from "./player";
import {Info} from "./info"
import {Laser} from "./laser"


export class World {
    ev;
    constructor() {
        // Создадим игрока
        this.player = new Player(window.innerWidth / 2, window.innerHeight / 2);
        this.a = []
    }

    // ToDo: Создать массив лазеров

    // В зависисмости от нажатых клавиш изменяем среду


    // ToDo: Метод click, которая принимает x, y
    click(x, y) {
                let laser = new Laser(this.player.x, this.player.y, x, y);
                this.a = [...this.a, laser];
            }

    move = (keys) => {
        // Для каждого ключа в объекте
        Object.keys(keys).map((key) => {
            // Если нажата кнопка
            if (keys[key]) {
                // Взависимости от того какая кнопка
                switch (key) {
                    case "a":
                        this.player.go_left();
                        break;
                    case "d":
                        this.player.go_right();
                        break;
                    case "s":
                        this.player.go_down();
                        break;
                    case "w":
                        this.player.go_up();
                        break;
                }
            }
        });

    };

    get_items() {
        // ToDo: Возвращать массив лазеров
        this.a = this.a.filter(las => Math.round(las.cur_x) !== Math.round(las.dist_x) && Math.round(las.cur_y) !== Math.round(las.dist_y));
        return [this.player, ...this.a, new Info(this.player.x, this.player.y)]
    }

}

