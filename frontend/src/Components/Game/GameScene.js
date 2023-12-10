import Phaser from 'phaser';
import ScoreLabel from './ScoreLabel';
import skyAsset from '../../assets/sky_tes.jpg';
import asteroidAsset from '../../assets/asteroid.png';
import dudeAsset from '../../assets/Ship3.png';
import gameAudio from '../../assets/audio/gamemusic-6082.mp3';
import gameOverAudio from '../../assets/audio/game-over-arcade-6435.mp3';
import bulletAsset from '../../assets/bullets.png';
import starAsset from '../../assets/star.png';

const DUDE_KEY = 'dude';

class GameScene extends Phaser.Scene {
  constructor() {
    super('game-scene');
    this.player = undefined;
    this.cursors = undefined;
    this.scoreLabel = undefined;
    this.timerEvent = undefined;
    this.obstacles = undefined;
    this.obstacleDelay = 10; // Initial delay
    this.obstacleDelayDecreaseRate = 10; // Rate at which delay decreases
    this.minObstacleDelay = 10; // Minimum delay value
    this.gameOverFlag  = false;
    this.invulnerable = true;
    this.score = 0; // Initialize the score
    this.scoreIncrement = 10; // Increment value for the score
    this.scoreDelay = 1000;
  }

  preload() {
    this.load.image('sky', skyAsset);
    this.load.image('obstacle', asteroidAsset);
    this.load.image(DUDE_KEY, dudeAsset);
    this.load.audio('music', gameAudio);
    this.load.audio('gameOver', gameOverAudio);
  }

  create() {
    // background
    this.add.image(600, 400, 'sky'); // Center the background image
  
    // player
    this.player = this.physics.add.sprite(80, 400, DUDE_KEY); // Adjust player starting position
    // Setting a smaller hitbox for the player sprite
    this.player.setSize(60, 20); // Width of 40 pixels, height of 20 pixels

    // obstacles
    this.obstacles = this.physics.add.group();
    
    // Create obstacles outside the game scene
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 30; i++) { // Increase the number of obstacles
      const obstacle = this.obstacles.create(
        Phaser.Math.Between(400, 5000), // Place obstacles outside the game scene
        Phaser.Math.Between(0, 900),  // Place obstacles anywhere on the y-axis
        'obstacle'
      );
      this.physics.add.collider(this.player, obstacle, this.playerObstacleCollision, null, this);
    }
    this.music = this.sound.add('music');
    this.music.play({ loop: true });
    this.initialPlayerX = this.player.x;
    this.scoreLabel = this.createScoreLabel(16, 16, this.score);
    this.cursors = this.input.keyboard.createCursorKeys(); 
    this.scoreTimer = this.time.addEvent({
      delay: this.scoreDelay, // Update score every specified milliseconds
      callback: this.updateScore,
      callbackScope: this,
      loop: true
    });
    this.timerEvent = this.time.addEvent({
    delay: this.obstacleDelay,
    callback: this.moveObstacles,
    callbackScope: this,
    loop: true
    })

  }

  playerObstacleCollision() {
    this.gameOver();
  }
  
  gameOver(){
    this.scoreLabel.setText(`GAME OVER  \nYour Score = ${this.scoreLabel.score}`);
    this.physics.pause();
    this.music.stop();
    this.sound.play('gameOver');
    if (this.scoreTimer) {
      this.scoreTimer.destroy();
    }
    this.player.setTint(0xff0000);
    this.gameOverFlag  = true;
  }

  update() {
      if (this.gameOverFlag) {
          return;
      }
      const sceneHeight = 735;
      if (this.cursors.up.isDown && this.player.y > 0) {
          this.player.setVelocityY(-300);
      } else if (this.cursors.down.isDown && this.player.y < sceneHeight - this.player.displayHeight) {
          this.player.setVelocityY(300);
      } else {
          this.player.setVelocityY(0);
      }
  }
  
  updateScore() {
    if (!this.gameOverFlag) {
      this.score += this.scoreIncrement; // Increment the score by the defined value
      this.scoreLabel.setScore(this.score); // Update the score label
    }
  }
 
  moveObstacles() {
    const obstacleVelocity = -300; // Initial obstacle velocity
    const scoreMultiplier = 0.3; // Velocity increase per score unit

    // Increase obstacle velocity based on the score or distance traveled
    const currentScore = this.scoreLabel.score; // Get the current score
    const increasedVelocity = obstacleVelocity - (currentScore * scoreMultiplier);

    // Set the new velocity for the obstacles
    this.obstacles.setVelocityX(increasedVelocity);
    
    this.obstacles.children.iterate(obstacle => {
      if (obstacle && obstacle.getBounds().right < -100) { // Check if obstacle is completely outside the game scene
        obstacle.setPosition(
          Phaser.Math.Between(1200, 1400), // Reposition the obstacle outside the game scene
          Phaser.Math.Between(0, 800)     // Place obstacles anywhere on the y-axis
        );
      }
    });
    
  }

  createScoreLabel(x, y, score) {
    const style = { fontSize: '32px', fill: '#FFF' };
    const label = new ScoreLabel(this, x, y, score, style);
    this.add.existing(label);

    return label;
  }

}


export default GameScene;
