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
        
        ${logButton()}
      </ul>
        </div>
      </div>
    </nav>
  `;

  navbarWrapper.innerHTML = navbar;

  // Ajouter des gestionnaires d'événements pour rediriger l'utilisateur
  const registerLink = document.querySelector('[data-uri="/register"]');
  if (registerLink) {
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

  const navbarBrand = document.querySelector('.navbar-brand');
  navbarBrand.addEventListener('click', () => {
    Navigate('/');
  });

  // Ajouter le gestionnaire d'événements au niveau du document pour le bouton "Se déconnecter"
  document.addEventListener('click', (event) => {
    const logoutButton = event.target.closest('[data-uri="/"]');
    if (logoutButton) {
      logout();
    }
  });

  function logButton() {
    let logoption = '';
    if (isLoggedIn()) {
      logoption = `<a class="nav-link text-white fs-4" href="#" data-uri="/">Se déconnecter</a>`;
      console.log(isLoggedIn());
    } else {
      logoption = `
        <a class="nav-link text-white fs-4" href="#" data-uri="/login">Se connecter</a>
        ${register()}
      `;
    }

    return logoption;
  }

  function register() {
    let registeroption = '';
    if (!isLoggedIn()) {
      registeroption = `<a class="nav-link text-white fs-4" href="#" data-uri="/register">S'inscrire</a>`;
    }

    return registeroption;
  }

  function logout() {
    setUserSessionData(null);
    logoutuser();
    reloadNavbar();  // Appel à la fonction pour recharger dynamiquement la barre de navigation
    Navigate('/');
  }
  
  // Ajoutez cette fonction pour recharger dynamiquement la barre de navigation
  function reloadNavbar() {
    const navbarWrapperr = document.querySelector('#navbarWrapper');
    navbarWrapperr.innerHTML = '';
    Navbar();  // Appel à la fonction Navbar pour regénérer la barre de navigation mise à jour
  }
};

export default Navbar;
