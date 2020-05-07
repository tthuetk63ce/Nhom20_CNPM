class Scene1 extends Phaser.Scene {
    constructor() {
        super("Game");
    }
    preload() {
        this.load.image("block1", "./img/1.png");
        this.load.image("block2", "./img/2.png");
        this.load.image("block3", "./img/3.png");
        this.load.image("block4", "./img/4.png");
        this.load.image("block5", "./img/5.png");
        this.load.image("block6", "./img/6.png");
        this.load.image("block7", "./img/7.png");
        this.load.image("block8", "./img/8.png");
        this.load.image("block9", "./img/9.png");
        this.load.image("road", "./img/TrainRoad.png");
        this.load.image("train1", "./img/Train1.png");
        this.load.image("car2", "./img/Train2.png");
        this.load.image("car7", "./img/Train7.png");
        this.load.image("car11", "./img/Train11.png");
        this.load.image("car12", "./img/Train12.png");
        this.load.image("car13", "./img/Train13.png");
        this.load.image("car14", "./img/Train14.png");
        this.load.image("car16", "./img/Train16.png");
        this.load.image("car17", "./img/Train17.png");
        this.load.image("car18", "./img/Train18.png");
        this.load.image("car19", "./img/Train19.png");
        this.load.image("car20", "./img/Train20.png");
        this.load.image("zone", "./img/zone.png");
        this.load.image("cir1", "./img/circle_head.png");
        this.load.image("cir2", "./img/circle_car.png");
        this.load.image("ball", "./img/ball.png");
        this.load.text("level", "./JS/level.json");
        this.load.image("progressbar", "./img/progressbar.png");
    }

    create() {
        this.add.image(400, 50, 'progressbar');
        this.trainRoad1 = new trainRoad(this, 0, 350, "road");
        this.groupTrain = new trainRoad(this, 0, 170, "road");

        this.level = 1;
        this.data = JSON.parse(this.cache.text.get("level")).level;
        this.setData(this.data[this.level - 1]);
        this.input.on("gameobjectup", this.onStop, this);
        this.input.on("drag", this.onDoDrag, this);
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


    update() {}

    onStop() {

    }
    onDoDrag(pointer, gameObject, dragX, dragY) {
        console.log(pointer.x + " " + pointer.y);
        if (dragX + gameObject.width > config.width) {
            gameObject.y = dragY;
        } else if (dragX < 0) {
            gameObject.x = 0;
        } else {
            gameObject.x = dragX;
        }

        if (dragY < 0) {
            gameObject.y = 0;
        } else if (dragY + gameObject.height > config.height) {
            gameObject.y = config.height - gameObject.height;
        } else {
            gameObject.y = dragY;
        }

    }
    setData(data) {
        this.setTrainRoad1(data.headTrain);
        this.setGroupTrain(data.train);
    }
    setTrainRoad1(data) {
        this.trainRoad1.addTrain(this.setTrain(0));
    }
    setGroupTrain(data) {
        for (var i = 0; i < data.length; i++) {
            this.groupTrain.addTrain(this.setTrain(data[i]));
        }
    }
    setTrain(num) {
        switch (num) {
            case 0:
                return new Train(this, 0, 0, 0, "train1");
            case 1:
                return new Train(this, 0, 0, 1, "car2");
            case 2:
                return new Train(this, 0, 0, 2, "car7");
            case 3:
                return new Train(this, 0, 0, 3, "car11");
            case 4:
                return new Train(this, 0, 0, 4, "car12");
            case 5:
                return new Train(this, 0, 0, 5, "car13");
            case 6:
                return new Train(this, 0, 0, 6, "car14");
            case 7:
                return new Train(this, 0, 0, 7, "car16");
            case 8:
                return new Train(this, 0, 0, 8, "car17");
            case 9:
                return new Train(this, 0, 0, 9, "car18");
            case 10:
                return new Train(this, 0, 0, 10, "car19");
            case 11:
                return new Train(this, 0, 0, 11, "car20");
        }
    }
}