# Sports Contract

## Smart Contract Integrated Front-End

### Key Features
1. Player Registration: Register new players with unique IDs.
2. Score Tracking: Update player scores and retrieve their current score.
3. Card Statistics: Track red and yellow cards for each player, with the ability to increment their count.
4. MetaMask Integration: Interact with the contract using your MetaMask wallet.
5. Decentralized: Built on the Ethereum blockchain, ensuring transparency and security.

### Description
This is a decentralized application (dApp) built on the Ethereum blockchain, utilizing the Sports contract to manage player information, scores, and card statistics. The application allows users to interact with the contract using their MetaMask wallet, enabling them to register players, update scores, and track red and yellow cards.


### Smart Contract Functions
The Sports contract provides the following functions:

1. registerPlayer(uint256 playerId): Registers a new player with the given ID.
2. scoreGoal(uint256 playerId, uint256 score): Updates a player's score.
3. getRedCards(uint256 playerId): Retrieves the total number of red cards for a player.
4. getYellowCards(uint256 playerId): Retrieves the total number of yellow cards for a player.
5. redCards(uint256 playerId): Increments a player's red card count.
6. yellowCards(uint256 playerId): Increments a player's yellow card count.
7. getPlayerInfo(uint256 playerId): Retrieves a player's information, including their score


### Installing

To run this program, you'll need:
- *EVM-Compatible Environment*: Remix IDE for Solidity contracts.
- *Development Environment*: Visual Studio Code for front-end development (HTML, JavaScript, and CSS).
- *Running the Program*: Ensure all files are saved and properly linked. Use Metamask to bridge the contract, and place the contract address and ABI in the JavaScript file. Run the program in Visual Studio Code.


### Common Issues

1. MetaMask not installed: Ensure that MetaMask is installed and configured correctly in your browser.
2. Contract not deployed: Verify that the Sports contract has been deployed to the Ethereum network and that the correct contract address is being used.
3. Wallet not connected: Ensure that your MetaMask wallet is connected and that you have selected the correct account.
  

### Interacting with the Smart Contract

1. Install MetaMask and create an account.
2. Deploy the Sports contract to the Ethereum network.
3. Update the contractAddress variable in the code with the deployed contract address.
4. Run the application and connect your MetaMask wallet.
5. Register a player by entering their ID and clicking the "Register Player" button.
6. Update a player's score by entering their ID, score, and clicking the "Player Scored" button.
7. Retrieve a player's red or yellow card count by entering their ID and clicking the corresponding button.
8. Increment a player's red or yellow card count by entering their ID and clicking the corresponding button

### Starter Next/Hardhat Project

After cloning the github, you will want to do the following to get the code running on your computer.

1. Inside the project directory, in the terminal type: npm i
2. Open two additional terminals in your VS code
3. In the second terminal type: npx hardhat node
4. In the third terminal, type: npx hardhat run --network localhost scripts/deploy.js
5. Back in the first terminal, type npm run dev to launch the front-end.
6. After this, the project will be running on your localhost. Typically at http://localhost:3000/

## Authors

Contributors' names and contact info:
- Shiwani Agarwal
- shivuagaewal23@gmail.com

## License

This project is licensed under the Shiwani Agarwal. See the LICENSE.md file for details.

---
