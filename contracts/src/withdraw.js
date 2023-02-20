const Web3 = require('web3')
require('dotenv').config()
const BN = require("bn.js")

const { pair_token, wbnb, address, customslippage, factor, privateKey, RPC_URL } = process.env
const HDWalletProvider = require('@truffle/hdwallet-provider')
const deployed_Contract = require('./../build/contracts/Logic.json');
const l_address = deployed_Contract.networks[25].address

const web3 = new Web3(new HDWalletProvider(privateKey, RPC_URL))
const { PCABI, ERCABI, PCaddress } = require('./abi')

async function withdraw() {
    const networkId = await web3.eth.net.getId();

    try {
        const myContract = await new web3.eth.Contract(deployed_Contract.abi, l_address)
        await myContract.methods.withdraw().send({ from: address }, (err, res) => {
            !err ? console.log(res) : console.log(err)
        })
    } catch (err) {
        console.log(err)
    }
}
withdraw()