class Scene2 extends Phaser.Scene {
    constructor() {
        super("Game");
    }
    preload() {
        this.load.image("ruler", "./img/ruler.png");
        this.load.image("progressbar", "./img/progressbar.png");
        this.load.image("ball", "./img/ball.png");
        this.load.image("ballObj", "./img/ballObj.png");
        this.load.image("ballObj2", "./img/ballObj2.png");
    }
    create() {
        this.add.image(20, 300, 'ruler').setOrigin(0, 0);
        this.add.image(400, 50, 'progressbar');
        this.balls = this.physics.add.group({
            key: 'ball',
            repeat: 4,
            setXY: {
                x: 132,
                y: 50,
                stepX: 30
            }
        });
        this.ballObj = new Ball(this, 5, 'ballObj');
        this.input.on("gameobjectdown", this.onStart, this);
        this.input.on("gameobjectup", this.onStop, this);
        this.input.on("drag", this.onDoDrag, this);

    }

    update() {
        var list = this.balls.getChildren();
    }

    onDoDrag(pointer, gameObject, dragX, dragY) {
        if (dragX < 20) {
            gameObject.x = 20;
        } else if (dragX > 700) {
            gameObject.x = 700;
        } else {
            gameObject.x = dragX;
        }

        gameObject.y = 170;
    }

    onStart(pointer, gameObject) {}

    onStop(pointer, gameObject) {}
}