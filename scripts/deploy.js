const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    
    const gameContract = await gameContractFactory.deploy(                        
        ["Tanjiro", "D.Va", "Korg"], // Names
        [
          "https://i.imgur.com/zK25KWH.jpeg", // Images
          "https://i.imgur.com/EcCNuWG.png",
          "https://i.imgur.com/Ynw0Gae.jpeg",
        ],
        [100, 200, 300], // HP values
        [100, 50, 25], // Attack damage values
        "Elon Musk", // Boss name
        "https://i.imgur.com/AksR0tt.png", // Boss image
        10000, // Boss hp
        50 // Boss attack damage
    );
  
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
  
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();