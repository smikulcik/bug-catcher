

var startButton;
var bkg;
var pressSpaceText;
var startState = {

  preload: function() {

    game.load.image('background', 'assets/img/start.png')
  },

  create: function() {
  game.scale.scaleMode = Phaser.ScaleManager.RESIZE;

    bkg = game.add.sprite(game.world.centerX, game.world.centerY, 'background');
    bkg.anchor.x = .5;
    bkg.anchor.y = .5;


    pressSpaceText = game.add.text(game.world.centerX, game.world.centerY, 'Press Space to Start');
    pressSpaceText.anchor.x = .5;
    pressSpaceText.anchor.y = .5;

    startButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  },

  update: function(){
    if (startButton.isDown) {
      game.state.start('bugCatcher');
    }
    bkg.x = game.world.centerX;
    bkg.y = game.world.centerY;
    var scale = Math.max(game.world.height/(bkg.height/bkg.scale.y), game.world.width/(bkg.width/bkg.scale.x))
    bkg.scale.x = scale;
    bkg.scale.y = scale;

    pressSpaceText.x = game.world.centerX;
    pressSpaceText.y = game.world.height*.9;
  }
};
