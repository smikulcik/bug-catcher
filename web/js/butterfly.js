

var directions = ["up", "upright", "right", "downright", "down", "downleft", "left", "upleft"]

var Butterfly = function(sprite, name){
  this.sprite = sprite;
  this.direction = 0;
  sprite.pivot.x = sprite.width / 2;
  sprite.pivot.y = sprite.height / 2;
  this.Name = name;
}

Butterfly.prototype.Update = function (){
  // maybe change direction
  if(Math.random() < 0.05) {
    this.direction = (this.direction + (Math.random() < 0.5 ? -1 : 1) + 8) % 8;
  }

  // either move or stand still
  if(Math.random() < .7) {
    var speed = 2;
    switch (directions[this.direction]) {
      case "up":
      this.sprite.y -= speed;
      this.sprite.scale.y = 1;
      this.sprite.scale.x = 1;
      break;
      case "upright":
      this.sprite.y -= speed*.7;
      this.sprite.x += speed*.7;
      this.sprite.scale.y = 1;
      this.sprite.scale.x = 1;
      break;
      case "right":
      this.sprite.x += speed;
      this.sprite.scale.y = 1;
      this.sprite.scale.x = 1;
      break;
      case "downright":
      this.sprite.y += speed*.7;
      this.sprite.x += speed*.7;
      this.sprite.scale.y = -1;
      this.sprite.scale.x = 1;
      break;
      case "down":
      this.sprite.y += speed;
      this.sprite.scale.y = -1;
      this.sprite.scale.x = 1;
      break;
      case "downleft":
      this.sprite.y += speed*.7;
      this.sprite.x -= speed*.7;
      this.sprite.scale.y = -1;
      this.sprite.scale.x = -1;
      break;
      case "left":
      this.sprite.x -= speed;
      this.sprite.scale.y = 1;
      this.sprite.scale.x = -1;
      break;
      case "upleft":
      this.sprite.y -= speed*.7;
      this.sprite.x -= speed*.7;
      this.sprite.scale.y = 1;
      this.sprite.scale.x = -1;
      break;
    }
  }

  // flutter up and down
    //this.sprite.y += Math.sin(game.time.totalElapsedSeconds()*3)*1.3
}
