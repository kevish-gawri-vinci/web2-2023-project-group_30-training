// import { Navbar as BootstrapNavbar } from 'bootstrap';
import { isLoggedIn, setUserSessionData, logoutuser } from '../../utils/auth';
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
        ${logButton()}
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

  const logoutButton = document.querySelector('#logout')
    logoutButton.addEventListener('click', logout)

    
}

  const loginLink = document.querySelector('[data-uri="/login"]');
if (loginLink) {
  loginLink.addEventListener('click', () => {
    Navigate('/login');
  });
}


  const navbarBrand = document.querySelector('.navbar-brand');
  navbarBrand.addEventListener('click', () => {
    Navigate('/');
  });
};

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

function register() {
  let registeroption = '';
  if (isLoggedIn()) {
    registeroption = ``;
  } else {
    registeroption = `<a class="nav-link text-white fs-4" href="#" data-uri="/register">S'inscrire</a>`;
  }

  return registeroption;
}



function logout(){
  console.log("Utilisateur connecté :", isLoggedIn());
  setUserSessionData(null);
  logoutuser();
  Navigate('/');
}

export default Navbar;