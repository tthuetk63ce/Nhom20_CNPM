class Scene1 extends Phaser.Scene {
    constructor() {
        super("Game");
    }
    preload() {
        this.load.image("road", "./img/TrainRoad.png");
        this.load.image("train1", "./img/Train1.png");
        this.load.image("car0", "./img/Train_n.png");
        this.load.image("zone", "./img/zone.png");
        this.load.image("cir1", "./img/circle_head.png");
        this.load.image("cir2", "./img/circle_car.png");
        this.load.image("ball", "./img/ball.png");
        this.load.image("progressbar", "./img/progressbar.png");
    }

    create() {
        this.add.image(400, 50, 'progressbar');
        var head = this.add.image(105, 340, 'train1');
        var road = this.add.image(400, 360, 'road');
        head.setDepth(2);
        var train = this.physics.add.group();
        var trainRoad = this.add.group();
        var index = [17, 2, 11, 20, 7];
        var result = [2, 7, 11, 17, 20];
        for (var i = 0; i < 5; i++) {
            var car = train.create(100 + 150 * i, 150, 'car0').setInteractive();
            car.setDepth(1);
            car.name = index[i];

            this.input.setDraggable(car);
            var zone = this.add.zone(210 + i * 100, 340, 100, 70).setDropZone();
            var ground = trainRoad.create(210 + i * 110, 360, 'zone');
            ground.name = result[i];
        }

        this.input.on('drag', function(pointer, car, dragX, dragY, dropZone) {
            car.x = dragX;
            car.y = dragY;
            if (ground.name == car.name) {
                ground.tint = 0x00ff00;
            }
        });

        this.input.on('dragend', function(pointer, gameObject, dragX, dragY, dropZone) {
            // if (car.name == trainRoad.name) {
            //     trainRoad.tint = 0x00ff00;
            // }
        });

        this.input.on('drop', function(pointer, gameObject, dropZone) {
            gameObject.x = dropZone.x;
            gameObject.y = dropZone.y;
            gameObject.disableInteractive();
        });

        this.balls = this.physics.add.group({
            key: 'ball',
            repeat: 4,
            setXY: {
                x: 132,
                y: 50,
                stepX: 30
            }
        });

    }


    update() {
        var list = this.balls.getChildren();
    }

    onStop() {

    }
}