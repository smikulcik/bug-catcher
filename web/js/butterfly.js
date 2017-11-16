

var directions = ["up", "upright", "right", "downright", "down", "downleft", "left", "upleft"]

var Butterfly = function(sprite, name){
  this.sprite = sprite;
  this.direction = 0;
  sprite.pivot.x = sprite.width / 2;
  sprite.pivot.y = sprite.height / 2;
  this.Name = name;

  // so that no all butterflies have the same flutter
  this.flutterOffset = Math.random()*6;

  // offset frames so that the butterflies are not on the same flap
  this.sprite.animations.currentAnim.setFrame(Math.floor(Math.random()*this.sprite.animations.currentAnim.frameTotal), true);

  this.laziness = .5 + Math.random()*.5;
  this.indeciciveness = Math.random()*.1;
  this.speed = 1 + Math.random();
}

Butterfly.prototype.Update = function (){

  if(this.sprite.x > game.world.width)
    this.sprite.x = game.world.width
  if(this.sprite.x < 0)
    this.sprite.x = 0
  if(this.sprite.y > game.world.height)
    this.sprite.y = game.world.height
  if(this.sprite.y < 0)
    this.sprite.y = 0

  // maybe change direction
  if(Math.random() < this.indeciciveness) {
    this.direction = (this.direction + (Math.random() < 0.5 ? -1 : 1) + 8) % 8;
  }

  // either move or stand still
  if(Math.random() < this.laziness) {
    switch (directions[this.direction]) {
      case "up":
      this.sprite.y -= this.speed;
      this.sprite.scale.y = 1;
      this.sprite.scale.x = 1;
      break;
      case "upright":
      this.sprite.y -= this.speed*.7;
      this.sprite.x += this.speed*.7;
      this.sprite.scale.y = 1;
      this.sprite.scale.x = 1;
      break;
      case "right":
      this.sprite.x += this.speed;
      this.sprite.scale.y = 1;
      this.sprite.scale.x = 1;
      break;
      case "downright":
      this.sprite.y += this.speed*.7;
      this.sprite.x += this.speed*.7;
      this.sprite.scale.y = -1;
      this.sprite.scale.x = 1;
      break;
      case "down":
      this.sprite.y += this.speed;
      this.sprite.scale.y = -1;
      this.sprite.scale.x = 1;
      break;
      case "downleft":
      this.sprite.y += this.speed*.7;
      this.sprite.x -= this.speed*.7;
      this.sprite.scale.y = -1;
      this.sprite.scale.x = -1;
      break;
      case "left":
      this.sprite.x -= this.speed;
      this.sprite.scale.y = 1;
      this.sprite.scale.x = -1;
      break;
      case "upleft":
      this.sprite.y -= this.speed*.7;
      this.sprite.x -= this.speed*.7;
      this.sprite.scale.y = 1;
      this.sprite.scale.x = -1;
      break;
    }
  }

  // flutter up and down
  this.sprite.y += Math.sin(this.flutterOffset + game.time.totalElapsedSeconds()*6)*.3
}
