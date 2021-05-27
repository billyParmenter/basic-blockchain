const { Blockchain, Transaction } = require("./blockchain");
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const myKey = ec.keyFromPrivate("a7c6c686aec79080695883bc5a7ad98913e0f6446bb99ce57206e936ec7027f8")
const myWalletAddress = myKey.getPublic('hex');


let bilboCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, "public key goes here", 10);
tx1.signTransaction(myKey);
bilboCoin.addTransaction(tx1);

console.log("\nStarting the miner...");
bilboCoin.minePendingTransavtions(myWalletAddress);

console.log("\nBalance of bilbo is ", bilboCoin.getBalanceOfAddress(myWalletAddress))

bilboCoin.chain[1].transactions[0].amount = 1;

console.log("Is chain valid? ", bilboCoin.isChainValid());