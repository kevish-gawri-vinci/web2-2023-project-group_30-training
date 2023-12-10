import skin1 from '../../assets/Ship1.png';

const ShopPage = () => {
    const main = document.querySelector('main');
    main.innerHTML = `
<div class="container d-flex justify-content-center">

    <div id="carouselShopItems" class="carousel slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselShopItems" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselShopItems" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselShopItems" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner h-100">
      <div class="carousel-item active h-100">
        <div class="h-100 shopItemContainer w-100 justify-content-center">
            <img src="${skin1}" class="d-block shopItemImg " alt="..." >
            <div class=" shopItemDesc">
            <h5 class="shopItemTitle">First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
            </div>
        </div>    
      </div>
      <div class="carousel-item">
        <div class="d-flex">
            <img src="..." class="d-block" alt="...">
            <div class="carousel-caption d-none d-md-block">
            <h5 class="shopItemTitle">Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
            </div>
        </div>    
      </div>
      <div class="carousel-item">
        <div class="d-flex">
            <img src="..." class="d-block" alt="...">
            <div class="carousel-caption d-none d-md-block">
            <h5 class="shopItemTitle">Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
            </div>
        </div>    
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselShopItems" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselShopItems" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</div>
    `;
  };

  export default ShopPage;
  