class trainRoad extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y, obj) {
        super(scene, x, y, obj);
        scene.add.existing(this).setOrigin(0, 0);
        scene.physics.add.existing(this);
        this.createList(scene);
        this.setScene(scene);
    }

    create() {
        var train;
    }
    createList(scene) {
        this.train = scene.add.group();
    }

    setScene(scene) {
        this.scene = scene;
    }

    sort() {
        var list = this.train.getChildren();
        for (var i = 0; i < list.length; i++) {
            list[i].x = i * 107 + 30;
            list[i].y = this.y - 30;
        }

    }
    addTrain(obj) {
        this.train.add(obj);
        this.sort();
    }
    removeTrain(obj) {
        this.train.remove(obj);
    }
}