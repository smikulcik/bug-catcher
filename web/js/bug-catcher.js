//exports
var bugCatcherState;

var inventory = [];

//debug
var detailsMenu;
var player;
var readyToShowDetails = false;
var playerPauseCountdown = 0;

// privates
(function(){
var map;
var layer;
var cursors;
var catchButton;
var playerDirection = "forward";
var butterflies = [];

bugCatcherState = {

  preload: function() {
    //  game.load.tilemap('map', 'assets/tilemaps/csv/catastrophi_level2.csv', null, Phaser.Tilemap.CSV);
    //  game.load.image('tiles', 'assets/tilemaps/tiles/catastrophi_tiles_16.png');
    //  game.load.image('player', 'assets/sprites/tinycar.png');
    game.load.spritesheet('player', 'assets/sprites/louis.png', 200, 200)
    game.load.image('background', 'assets/textures/grass.png')
    game.load.image('menuTex', 'assets/textures/menu.png')
    game.load.spritesheet('monarch', 'assets/sprites/monarch.png', 25, 25)
    game.load.spritesheet('monarchBig', 'assets/sprites/monarchBig.png', 400, 400)
  },

  create: function() {

      game.scale.scaleMode = Phaser.ScaleManager.RESIZE;

      game.add.tileSprite(0, 0, 1920, 1920, 'background');
      game.world.setBounds(0, 0, 1920, 1920);

      game.physics.startSystem(Phaser.Physics.P2JS);

      player = createSprite(playerData, game.world.centerX, game.world.centerY);

      for(var i=0;i<10;i++){
        butterflies.push(new Butterfly(
          createSprite(bugData.monarch, game.world.centerX + Math.random()*600-300, game.world.centerY + Math.random()*600 - 300),
          "Monarch Butterfly"
        ));
      }
      game.physics.p2.enable(player);

      cursors = game.input.keyboard.createCursorKeys();
      catchButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

      game.camera.follow(player);

      detailsMenu = new DetailsMenu();
  },

  update: function() {

    detailsMenu.draw();
    if (detailsMenu.visible){
      detailsMenu.update();
      return;
    }
    if (!catchButton.isDown && readyToShowDetails) {
      detailsMenu.visible = true;
      readyToShowDetails = false;
      player.animations.play('idle'+playerDirection)
      return
    }

    player.body.rotation=0;
    player.body.setZeroVelocity();

    for(var b in butterflies){
        butterflies[b].Update()
    }

    if (playerPauseCountdown > 0){
      playerPauseCountdown--
      return;
    }

    if(catchButton.isDown){
      player.animations.play('catch' + playerDirection);
      catchBug();
      playerPauseCountdown=50;
    }
    else if (cursors.left.isDown)
    {
      player.body.moveLeft(300)
      player.animations.play('walkleft');
      playerDirection = "left";
    }
    else if (cursors.right.isDown)
    {
      player.body.moveRight(300)
      player.animations.play('walkright');
      playerDirection = "right";
    }
    else if (cursors.up.isDown)
    {
      player.body.moveUp(300)
      player.animations.play('walkback');
      playerDirection = "back";
    }
    else if (cursors.down.isDown)
    {
      player.body.moveDown(300)
      player.animations.play('walkforward');
      playerDirection = "forward";
    } else {
      player.animations.play('idle'+playerDirection)
    }
  }
};

var box = null;
function AddBox(x, y, width, height){
  if( box !== null) box.destroy();

  var bmd = game.add.bitmapData(width, height);

  bmd.ctx.beginPath();
  bmd.ctx.rect(0, 0, width, height);
  bmd.ctx.fillStyle = 'RGBA(255,255,255,25)';
  bmd.ctx.fill();
  box = game.add.sprite(x, y, bmd);
}


function catchBug(){
  var hitboxX, hitboxY, hitboxW, hitboxH;
  switch (playerDirection) {

    case "forward":
      hitboxX = player.x - 30;
      hitboxY = player.y - 30;
      hitboxW = 75;
      hitboxH = 100;
    break;
    case "back":
      hitboxX = player.x - 90;
      hitboxY = player.y - 50;
      hitboxW = 150;
      hitboxH = 50;
    break;
    case "right":
      hitboxX = player.x + 20;
      hitboxY = player.y - 70;
      hitboxW = 50;
      hitboxH = 150;
    break;
    case "left":
      hitboxX = player.x - 70;
      hitboxY = player.y - 70;
      hitboxW = 50;
      hitboxH = 150;
    break;
  }
  //AddBox(hitboxX, hitboxY, hitboxW, hitboxH);

  // catch bugs that are in hitbox
  for (var b = butterflies.length - 1; b >= 0; b--){
    if(IsInBox(butterflies[b].sprite.x, butterflies[b].sprite.y, hitboxX, hitboxY, hitboxW, hitboxH)){
      butterflies[b].sprite.destroy();
      inventory.push(butterflies[b].sprite.key);
      butterflies.splice(b,1);
      readyToShowDetails = true;
    }
  }
}

function IsInBox(px, py, bx, by, bw, bh){
  if(px > bx && py > by && px < bx+bw && py < by+bh){
    return true;
  }
  return false;
}
})();
