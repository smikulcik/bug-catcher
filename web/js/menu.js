

var DetailsMenu = function(){
  this.currentBug = '';

  this.background = game.add.tileSprite(0, 0, game.width, game.height, 'menuTex');
  this.background.fixedToCamera = true;


  this.exitButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);


  this.bug = game.add.sprite(0, 0);
  this.bug.fixedToCamera = true;
  this.bug.anchor.x = 1;
  this.bug.anchor.y = .5;

  var textStyle = { font: 'bold 30pt Arial', fill: 'black', wordWrap: true, wordWrapWidth: 500 };

  this.nameText = game.add.text(0, 0, "", textStyle);
  this.nameText.fixedToCamera = true;
  this.sizeText = game.add.text(0, 0, "", textStyle);
  this.sizeText.fixedToCamera = true;
  this.foodText = game.add.text(0, 0, "", textStyle);
  this.foodText.fixedToCamera = true;
  this.factText = game.add.text(0, 0, "", textStyle);
  this.factText.fixedToCamera = true;

  this.visible = false;
};

DetailsMenu.prototype.update = function(){

  if(this.exitButton.isDown){
    this.visible = false;
  }
}

DetailsMenu.prototype.draw = function(){
  this.background.visible = this.visible;
  this.bug.visible = this.visible;
  this.nameText.visible = this.visible;
  this.sizeText.visible = this.visible;
  this.foodText.visible = this.visible;
  this.factText.visible = this.visible;

  if (!this.visible){
    return;
  }

  if (inventory.length > 0 && this.currentBug != inventory[0]){
    this.currentBug = inventory[0];
    this.bug.loadTexture(inventory[0] + 'Big');
    this.bug.animations.add('fly', [0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1], 10, true);
    this.bug.animations.play('fly');
  }

  // draw everything
  this.background.width = game.width;
  this.background.height = game.height;

  this.bug.cameraOffset.x = game.width/2 - 50;
  this.bug.cameraOffset.y = game.height/2;

  this.nameText.cameraOffset.x = game.width/2 + 50;
  this.nameText.cameraOffset.y = game.height/2 - 100;
  this.sizeText.cameraOffset.x = game.width/2 + 50;
  this.sizeText.cameraOffset.y = game.height/2 - 50;
  this.foodText.cameraOffset.x = game.width/2 + 50;
  this.foodText.cameraOffset.y = game.height/2;
  this.factText.cameraOffset.x = game.width/2 + 50;
  this.factText.cameraOffset.y = game.height/2 + 50;
  if(this.currentBug){
    this.nameText.text = "Name: " + bugData[this.currentBug].name;
    this.sizeText.text = "Size: " + bugData[this.currentBug].size;
    this.foodText.text = "Food: " + bugData[this.currentBug].food;
    this.factText.text = "Fact: " + bugData[this.currentBug].fact;
  }
};
