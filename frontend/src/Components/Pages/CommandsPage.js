

const CommandsPage = () => {
    const main = document.querySelector('main');
    main.innerHTML = `
    <div div id="menu" class="container mx-auto"">
        <div class="instructions">
            <h1>Game Commands</h1>
            <p>
                In this game, you control your character using the arrow keys.
            </p>
            <p>
                <strong>Move Up:</strong> Press the <span class="key">↑</span> arrow key to move your character upwards.
            </p>
            <p>
                <strong>Move Down:</strong> Press the <span class="key">↓</span> arrow key to move your character downwards.
            </p>
            <p>
                Use these keys to navigate through the game world and accomplish your objectives!
            </p>
            <h2>Rules:</h2>
            <ol>
                <li>Collect items by moving your character towards them.</li>
                <li>Avoid obstacles to maintain your character's health.</li>
                <li>try to go furthest and make your way into the <strong>TOP 10</strong> </li>
            </ol>
            <p>
                Follow these rules to progress through the game and achieve victory!
            </p>
        </div>
    <div>`
  };

  export default CommandsPage;