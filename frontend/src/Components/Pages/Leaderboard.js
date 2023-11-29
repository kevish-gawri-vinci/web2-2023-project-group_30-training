document.addEventListener('DOMContentLoaded', () => {
    fetch('/leaderboard')
      .then((response) => response.json())
      .then((data) => {
        const leaderboard = document.getElementById('leaderboard');
        data.forEach((player, index) => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${index + 1}</td>
            <td>${player.username}</td>
            <td>${player.score}</td>
          `;
          leaderboard.appendChild(row);
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });