import { useState, useEffect } from "react";
import { ethers } from "ethers";
import playerContract_abi from "../artifacts/contracts/Assessment.sol/Sports.json";

export default function HomePage() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [playerContract, setPlayerContract] = useState(undefined);

  const [redCards, setRedCards] = useState();
  const [yellowCards, setYellowCards] = useState();
  const [red, setRed] = useState();
  const [yellow, setYellow] = useState();
  const [playerId, setPlayerId] = useState();
  const [playerRed, setPlayerRed] = useState();
  const [playerYellow, setPlayerYellow] = useState();

  const [playerScoreId, setPlayerScoreId] = useState();
  const [playerScore, setPlayerScore] = useState();

  const [playerSID, setPlayerSID] = useState();
  const[playerScores, setPlayerScores] = useState();

  const contractAddress = "0x56138D50c48D23b1779cdaE51AaA9AbA26d4F9ED";
  const playerABI = playerContract_abi.abi;

  const getWallet = async () => {
    if (window.ethereum) {
      setEthWallet(window.ethereum);
    }

    if (ethWallet) {
      const account = await ethWallet.request({ method: "eth_accounts" });
      handleAccount(account);
    }
  };

  const getPlyaerScore = async()=>{
    if(playerContract){
      const pscore = await playerContract.getPlayerInfo(parseInt(playerScoreId));
      setPlayerScore(parseInt(pscore));

    }
   

  }

  const handleAccount = (account) => {
    if (account) {
      console.log("Account connected: ", account);
      setAccount(account);
    } else {
      console.log("No account found");
    }
  };

  const connectAccount = async () => {
    if (!ethWallet) {
      alert("MetaMask wallet is required to connect");
      return;
    }

    const accounts = await ethWallet.request({ method: "eth_requestAccounts" });
    handleAccount(accounts);

    // once wallet is set we can get a reference to our deployed contract
    getPlayerContract();
  };

  const getPlayerContract = () => {
    const provider = new ethers.providers.Web3Provider(ethWallet);
    const signer = provider.getSigner();
    const playerContractContract = new ethers.Contract(
      contractAddress,
      playerABI,
      signer
    );

    setPlayerContract(playerContractContract);
  };

  const playerScoreSet = async()=>{
    if(playerContract){
      await playerContract.scoreGoal(parseInt(playerSID),parseInt(playerScores));
    }
  }

  const registerPlayer = async () => {
    if (playerContract) {
      await playerContract.registerPlayer(parseInt(playerId));
    }
  };

  const getYellowCard = async () => {
    if (playerContract) {
      const yc = await playerContract.gerYellowCards(parseInt(playerYellow));
      setYellowCards(parseInt(yc));
    }
  };

  const getRedCard = async () => {
    if (playerContract) {
      let res = await playerContract.getRedCards(parseInt(playerRed));
      setRedCards(parseInt(res));
    }
  };

  const playerGotRedCard = async () => {
    if (playerContract) {
      let tx = await playerContract.redCards(parseInt(red));
    }
  };
  const playerGotYellowCard = async () => {
    if (playerContract) {
      let tx = await playerContract.yellowCards(parseInt(yellow));
    }
  };

  const initUser = () => {
    // Check to see if user has Metamask
    if (!ethWallet) {
      return (
        <p>Please install Metamask in order to use this playerContract.</p>
      );
    }

    // Check to see if user is connected. If not, connect to their account
    if (!account) {
      return (
        <button onClick={connectAccount}>
          Please connect your Metamask wallet
        </button>
      );
    }
  };

  useEffect(() => {
    getWallet();
  }, []);

  return (
    <main className="container">
      <header>
        <h1>Welcome to the Metacrafters playerContract!</h1>
      </header>
      {initUser()}

      <div>
        <label>Register Player</label>
        <input
          placeholder="Enter Player's ID"
          onChange={(e) => setPlayerId(e.target.value)}
        />
        <button onClick={registerPlayer}>Register Player</button>
      </div>

      <div>
        <label>Enter player ID which got Red Card</label>
        <input onChange={(e) => setRed(e.target.value)} />
        <button onClick={playerGotRedCard}>Got Red Card</button>
      </div>
      <div>
        <label>Enter player ID which got Yellow Card</label>
        <input onChange={(e) => setYellow(e.target.value)} />
        <button onClick={playerGotYellowCard}>Got Yellow Card</button>
      </div>

      <input
        placeholder="Enter Player ID"
        onChange={(e) => setPlayerRed(e.target.value)}
      />

      <button onClick={getRedCard}>Get Player's Total Red Card</button>

      <input
        placeholder="Enter Player ID"
        onChange={(e) => setPlayerYellow(e.target.value)}
      />
      <button onClick={getYellowCard}>Get Player's Total Yellow Card</button>

      {redCards}
      {yellowCards}

    <div>

      <input onChange={(e)=>setPlayerSID(e.target.value)}/>
      <input onChange={(e)=>setPlayerScores(e.target.value)}/>
      <button onClick={playerScoreSet}>Player Scored</button>
      </div>


<div>

      <input onChange={(e)=> setPlayerScoreId(e.target.value)}/>
      <button onClick={getPlyaerScore}>Get Player Score</button>
      The Player Score is : {playerScore}
      </div>
    </main>
  );
}
