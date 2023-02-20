const Web3 = require('web3')
require('dotenv').config()
const BN = require("bn.js")
const accounts = require('./accounts.json')


const { address, FUND, privateKey, RPC_URL } = process.env
const HDWalletProvider = require('@truffle/hdwallet-provider')
const deployed_Contract = require('./../build/contracts/Logic.json');
const l_address = deployed_Contract.networks[25].address

const web3 = new Web3(new HDWalletProvider(privateKey, RPC_URL))


async function fund() {
    let arr = accounts
    //console.log(arr)
    for (i = 0; i < arr.length; i++) {
        console.log(`Funding account: ${arr[i].address} with ${web3.utils.fromWei(web3.utils.toWei(FUND, "ether"))} Wei \nProgress: ${i + 1} of ${arr.length}\n`)
        await web3.eth.sendTransaction({ to: arr[i].address, from: address, value: web3.utils.toWei(FUND, "ether") }, (err, res) => {
            if (err) {
                console.log(err)
            }
        })
    }

}
fund()