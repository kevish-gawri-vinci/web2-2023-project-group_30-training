// import ClearPage from '../../utils/render'

  const leaderboardPage = () => {
    // ClearPage.ClearPage();
    const main = document.querySelector('main');

    let leaderboardData = [
        { name: 'Player 1', score: 100 },
        { name: 'Player 2', score: 90 },
        { name: 'Player 3', score: 80 },
        // Add more initial data as needed...
    ];
    const updateLeaderboard = (newPlayer) => {
      leaderboardData.push(newPlayer);
      leaderboardData.sort((a, b) => b.score - a.score); // Sort in descending order
    
      // Keep only the top 10 players
      leaderboardData = leaderboardData.slice(0, 10);
    
      // Update the displayed leaderboard
      // eslint-disable-next-line no-use-before-define
      renderLeaderboard();
    };
    
    const renderLeaderboard = () => {
        // Create a leaderboard structure
        const leaderboardContainer = document.createElement('div');
        leaderboardContainer.classList.add('leaderboard');

        // Create leaderboard content
        const leaderboardTitle = document.createElement('h1');
        leaderboardTitle.textContent = 'Leaderboard';

        // Create a table to display leaderboard data
        const leaderboardTable = document.createElement('table');
        const tableHeader = leaderboardTable.createTHead();
        const headerRow = tableHeader.insertRow();
        const nameHeader = document.createElement('th');
        nameHeader.textContent = 'Player Name';
        const scoreHeader = document.createElement('th');
        scoreHeader.textContent = 'Score';
        headerRow.appendChild(nameHeader);
        headerRow.appendChild(scoreHeader);

        // Populate leaderboard table with data
        const tableBody = leaderboardTable.createTBody();
        leaderboardData.forEach(entry => {
            const row = tableBody.insertRow();
            const nameCell = row.insertCell();
            nameCell.textContent = entry.name;
            const scoreCell = row.insertCell();
            scoreCell.textContent = entry.score;
        });

        // Append elements to the leaderboard container
        leaderboardContainer.appendChild(leaderboardTitle);
        leaderboardContainer.appendChild(leaderboardTable);

        // Clear existing content and append the updated leaderboard to the main element
        main.innerHTML = '';
        main.appendChild(leaderboardContainer);
    };

    // Initial render of the leaderboard
    renderLeaderboard();

    // Simulating a new player with a score
    const newPlayer = { name: 'New Player', score: 95 };
    updateLeaderboard(newPlayer);
};

export default leaderboardPage;

 