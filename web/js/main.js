
var game = new Phaser.Game(800, 600, Phaser.CANVAS, '#game');

game.state.add('bugCatcher', bugCatcherState);
game.state.add('start', startState);

game.state.start('start');
