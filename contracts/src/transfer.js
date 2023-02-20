const Web3 = require('web3')
require('dotenv').config()
const BN = require("bn.js")

const { pair_token, wbnb, address, customslippage, factor, privateKey, RPC_URL, ETH_AMOUNT } = process.env
const HDWalletProvider = require('@truffle/hdwallet-provider')
const deployed_Contract = require('./../build/contracts/Logic.json');
const l_address = deployed_Contract.networks[25].address
const web3 = new Web3(new HDWalletProvider(privateKey, RPC_URL))


const Transfer = async () => {
    try {
        web3.eth.sendTransaction({
            from: address,
            to: l_address,
            value: web3.utils.toWei(ETH_AMOUNT, "ether")
        })
            .then(function (receipt) {
                console.log("\x1b[32m%s\x1b[0m", `==========================================================================================================================\nSuccessfully transfered ${ETH_AMOUNT} Eth \nfrom: ${address} \nto: ${l_address}\n==========================================================================================================================\n`)
            });
    } catch (err) {
        console.log(err)
    }

}
Transfer().then()