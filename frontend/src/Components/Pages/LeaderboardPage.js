// import ClearPage from '../../utils/render'
  // Function to fetch player data from the API
/*

const fetchPlayerData = async () => {
    try {
        const response = await fetch('/api/data/user.json'); // Replace with your API endpoint
        const data = await response.json();
        return data.players; // Assuming the API returns an array of players
    } catch (error) {
        console.error("Error fetching player data:", error);
        return []; // Return empty array if there's an error
    }
};

// Function to update the leaderboard with new player data
const leaderboardPage = (players) => {
    players.sort((a, b) => b.points - a.points); // Sort players by points

    const main = document.querySelector('main');
    main.innerHTML = `
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <h1 class="text-center">Classement</h1>
                    <table class="table">
                        <thead>
                            <tr>
                                <th class="bg-success text-white" scope="col">Pseudo</th>
                                <th class="bg-success text-white" scope="col">Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${players.slice(0, 10).map((player) => `
                                <tr>
                                    <td class="text-white bg-success">${player.name}</td>
                                    <td class="text-white bg-success">${player.points}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;

};

// Function to update the leaderboard from the API
const updateLeaderboardFromAPI = async () => {
    const playersFromAPI = await fetchPlayerData(); // Get player data from the API
    leaderboardPage(playersFromAPI); // Update the leaderboard with the fetched data
};

// Call this function to update the leaderboard from the API
updateLeaderboardFromAPI();

export default leaderboardPage;
*/
 