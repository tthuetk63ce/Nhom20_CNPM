class Scene2 extends Phaser.Scene {
    constructor() {
        super("Game");
    }
    preload() {
        this.load.image("ruler", "./img/ruler.png");
    }
    create() {
        this.add.image(400, 300, 'ruler');
    }
    update() {}
}