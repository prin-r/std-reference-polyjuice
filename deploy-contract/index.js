const Web3 = require("web3");
const {
  PolyjuiceHttpProvider,
  PolyjuiceAccounts,
} = require("@polyjuice-provider/web3");
const {
  stdReferenceProxyABI,
  stdReferenceBasicABI,
} = require("../contracts/abi");
const {
  stdReferenceProxy,
  stdReferenceBasic,
} = require("../contracts/bytesCode");

const DEPLOYER_PRIVATE_KEY = process.env["PRIVATE_KEY"];

const polyjuiceConfig = {
  web3Url: "https://godwoken-testnet-web3-rpc.ckbapp.dev",
};

const provider = new PolyjuiceHttpProvider(
  polyjuiceConfig.web3Url,
  polyjuiceConfig
);

const web3 = new Web3(provider);

web3.eth.accounts = new PolyjuiceAccounts(polyjuiceConfig);
const deployerAccount = web3.eth.accounts.wallet.add(DEPLOYER_PRIVATE_KEY);
web3.eth.Contract.setProvider(provider, web3.eth.accounts);

(async () => {
  const balance = BigInt(await web3.eth.getBalance(deployerAccount.address));

  console.log(deployerAccount);

  console.log("balance: ", balance);

  if (balance === 0n) {
    console.log(
      `Insufficient balance. Can't deploy contract. Please deposit funds to your Ethereum address: ${deployerAccount.address}`
    );
    return;
  }

  console.log(`Deploying contract...`);

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

  x =
    "6080604052348015600f57600080fd5b50600080546001600160a01b031916331790556091806100306000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806367e404ce14602d575b600080fd5b600054603f906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f3fea264697066735822122067561db5aa1b94bfa7bb455e0dd00863ab88cc25336bc131ca6a808937d8bbef64736f6c63430008030033";

  return;

  const deployTx = new web3.eth.Contract(xABI)
    .deploy({
      data: x,
      arguments: [], //["0x633B14f58A1343Aeb43e9C68c8aFB4c866eBb649"],
    })
    .send({
      from: deployerAccount.address,
      gas: 6000000,
    });

  deployTx.on("transactionHash", (hash) =>
    console.log(`Transaction hash: ${hash}`)
  );

  const contract = await deployTx;

  console.log(`Deployed contract address: ${contract.options.address}`);
})();
