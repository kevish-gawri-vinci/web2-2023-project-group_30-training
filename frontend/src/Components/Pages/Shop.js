import { Carousel } from 'bootstrap';
import anime from 'animejs';
import skin1 from '../../assets/Ship1.png';
import skin2 from '../../assets/Ship2.png';
import skin3 from '../../assets/Ship3.png';
import star from '../../assets/star.png';

const ShopPage = () => {
    const main = document.querySelector('main');
    main.innerHTML = `
      <div class="container d-flex justify-content-center" id="shopPage">

          <div id="carouselShopItems" class="carousel slide">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselShopItems" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselShopItems" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselShopItems" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner h-100">
            <div class="carousel-item active h-100" id="1">
              <div class="h-100 shopItemContainer w-100 justify-content-center">
                  <img src="${skin1}" class="d-block shopItemImg " alt="..." >
                  <div class=" shopItemDesc">
                  <h2 class="shopItemTitle">Prix : 600 <img src="${star}"></h2>
                  </div>
              </div>    
            </div>
            <div class="carousel-item h-100" id="2">
              <div class="h-100 shopItemContainer w-100 justify-content-center">
                  <img src="${skin2}" class="d-block shopItemImg" alt="...">
                  <div class="shopItemDesc">
                  <h2 class="shopItemTitle">Prix : 1100 <img src="${star}"></h2>
                  </div>
              </div>    
            </div>
            <div class="carousel-item h-100" id="3">
              <div class="h-100 shopItemContainer w-100 justify-content-center">
                  <img src="${skin3}" class="d-block shopItemImg" alt="...">
                  <div class="shopItemDesc">
                  <h2 class="shopItemTitle">Prix : 1800 <img src="${star}"></h2>
                  </div>
              </div>    
            </div>
          </div>
          <button class="carousel-control-prev shopInteractionBtn" type="button" data-bs-target="#carouselShopItems" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next shopInteractionBtn" type="button" data-bs-target="#carouselShopItems" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <button id="shopPurchaseBtn">Acheter</button>
      </div>
    `;

    let carouselShopItems = document.getElementById('carouselShopItems');
    const itemImg = document.querySelectorAll('.shopItemImg');
    const animatedImage = anime({
      targets:itemImg,
      loop:true,
      translateY: [
        { value: '-20px', duration: 500, easing: 'easeInOutQuad' },
        { value: '20', duration: 500, easing: 'easeInOutQuad' },
      ],
      direction: 'alternate', 
      delay: 1500
    })

    animatedImage.play();

    // eslint-disable-next-line no-unused-vars
    carouselShopItems = new Carousel(carouselShopItems, {
      keyboard: false
    });

    const button = document.getElementById('shopPurchaseBtn');
    button.addEventListener('click', () => {
      // eslint-disable-next-line no-unused-vars
      const skinID = document.getElementsByClassName('active').item(1).id;
      console.log(skinID)
    });

    const nextPrevious = document.querySelectorAll('.shopInteractionBtn');
    nextPrevious.forEach((btn) => {
      btn.addEventListener('click', () => {
        button.style.opacity = "0.1";
        button.style.cursor = "wait";
        setTimeout(() => {
          button.style.opacity = "1";
          button.style.cursor = "pointer";
        }, 700);
      });
    });
};

  
  export default ShopPage;
  