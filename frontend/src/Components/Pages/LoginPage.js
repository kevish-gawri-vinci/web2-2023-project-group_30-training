import { setUserSessionData } from "../../utils/auth";
import Navigate from "../Router/Navigate";



const LoginPage = () => {
  const main = document.querySelector('main');
  main.innerHTML = `
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <h1 class="text-center">Se connecter</h1>
                    <form id="loginForm" class="needs-validation">
                        <div class="mb-3">
                            <label for="username" class="form-label">Nom d'utilisateur:</label>
                            <input type="text" class="form-control" id="username" name="username" required>
                            <div class="invalid-feedback">Ce champ est requis.</div>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Mot de passe:</label>
                            <input type="password" class="form-control" id="password" name="password" required>
                            <div class="invalid-feedback">Ce champ est requis.</div>
                        </div>
                        <button type="submit" class="btn btn-success">Se connecter</button>
                    </form>
                </div>
            </div>
        </div>
    `;

  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
      const response = await fetch('/api/auths/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        
        setUserSessionData({username})
        await Navigate('/')
    } else {
        alert("Nom d'utilisateur ou mot de passe incorrect");
      }
    } catch (error) {
      console.error('Erreur:', error);
    }
  });
};
export default LoginPage;
