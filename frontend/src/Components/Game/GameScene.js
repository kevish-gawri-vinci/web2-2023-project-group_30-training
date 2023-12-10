import Phaser from 'phaser';
import ScoreLabel from './ScoreLabel';
import skyAsset from '../../assets/sky_test.png';
import asteroidAsset from '../../assets/asteroid.png';
import dudeAsset from '../../assets/Ship1.png';
import bulletAsset from '../../assets/bullets.png';

const DUDE_KEY = 'dude';
const BULLET_KEY = 'bullet';

class GameScene extends Phaser.Scene {
  constructor() {
    super('game-scene');
    this.player = undefined;
    this.cursors = undefined;
    this.scoreLabel = undefined;
    this.timerEvent = undefined;
    this.obstacles = undefined;
    this.obstacleDelay = 100; // Initial delay
    this.obstacleDelayDecreaseRate = 10; // Rate at which delay decreases
    this.minObstacleDelay = 10; // Minimum delay value
    this.gameOverFlag  = false;
  }

  preload() {
    this.load.image('sky', skyAsset);
    this.load.image('obstacle', asteroidAsset);
    this.load.image(DUDE_KEY, dudeAsset);
    this.load.image(BULLET_KEY, bulletAsset);
  }

  create() {
    // background
    this.add.image(400, 300, 'sky');

    // player
    this.player = this.physics.add.sprite(100, 450, DUDE_KEY);
    this.player.setCollideWorldBounds(true);

    // obstacles
    this.obstacles = this.physics.add.group({
      key: 'obstacle',
      repeat: 20,
      setXY: {
        x: 800, y: 0, stepX: 250
      }
    })

    // create obstacles at random heights
    this.obstacles.children.iterate(obstacle => {
      if (obstacle) {
          const randomY = Phaser.Math.Between(15, 705);
          obstacle.setPosition(obstacle.x, randomY);
      }
      
    });

    this.physics.add.collider(this.player, this.obstacles, this.playerObstacleCollision, null, this);

    this.scoreLabel = this.createScoreLabel(16, 16, 0);

    this.cursors = this.input.keyboard.createCursorKeys();

    this.timerEvent = this.time.addEvent({
      delay: this.obstacleDelay,
      callback: this.moveObstacles,
      callbackScope: this,
      loop: true
    })

    // bullets
    this.bullets = this.physics.add.group({
      key: BULLET_KEY,
      repeat: 9,
      setXY: { x: -10, y: -10 },
      active: false,
      visible: false,
    });

    this.bullets.children.iterate(bullet => {
      bullet.setActive(false).setVisible(false);
    });

    this.bulletReadyText = this.add.text(16, 50, 'Bullet Ready', { fontSize: '20px', fill: '#00FF00' });

    this.lastFiredTime = 0;  // Time when the last bullet was fired
    this.fireDelay = 1000;    // Delay between consecutive shots in milliseconds

    this.physics.add.collider(this.bullets, this.obstacles, this.bulletObstacleCollision, null, this);
    this.physics.world.setBoundsCollision(true, true, false, false);
  }

  playerObstacleCollision() {
    this.gameOver();
  }
  
  gameOver(){
    this.scoreLabel.setText(`GAME OVER :( \nYour Score = ${this.scoreLabel.score}`);
    this.physics.pause();

    this.player.setTint(0xff0000);
    this.gameOverFlag  = true;
  }

  update() {
    if (this.gameOverFlag) {
      return;
    }

    if (this.cursors.up.isDown) {
      this.player.setVelocityY(-330);
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(330);
    } else {
      this.player.setVelocityY(0);
    }

    if (this.cursors.space.isDown) {
      this.tryShootBullet();
    }

    // Update bullet ready text
    const currentTime = this.time.now;
    const timeSinceLastShot = currentTime - this.lastFiredTime;
    
    if (timeSinceLastShot > this.fireDelay) {
      this.bulletReadyText.setText('Bullet Ready');
      this.bulletReadyText.setFill('#00FF00');  // Green color
    } else {
      const timeRemaining = (this.fireDelay - timeSinceLastShot) / 1000;
      this.bulletReadyText.setText(`Bullet Cooldown: ${timeRemaining.toFixed(1)}s`);
      this.bulletReadyText.setFill('#FF0000');  // Red color
    }
  }

  moveObstacles(){
    this.obstacles.setVelocityX(-200);

    this.obstacles.children.iterate(obstacle =>{
      if(obstacle && obstacle.getBounds().right<0){
        const randomY = Phaser.Math.Between(100, 500);
        obstacle.setPosition(800, randomY);

        this.scoreLabel.add(10)
      }
    })

    // decrease delay to make obstacles appear faster over time
    this.obstacleDelay -= this.obstacleDelayDecreaseRate;

    // Ensure delay doesn't go below a minimum value
    this.obstacleDelay = Math.max(this.obstacleDelay, this.minObstacleDelay);

    // Update timerEvent.delay
    this.timerEvent.delay = this.obstacleDelay;

  }

  tryShootBullet() {
    const currentTime = this.time.now;

    // Check if enough time has passed since the last shot
    if (currentTime - this.lastFiredTime > this.fireDelay) {
      this.shootBullet();
      this.lastFiredTime = currentTime;
    }
  }

  shootBullet() {
    const bullet = this.bullets.get(this.player.x + 50, this.player.y);
  
    if (bullet) {
      // Reset bullet properties
      bullet.setActive(true).setVisible(true).setVelocityX(500).setPosition(this.player.x + 50, this.player.y);
  
      // Handle bullet count
      this.checkBulletCount();
    }
  }

  checkBulletCount() {
    // Get the number of active bullets
    const activeBullets = this.bullets.countActive(true);

    // If the limit is reached, disable shooting
    if (activeBullets >= 10) {
      this.cursors.space.reset();
    }
  }

  bulletObstacleCollision(bullet, obstacle) {
    bullet.setActive(false).setVisible(false);
    obstacle.destroy();
  
    this.scoreLabel.add(10);
  }

  createScoreLabel(x, y, score) {
    const style = { fontSize: '32px', fill: '#FFF' };
    const label = new ScoreLabel(this, x, y, score, style);
    this.add.existing(label);

    return label;
  }

}

export default GameScene;
