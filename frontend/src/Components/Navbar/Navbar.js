// import { Navbar as BootstrapNavbar } from 'bootstrap';
import { isLoggedIn} from '../../utils/auth';
import Navigate from '../Router/Navigate';

const Navbar = () => {
  const navbarWrapper = document.querySelector('#navbarWrapper');
  const navbar = `
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#" data-uri="/">Zero-G Odyssey</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
        ${register()}
      </ul>
        </div>
      </div>
    </nav>
  `;

  navbarWrapper.innerHTML = navbar;

  // Ajouter des gestionnaires d'événements pour rediriger l'utilisateur
  const registerLink = document.querySelector('[data-uri="/register"]');
  if(registerLink){
  registerLink.addEventListener('click', () => {
    Navigate('/register');

  });
}

  const loginLink = document.querySelector('[data-uri="/login"]');
if (loginLink) {
  loginLink.addEventListener('click', () => {
    Navigate('/login');
  });
}
function logButton() {
  let logoption = '';
  if (isLoggedIn()) {
    logoption = `<a class="nav-link text-white fs-4" href="#" data-uri="/" id="logout">Se déconnecter</a>`;
    console.log(isLoggedIn());
    
  } else {
    logoption = `<a class="nav-link text-white fs-4" href="#" data-uri="/login">Se connecter</a>`;
  }

  return logoption;
}



  const navbarBrand = document.querySelector('.navbar-brand');
  navbarBrand.addEventListener('click', () => {
    Navigate('/');
  });
};


function register() {
  let registeroption = '';
  if (isLoggedIn()) {
    registeroption = ``;
  } else {
    registeroption = `<a class="nav-link text-white fs-4" href="#" data-uri="/register">S'inscrire</a>`;
  }

  return registeroption;
}

export default Navbar;
