import { pair_token, address, privateKey, RPC_URL } from './Env.js'

const Web3 = require('web3')
require('dotenv').config()
const BN = require("bn.js")

// const { pair_token, wbnb, address, customslippage, factor, privateKey, RPC_URL, Treshold, Fraction } = process.env
const HDWalletProvider = require('@truffle/hdwallet-provider')
const deployed_Contract = require('../build/contracts/Logic.json');
const l_address = deployed_Contract.networks[25].address

const web3 = new Web3(new HDWalletProvider(privateKey, RPC_URL))
const { PCABI, ERCABI, PCaddress } = require('./abi')


async function sellFraction(treshold, fractions) {
    console.log("Sell fraction started")
    const ERC20 = await new web3.eth.Contract(ERCABI, pair_token);
    try {
        console.log("fraction 1")
        const token_balance = await ERC20.methods.balanceOf(l_address).call
        // const token_balance = await ERC20.methods.balanceOf(l_address).call()
        console.log("fraction 2", token_balance)
        const myContract = await new web3.eth.Contract(deployed_Contract.abi, l_address)
        console.log("fraction 3")
        let result = []
        result = await myContract.methods.sellFraction(treshold, fractions).send({ from: address, gas: "600000", gasPrice: web3.utils.toWei("7", "gwei") }, async (r, s) => {
            if (!r) {
                console.log("\x1b[32m%s\x1b[0m", `==========================================================================================================================\nSuccessfully sold ${token_balance} amounts of tokens \nRemaining tokens in the contract: ${await ERC20.methods.balanceOf(l_address).call()}`)
                web3.eth.getBalance(address).then((value) => console.log("\x1b[32m%s\x1b[0m", `\nYour new Eth balance: ${web3.utils.fromWei(value)}\n==========================================================================================================================\n`))
                console.log('Sell Fraction Success!')
            }
        })
    } catch (err) {
        console.log()
        console.log('Sell Fraction Failed!')
    }
}

export default sellFraction