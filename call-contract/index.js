const Web3 = require("web3");
const {
  PolyjuiceHttpProvider,
  PolyjuiceAccounts,
} = require("@polyjuice-provider/web3");

const ACCOUNT_PRIVATE_KEY = process.env["PRIVATE_KEY"];
const {
  stdReferenceProxyABI,
  stdReferenceBasicABI,
} = require("../contracts/abi");

// const CONTRACT_ADDRESS = "0x603740f09713A624a1A4BBC4bC288137B07ce53B";
const CONTRACT_ADDRESS = "0x633B14f58A1343Aeb43e9C68c8aFB4c866eBb649";
// const CONTRACT_ADDRESS = "0xb6338D286b69615AC0bAb80D7F85187b02908b82";

xABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "sender",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const polyjuiceConfig = {
  web3Url: "https://godwoken-testnet-web3-rpc.ckbapp.dev",
};

const provider = new PolyjuiceHttpProvider(
  polyjuiceConfig.web3Url,
  polyjuiceConfig
);

const web3 = new Web3(provider);

web3.eth.accounts = new PolyjuiceAccounts(polyjuiceConfig);
const account = web3.eth.accounts.wallet.add(ACCOUNT_PRIVATE_KEY);
console.log("account: ", account);
web3.eth.Contract.setProvider(provider, web3.eth.accounts);

async function readCall() {
  const contract = new web3.eth.Contract(
    stdReferenceBasicABI,
    CONTRACT_ADDRESS
  );

  const callResult = await contract.methods
    // .getReferenceData("BTC", "ETH")
    // .ref()
    .hasRole(
      "0xe2b7fb3b832174769106daebcfd6d1970523240dda11281102db9363b83b0dc4",
      "0xa72479a3f85f1f3dba815444039d390693c1271b"
    )
    // .RELAYER_ROLE()
    .call({
      from: account.address,
    });

  console.log(`Read call result: ${JSON.stringify(callResult)}`);
}

async function writeCall() {
  const contract = new web3.eth.Contract(
    stdReferenceBasicABI,
    CONTRACT_ADDRESS
  );

  // .relay(["ETH"], ["3345475000000"], ["1631627878"], ["4575621"])
  const tx = contract.methods
    .relay(["ETH"], ["3345475000000"], ["1631627878"], ["4575621"])
    // .revokeRole(
    //   "0xe2b7fb3b832174769106daebcfd6d1970523240dda11281102db9363b83b0dc4",
    //   "0xa72479a3f85f1f3dba815444039d390693c1271b"
    // )
    .send({
      from: account.address,
      gas: 6000000,
    });

  tx.on("transactionHash", (hash) =>
    console.log(`Write call transaction hash: ${hash}`)
  );

  const receipt = await tx;

  console.log("Write call transaction receipt: ", receipt);
}

(async () => {
  const balance = BigInt(await web3.eth.getBalance(account.address));

  if (balance === 0n) {
    console.log(
      `Insufficient balance. Can't issue a smart contract call. Please deposit funds to your Ethereum address: ${account.address}`
    );
    return;
  }

  console.log("Calling contract...");

  // Check smart contract state before state change.
  await readCall();

  // Change smart contract state.
  await writeCall();

  // // Check smart contract state after state change.
  // await readCall();
})();
