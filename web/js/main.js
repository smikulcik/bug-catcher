
var game = new Phaser.Game(800, 600, Phaser.CANVAS, '#game');

game.state.add('bugCatcher', bugCatcherState);
game.state.add('start', startState);

game.state.start('start');



function createSprite(spriteData, x, y){
  var sprite = game.add.sprite(x, y, spriteData.sprite_name);

  for (var a in spriteData.animations) {
    var anim = spriteData.animations[a];
    sprite.animations.add(a, anim.frames, anim.fps, anim.loop);
  }

  sprite.animations.play(spriteData.default_animation);

  return sprite;
}
