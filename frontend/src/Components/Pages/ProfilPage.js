import { getUserSessionData } from '../../utils/auth';

const { username, email, birthdate } = getUserSessionData();

const ProfilePage = () => {
  const main = document.querySelector('main');

  const age = calculateAge(birthdate);

  // Creating HTML structure for the profile
  const profileHTML = `
    <div class="container">
     <div class="row justify-content-center">
         <div class="profile">
             <h1 class=text-center>Profile</h1>
             <h2 class=text-center>${username}</h2>
             <h3 class=text-center>Age: ${age}</h3>
             <h3 class=text-center>Email: ${email}</h3>
             <h3 class="text-center">date de naissance: ${birthdate}</3>
         </div>
     </div>
    </div>
    `;

  // Setting the HTML content to the main element
  main.innerHTML = profileHTML;
};
function calculateAge(birthday) {
  const birthDate = new Date(birthday);
  const currentDate = new Date();

  let age = currentDate.getFullYear() - birthDate.getFullYear();
  const monthDiff = currentDate.getMonth() - birthDate.getMonth();

  // If the current month is before the birth month or
  // if the current month is the same as the birth month but the current day is before the birth day
  if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
    // eslint-disable-next-line no-plusplus
    age--;
  }

  return age;
}

export default ProfilePage;
