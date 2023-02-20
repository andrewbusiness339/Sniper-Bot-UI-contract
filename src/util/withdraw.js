import { address, privateKey, RPC_URL } from './Env'
const Web3 = require('web3')
require('dotenv').config()
const BN = require("bn.js")

const HDWalletProvider = require('@truffle/hdwallet-provider')
const deployed_Contract = require('../build/contracts/Logic.json');
const l_address = deployed_Contract.networks[25].address

const web3 = new Web3(new HDWalletProvider(privateKey, RPC_URL))
const { PCABI, ERCABI, PCaddress } = require('./abi')

async function withdraw() {
    const networkId = await web3.eth.net.getId();
    console.log('withdraw started')
    try {
        const myContract = await new web3.eth.Contract(deployed_Contract.abi, l_address)
        await myContract.methods.withdraw().send({ from: address }, (err, res) => {
            !err ? console.log("res : ", res) : console.log(err, "Failed")
        })
    } catch (err) {
        console.log(err)
        console.log("Withdraw Failed");
    }
}

export default withdraw