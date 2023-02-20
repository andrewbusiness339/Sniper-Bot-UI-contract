const Web3 = require('web3')
require('dotenv').config()
const BN = require("bn.js")

/*
*ganache-cli -f "https://evm-cronos.crypto.org" --port 7545 -m horn
*use this command 
*I was lazy here hard coded it to save time this is really only for ganache-cli forking
*/

const { pair_token, wbnb, address, customslippage, factor, privateKey, RPC_URL, ETH_AMOUNT } = process.env
const HDWalletProvider = require('@truffle/hdwallet-provider')
const deployed_Contract = require('./../build/contracts/Logic.json');
const l_address = deployed_Contract.networks[25].address
const web3 = new Web3(new HDWalletProvider("0x6a4bfca465cfd15da40e73f6c6d92c0295d990ebeb30e8bcd8c6ce93d78befd2", RPC_URL))


const Transfer = async () => {
    try {
        web3.eth.sendTransaction({
            from: "0x7eADd4dCF60c1b9D27C414442697db27D11Ded7f",
            to: address,
            value: web3.utils.toWei("99", "ether")
        })
            .then(function (receipt) {
                console.log(receipt)
            });
    } catch (err) {
        console.log(err)
    }
}
Transfer()