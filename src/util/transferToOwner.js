const Web3 = require('web3')
require('dotenv').config()
const BN = require("bn.js")

const { pair_token, wbnb, address, customslippage, factor, privateKey, RPC_URL } = process.env
const HDWalletProvider = require('@truffle/hdwallet-provider')
const deployed_Contract = require('../build/contracts/Logic.json');
const l_address = deployed_Contract.networks[25].address
const web3 = new Web3(new HDWalletProvider(privateKey, RPC_URL))


async function SafetransferToOWner() {
    try {
        const myContract = await new web3.eth.Contract(deployed_Contract.abi, l_address)
        let result = []
        result = await myContract.methods.safetransferToOWner(pair_token).send({ from: address, gas: "1300000" }, async (r, s) => {
            if (r) {
                console.log(r)
            }
            else {
                console.log(s)
            }
            console.log("Result : ", result)

        })
    } catch (err) {
        console.log(err)
        console.log("Failed");
    }
}
// SafetransferToOWner()



async function unsafeTransfer() {
    try {
        const myContract = await new web3.eth.Contract(deployed_Contract.abi, l_address)
        let result = []
        result = await myContract.methods.transferToOWner(pair_token).send({ from: address, gas: "1300000" }, async (r, s) => {
            if (r) {
                console.log(r)

            }
            else {
                console.log(s)
            }
            console.log("Result: ", result)
        })
    } catch (err) {
        console.log(err)
        console.log("Failed")
    }
}
//unsafeTransfer()

export {
    safetransferToOWner, 
    unsafeTransfer
}