const Web3 = require('web3')
require('dotenv').config()
const { pair_token, wbnb, address, INSIDER, RPC_URL } = process.env
const web3 = new Web3(RPC_URL)
let accounts = require('./accounts')
//var net = require('net');
//var web3 = new Web3('/home/geth/mainnet/geth.ipc', net);
//const { makehashes } = require('./hash.js')
const deployed_Contract = require('./../build/contracts/Logic.json');
const l_address = deployed_Contract.networks[25].address
const HDWalletProvider = require('@truffle/hdwallet-provider')
//const { EmergencySnipe } = require('./afterblock.js')




//I used this to reduce latency, no need here cronos looks sleepy
/*
let Hashes = []
makehashes().then((hashes) => {
    Hashes = hashes
    console.log(`<<< GENERATED RAW TRANSACTIONS >>>`)
})
*/

let count = 0;
const mempoolsubscription = async () => {
    try {
        await web3.eth.subscribe('pendingTransactions', async function (error, output) {
            let result = await web3.eth.getTransaction(output)

            switch (true) {
                case (result.from.toLowerCase() == (INSIDER).toLowerCase() && result.value == 0):
                    sendTxwithGasPrice(result)
                    //sendTxfast()
                    console.log("Transaction was sent... ")
                    console.log(Date.now())
                    break;

                case (result.input.slice(0, 10) == "0xf305d719"):
                    if (result.input.toUpperCase().includes(pair_token.slice(2, 94).toUpperCase())) {
                        sendTxwithGasPrice(result)
                        console.log("Transaction was sent... ")
                        console.log(Date.now())
                    }
                    break;

                case (result.input.slice(0, 10) == "0xe8e33700"):
                    if (result.input.toUpperCase().includes(pair_token.slice(2, 94).toUpperCase())) {
                        sendTxwithGasPrice(result)
                        console.log("Transaction was sent... ")
                        console.log(Date.now())
                    }
                    break;

                case result.input.slice(0, 10) == "0x4bb278f3":
                    sendTxwithGasPrice(result)
                    console.log("Transaction was sent... ")
                    console.log(Date.now())
                    break;
                default:
                    break;

            }
        })
    }
    catch (err) {

    }
}


//I used this function to send out presigned transaction hashes, to achieve better latency
const sendTxfast = async () => {
    await web3.eth.sendSignedTransaction(Hashes[count])
    count++
    console.log(`Transaction sent`)
}


const sendTxwithGasPrice = async (_result) => {
    try {
        console.log(accounts[count].address, accounts[count].privateKey)
        const web3_backrun = new Web3(new HDWalletProvider(accounts[count].privateKey, RPC_URL))
        const CC = await new web3_backrun.eth.Contract(deployed_Contract.abi, l_address);
        await CC.methods.sendtransaction().send({ from: accounts[count].address, gas: "1300000" }, async (err, res) => {
            if (!err) {
                console.log("\x1b[32m%s\x1b[0m", `Sent transaction on ${_result.hash} detected at ${Date.now()}\n`)
                console.log("Successfully sent transaction")
                count++
            }

        })
    } catch (e) {
        console.log(e)
    }
    count < 4 ? count++ : count = 0



}

mempoolsubscription()


//makehashes() //noch addresse ändern
//array test
//txa("0xcfe28233465e5d9079655cad5f78f61ed7e9d9f28523e273f9718812fdf80c40")

