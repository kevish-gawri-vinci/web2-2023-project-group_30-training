// import { Navbar as BootstrapNavbar } from 'bootstrap';
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
            <li class="nav-item">
              <a class="nav-link text-white fs-4" href="#" data-uri="/register">S'inscrire</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white fs-4" href="#" data-uri="/login">Se connecter</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;

  navbarWrapper.innerHTML = navbar;

  // Ajouter des gestionnaires d'événements pour rediriger l'utilisateur
  const registerLink = document.querySelector('[data-uri="/register"]');
  registerLink.addEventListener('click', () => {
    Navigate('/register');
  });

  const loginLink = document.querySelector('[data-uri="/login"]');
  loginLink.addEventListener('click', () => {
    Navigate('/login');
  });

  const navbarBrand = document.querySelector('.navbar-brand');
  navbarBrand.addEventListener('click', () => {
    Navigate('/');
  });
};

export default Navbar;
