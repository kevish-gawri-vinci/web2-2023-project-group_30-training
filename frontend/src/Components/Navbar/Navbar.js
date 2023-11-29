// import { Navbar as BootstrapNavbar } from 'bootstrap';
import Navigate from '../Router/Navigate';

/**
 * Render the Navbar which is styled by using Bootstrap
 * Each item in the Navbar is tightly coupled with the Router configuration :
 * - the URI associated to a page shall be given in the attribute "data-uri" of the Navbar
 * - the router will show the Page associated to this URI when the user click on a nav-link
 */

const Navbar = () => {
  const navbarWrapper = document.querySelector('#navbarWrapper');
  const navbar = `
  <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="#" data-uri="/">Zero-G Odyssey</a>
          <span class="navbar-toggler-icon navbarMenuButton"></span> 
        </div>
      </nav>
  `;
  
  navbarWrapper.innerHTML = navbar;
  const navbarBrand = document.querySelector('.navbar-brand');
  navbarBrand.addEventListener('click', () => {
    Navigate('/');
  })
};

export default Navbar;