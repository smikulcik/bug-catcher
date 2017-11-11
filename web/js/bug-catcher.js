
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update, render: render });

function preload() {

  //  game.load.tilemap('map', 'assets/tilemaps/csv/catastrophi_level2.csv', null, Phaser.Tilemap.CSV);
  //  game.load.image('tiles', 'assets/tilemaps/tiles/catastrophi_tiles_16.png');
  //  game.load.image('player', 'assets/sprites/tinycar.png');

}

var map;
var layer;
var wasd = {};
var player;

function create() {

    //  Player
    //player = game.add.sprite(48, 48, 'player');

    //game.camera.follow(player);

    //  Allow cursors to scroll around the map
    wasd.up = game.input.keyboard.addKey(Phaser.Keyboard.W);
    wasd.left = game.input.keyboard.addKey(Phaser.Keyboard.A);
    wasd.down = game.input.keyboard.addKey(Phaser.Keyboard.S);
    wasd.right = game.input.keyboard.addKey(Phaser.Keyboard.D);

    var help = game.add.text(16, 16, 'Arrows to move', { font: '14px Arial', fill: '#ffffff' });
    help.fixedToCamera = true;

}

function update() {

    if (wasd.left.isDown)
    {
    }
    else if (wasd.right.isDown)
    {
    }
    else
    {
    }

    if (wasd.up.isDown)
    {
    }
    else if (wasd.down.isDown)
    {
    }

}

function render() {
}
