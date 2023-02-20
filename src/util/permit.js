import { address, privateKey, RPC_URL } from './Env'

const Web3 = require('web3')
require('dotenv').config()
const BN = require("bn.js")
const accounts = require('./accounts.json')

// const { pair_token, wbnb, address, customslippage, factor, privateKey, RPC_URL } = process.env
const HDWalletProvider = require('@truffle/hdwallet-provider')
const deployed_Contract = require('../build/contracts/Logic.json');
const l_address = deployed_Contract.networks[25].address
const web3 = new Web3(new HDWalletProvider(privateKey, RPC_URL))


async function permit() {
    console.log("Permit Started");
    try {
        let allowedAccounts = []
        for (const addr of accounts) {
            allowedAccounts.push(addr.address)

        }
        const myContract = await new web3.eth.Contract(deployed_Contract.abi, l_address)

        await myContract.methods.setPermission(allowedAccounts).send({ from: address }, async (err, res) => {
            !err ? console.log(`successfully configured: <<< ${l_address} >>>\n==========================================================================================================================`) : console.log(err)
        })

        for (const a of accounts) {
            console.log(`successfully granted ${a.address} permission`)
        }
        console.log(`==========================================================================================================================`)
        console.log('Permit Success!')
    } catch (err) {
        console.log(err)
        console.log('Permit Failed!')
    }
    // process.exit(0)
}

export default permit

