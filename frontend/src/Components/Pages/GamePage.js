import Phaser from 'phaser';
// eslint-disable-next-line no-unused-vars
import {Modal} from 'bootstrap'
import GameScene from '../Game/GameScene';

let game;

const GamePage = () => {
  const phaserGame = `
<div id="gamePageDiv">  
  <div id="gameDiv" class="d-flex justify-content-center my-3">
    <button type="button"  id="gamePauseButton" class="" data-bs-toggle="modal" data-bs-target="#pauseModal"> || </button>
    
    <div class="modal fade" id="pauseModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content" id="pauseMenu">
          <div class="modal-header text-center">
            <h2 class="modal-title w-100">Pause</h2>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" data-bs-dismiss="modal" id="pauseMenuCloseButton">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            ...
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
  const main = document.querySelector('main');
  main.innerHTML = phaserGame;

  const mainWidth = window.innerWidth;
  const pauseButton = document.getElementById('gamePauseButton');
  const pauseButtonPosition = ((mainWidth - 800) / 2);
  pauseButton.style.right = `${pauseButtonPosition + 5}px`;


  const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 300 },
        debug: false,
      },
    },
    scene: [GameScene],
    //  parent DOM element into which the canvas created by the renderer will be injected.
    parent: 'gameDiv',
  };

  // there could be issues when a game was quit (events no longer working)
  // therefore destroy any started game prior to recreate it
  if (game) game.destroy(true);
  game = new Phaser.Game(config);
};

export default GamePage;
