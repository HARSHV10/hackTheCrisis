require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
const fs = require('fs');
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    // polygon: {
    //   url: "https://polygon-mumbai.g.alchemy.com/v2/your-alchemy-api-key",
    //   accounts: [`0x${process.env.PRIVATE_KEY}`]
    // },

    sepolia: {
      chainId: 11155111,
      url: "https://eth-sepolia.g.alchemy.com/v2/ljTVfG8K7M8Tr8PkuW8wtDRrZc_EFYYY",
      accounts: ["e832253bf9feb33112f459bc568ca3b5afe467725ff036ebeb55c51b5150ece4"],
    },
    // mumbai: {
    //   url: `https://polygon-mumbai.g.alchemy.com/v2/ejJyT6lsRgXGqaagqRW-zq0S3RHtImP7`,
    //   //accounts: [process.env.privateKey]
    // },
    // matic: {
    //   url: "https://polygon-mainnet.g.alchemy.com/v2/nAhiCHKvZkhkp4A7PkkCIBON0-BXW26d",
    //   //accounts: [process.env.privateKey]
    // },
    // goerli: {
    //   url: process.env.REACT_APP_ALCHEMY_API_URL,
    //   accounts: [ process.env.REACT_APP_PRIVATE_KEY ]
    // }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};