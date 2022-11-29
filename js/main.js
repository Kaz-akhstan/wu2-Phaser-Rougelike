var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var ally = {
    hp: 5,
    dmg: 1
};

function preload() {
    
}

function create() {
    var allies = this.add.group();

    this.input.on('pointerdown', function (pointer) {
        console.log('down');
        allies.add.rectangle(pointer.worldX, pointer.worldY, 20, 20, 0x6666ff);
    }, this);
}

function update() {

}
