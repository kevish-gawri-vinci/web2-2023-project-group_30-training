// import ClearPage from '../../utils/render'
// Function to fetch player data from the API
import { getUserSessionData } from '../../utils/auth';

const fetchPlayers = async () => {
  const response = await fetch('/api/users/');
  const players = await response.json();
  return players;
};

const LeaderboardPage = async () => {
  try {
    const players = await fetchPlayers();
    const currentUser = getUserSessionData().username;

    players.sort((a, b) => b.score - a.score); // Sort players by points

    const main = document.querySelector('main');
    main.innerHTML = `
      <div class="container">
        <div class="row justify-content-center">
          <div">
            <h1 class="text-center">Classement</h1>
            <table class="table table-hover">
              <thead>
                <tr>
                  <th class="bg-transparent text-white" scope="col" style="font-size:30px">Joueur</th>
                  <th class="bg-transparent text-white" scope="col" style="font-size:30px">Points</th>
                </tr>
              </thead>
              <tbody>
                ${players.slice(0, 10).map((player) => `
                  <tr>
                    <td class="text-white bg-transparent" style="${player.username === currentUser ? 'font-weight: bold;' : ''}">${player.username}</td>
                    <td class="text-white bg-transparent" style="${player.username === currentUser ? 'font-weight: bold;' : ''}">${player.score}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  } catch (error) {
    console.error('Error fetching or rendering leaderboard:', error);
    // Handle the error appropriately (e.g., display a message to the user)
  }
};

export default LeaderboardPage;
