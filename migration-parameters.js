const Web3 = require("web3");
const provider = new Web3.providers.HttpProvider("http://localhost:8545");
var web3 = new Web3(provider);

const { toTokens } = require("./utils/test-utils")(web3);

module.exports = {
  mainnet: {
    storefront: {
      name: "OasisX Storefront",
      symbol: "OasisXStorefront",
      registry: "",
      templateURI: "https://website-assests-oasisx.s3.amazonaws.com/",
      migrationAddress: "",
    },
    oasis721: {
      token1: {
        name: "OasisX721Implementation",
        symbol: "OasisXI",
      },
    },
    oasis1155: {
      token1: {
        name: "OasisX1155Implementation",
        symbol: "OasisXI",
        uri: "ipfs://revealedArtUri/",
      },
    },
    launchpad: {
      protocolFee: ,
    },
    protocolFees: {
      minFee: ,
      maxFee: ,
      maxRange: ,
      minRange: ,
    },
    oasisnft: {
      name: "OasisX NFT collection",
      symbol: "OasisXNFT",
      uri: "ipfs://replaceUriHere/",
      tokenIds: [],
      mintCostPerTokenId: [],
      mbenefeciary: "",
    },
    protocolFees: {
      minFee: ,
      maxFee: ,
      maxRange: ,
      minRange: ,
    },
  },
};
