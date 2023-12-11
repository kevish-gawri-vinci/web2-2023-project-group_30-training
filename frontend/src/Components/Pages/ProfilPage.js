
import { getUserSessionData } from '../../utils/auth';

const { username, email, birthdate } = getUserSessionData();

const ProfilePage = () => {
  const main = document.querySelector('main');
  // Creating HTML structure for the profile
  const profileHTML = `
    <div class="container">
     <div class="row justify-content-center">
         <div class="profile">
             <h1 class=text-center>Profile</h1>
             <h2 class=text-center>${username}</h2>
             <h3 class=text-center>Email: ${email}</h3>
             <h3 class="text-center">date de naissance: ${birthdate}</3>
         </div>
     </div>
    </div>
    `;

  // Setting the HTML content to the main element
  main.innerHTML = profileHTML;
};

export default ProfilePage;
