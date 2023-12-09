// import anime from 'animejs/lib/anime.es';
// eslint-disable-next-line import/no-extraneous-dependencies
import anime from 'animejs';
import {clearPage} from '../../utils/render';
import { isLoggedIn } from '../../utils/auth';
import Navigate from '../Router/Navigate';

const HomePage = () => {
  clearPage(true);
  const menu = document.getElementById('menu');
  let html= '';
  html+= `
    <span id="title" class="">Zero-G Odissey</span><br>
    <button class="row menuButtons" id="startGameBtn"><a href="" data-uri="/game" >Lancer le jeu</a></button>
    <button class="row menuButtons" id="leaderboardBtn"><a href="" data-uri="/leaderboard">Classement</a></button>
    ${isLoggedIn() ? '<button class="row menuButtons" id="shopBtn"><a href="#" data-uri="/shop">Boutique</a></button>' : ''}
`
  menu.innerHTML = html;
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

document.getElementById('startGameBtn').addEventListener('click', () => {Navigate('/game')});
document.getElementById('leaderboardBtn').addEventListener('click', () => {Navigate('/leaderboard')});
document.getElementById('shopBtn')?.addEventListener('click', () => {Navigate('/shop')})


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
