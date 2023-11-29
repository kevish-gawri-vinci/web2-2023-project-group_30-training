// import anime from 'animejs/lib/anime.es';
// eslint-disable-next-line import/no-extraneous-dependencies
import anime from 'animejs';
import {clearPage} from '../../utils/render';

const HomePage = () => {
  clearPage();
  const main = document.querySelector('main');
  let html= '';
  html+= `
  <div id="menu" class="container mx-auto">
    <span id="title" class="">Zero-G Odissey</span><br>
    <button class="row menuButtons"><a href="#" data-uri="/game">Lancer le jeu</a></button>
    <button class="row menuButtons"><a href="#" data-uri="/leaderboard">Classement</a></button>
    <button class="row menuButtons"><a href="#" data-uri="/login">Se connecter</a></button>
    <button class="row menuButtons"><a href="#" data-uri="/register">Inscription</a></button>
  </div>`
 
  main.innerHTML = html;
  const title = document.getElementById("title");
  
  const animatedTitle = anime({
    targets:title,
    loop:true,
    translateY: [
      { value: '-20px', duration: 500, easing: 'easeInOutQuad' },
      { value: '0', duration: 500, easing: 'easeInOutQuad' },
    ],
    direction: 'alternate', 
    delay: 1500
  })

  document.querySelectorAll('.menuButtons').forEach( (button) => {
    button.addEventListener('mouseenter', () => {
      anime({
        targets: button,
        scale: 1.05, 
        duration: 300,
        easing: 'easeInOutQuad',
      });
    });

    button.addEventListener('mouseleave', () => {
      anime({
        targets: button,
        scale: 1, 
        duration: 300,
        easing: 'easeInOutQuad',
      });
    });
    })

  animatedTitle.play();
};

export default HomePage;
