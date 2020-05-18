class Ball extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, num, obj) {
        super(scene, 100, 170, obj);
        this.setNum(num);
        scene.add.existing(this).setOrigin(0, 0);
        scene.physics.add.existing(this);
        this.setInteractive();
        this.setDepth(1);
        scene.input.setDraggable(this);
    }

    create() {
        let num = 1;
        var speed = 5;
    }

    offMove() {
        this.disableInteractive();
    }

    onMove() {
        this.setInteractive();
    }

    touchBall(scene) {

    }

    onVisible() {

    }

    setNum(num) {
        this.num = num;
    }
    getNum() {
        return this.num;
    }

}