var config = {
    width: 790,
<<<<<<< HEAD
    height: 460,
    backgroundColor: 0xdddddd,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload() {
    this.load.image("road", "./img/TrainRoad.png");
    this.load.image("train1", "./img/Train1.png");
    this.load.image("car0", "./img/Train_n.png", { frameWidth: 20, frameHeight: 10 });
}

function create() {
    this.add.image(400, 200, 'train1');
    this.add.image(400, 100, 'car0');
    this.add.image(300, 370, 'road');
}

function update() {

}
=======
    height: 440,
    backgroundColor: 0xffffff,
    physics: {
        default: "arcade",
        arcade: {
            //gravity: { y: 300 },
            debug: false
        }
    },
    scene: [Scene1]
};

var game = new Phaser.Game(config);
>>>>>>> 3172f43916f7a7511eb4b427dc5584c15f4ffc8f
