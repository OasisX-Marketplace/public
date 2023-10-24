const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require("fs");

const infuraKey = "6bbda6b0d47f472ba14164bf68c202db";
const vigilKey = "2d29baf28ad2f2d7c50b79ab7ffc83a86bf5835b";

const key_TESTNET = fs.readFileSync(".test.secret").toString().trim();
const key_MAINNET = fs.readFileSync(".main.secret").toString().trim();
const key_MUMBAI = fs.readFileSync(".mumbai.secret").toString().trim();
const key_AVAXFUJI = fs.readFileSync(".avaxfuji.secret").toString().trim();
const key_BSCTESTNET = fs.readFileSync(".bsctest.secret").toString().trim();
const key_BSC = fs.readFileSync(".bsc.secret").toString().trim();

module.exports = {
  contracts_build_directory: "../oasisx-frontend/abis",
  contracts_build_directory: "./abis",
  networks: {
    etherscan: {
      customChains: [
        {
          network: 'base-goerli',
          chainId: 84531,
          urls: {
            // Basescan by Etherscan
            apiURL: "https://api-goerli.basescan.org/api",
            browserURL: "https://goerli.basescan.org"
          }
        },
      ],
    },
    development: {
      host: "127.0.0.1",
      port: 8545,
      gas: 6700000,
      gasPrice: 80000000000, // 80
      network_id: "*",
    },
    rinkeby: {
      provider: () =>
        new HDWalletProvider({
          privateKeys: [key_TESTNET],
          providerOrUrl: `wss://rinkeby.infura.io/ws/v3/${infuraKey}`,
        }),
      network_id: 4,
      gas: 7500000,
      confirmations: 1,
      gasPrice: 50000000000, // 100
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    goerli: {
      provider: () =>
        new HDWalletProvider({
          privateKeys: [key_TESTNET],
          providerOrUrl: `wss://goerli.infura.io/ws/v3/${infuraKey}`,
        }),
      network_id: 5,
      gas: 7500000,
      gasPrice: 10000000000,
      timeoutBlocks: 200,
      confirmations: 1,
      skipDryRun: true,
    },
    sepolia: {
      provider: () =>
        new HDWalletProvider({
          privateKeys: [key_TESTNET],
          providerOrUrl: `https://sepolia.infura.io/v3/${infuraKey}`,
        }),
      network_id: 11155111,
      gas: 7200000,
      gasPrice: 10000000000,
      timeoutBlocks: 200,
      confirmations: 1,
      skipDryRun: true,
    },
    'base-goerli': {
      provider: () =>
        new HDWalletProvider({
          privateKeys: [key_TESTNET],
          providerOrUrl: 'https://goerli.base.org',
        }),
      network_id: 84531,
      gas: 7500000,
      gasPrice: 10000000000,
      timeoutBlocks: 200,
      confirmations: 1,
      skipDryRun: true,
    },
    mainnet: {
      provider: () =>
        new HDWalletProvider({
          privateKeys: [key_MAINNET],
          providerOrUrl: `wss://mainnet.infura.io/ws/v3/${infuraKey}`,
        }),
      network_id: 1,
      gas: 5500000,
      gasPrice: 75000000000, // 75
      confirmations: 1,
      timeoutBlocks: 400,
      skipDryRun: true,
    },
    mumbai: {
      provider: () =>
        new HDWalletProvider({
          privateKeys: [key_MUMBAI],
          providerOrUrl: `https://rpc-mumbai.maticvigil.com/v1/${vigilKey}`,
        }),
      network_id: 80001,
      gas: 6000000,
      gasPrice: 10000000000,
      confirmations: 1,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    polygon: {
      provider: () =>
        new HDWalletProvider({
          privateKeys: [key_MUMBAI],
          providerOrUrl: `https://rpc-mainnet.maticvigil.com/v1/${vigilKey}`,
        }),
      network_id: 137,
      gas: 6000000,
      gasPrice: 35000000000,
      confirmations: 1,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    bsctestnet: {
      provider: () =>
        new HDWalletProvider(
          key_BSCTESTNET,
          `https://data-seed-prebsc-1-s1.binance.org:8545`
        ),
      network_id: 97,
      gas: 6000000,
      gasPrice: 10000000000,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    bsc: {
      provider: () =>
        new HDWalletProvider(key_BSC, `https://bsc-dataseed1.binance.org`),
      network_id: 56,
      gas: 6000000, // to be modified
      gasPrice: 10000000000, // to be modified
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },
  mocha: {},
  plugins: ["truffle-plugin-verify"],
  api_keys: {
    etherscan: "DE3V68DDU5KKG9VGM65BNECUPKEH7Q6A6G",
    polygonscan: "KQM76VWDI1A7E97S8WJWDDDXSTUMRSQ5TP",
    bscscan: "S2R2BKI6PNZ52JCM42B2NZ9CIUYN8A49SV",
  },
  compilers: {
    solc: {
      version: "0.8",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
  db: {
    enabled: false,
  },
};
