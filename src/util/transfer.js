import {  address, privateKey, RPC_URL, RPC } from './Env'

const Web3 = require('web3')
require('dotenv').config()
const BN = require("bn.js")

// const { pair_token, wbnb, address, customslippage, factor, privateKey, RPC_URL, ETH_AMOUNT } = process.env
const HDWalletProvider = require('@truffle/hdwallet-provider')
const deployed_Contract = require('../build/contracts/Logic.json');
const l_address = deployed_Contract.networks[25].address //contract address
const web3 = new Web3(new HDWalletProvider(privateKey, RPC))


export default async function Transfer(ETH_AMOUNT) {
  let gasPrice;
  console.log("transfer started");
  console.log(web3.utils.toWei(ETH_AMOUNT.toString(), "ether"))
  console.log("transfer 11111111111");

  web3.eth.getGasPrice().then(res => {
    try {
      web3.eth.sendTransaction({
        from: address,
        to: l_address,
        gasLimit: "30000",
        gasPrice: res,
        value: web3.utils.toWei(ETH_AMOUNT.toString(), "ether"),
      })
        .then(function (receipt) {
          console.log("\x1b[32m%s\x1b[0m", `==========================================================================================================================\nSuccessfully transfered ${ETH_AMOUNT} Eth \nfrom: ${address} \nto: ${l_address}\n==========================================================================================================================\n`)
          console.log("Transfer Success!")
        });
    } catch (err) {
      console.log("Transfer Failed!")
      console.log(err)
    }
  });
  
}

// export default function Transfer(ETH_AMOUNT) {
//     Transfer_(ETH_AMOUNT).then()
// }

// export default Transfer

