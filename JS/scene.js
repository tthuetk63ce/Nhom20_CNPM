class Scene1 extends Phaser.Scene {
    constructor() {
        super("Game");
    }
    preload() {
        this.load.image("road", "./img/TrainRoad.png");
        this.load.image("train1", "./img/Train1.png");
        this.load.image("car0", "./img/Train_n.png");
    }

    create() {
        this.add.image(400, 200, 'train1');
        this.add.image(400, 100, 'car0');
        this.add.image(300, 370, 'road');
    }

}