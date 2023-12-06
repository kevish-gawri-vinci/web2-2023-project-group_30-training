

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
            <p>
                Follow these rules to progress through the game and achieve victory!
            </p>
        </div>
    <div>`
  };

  export default CommandsPage;