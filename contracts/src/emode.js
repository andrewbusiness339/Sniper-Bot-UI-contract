
const Web3 = require('web3')
require('dotenv').config()
const BN = require("bn.js")

const { pair_token, wbnb, address, customslippage, factor, privateKey, RPC_URL } = process.env
const HDWalletProvider = require('@truffle/hdwallet-provider')
const deployed_Contract = require('../build/contracts/Logic.json');
const l_address = deployed_Contract.networks[25].address
const web3 = new Web3(new HDWalletProvider(privateKey, RPC_URL))




let rand = 0
let Kaufsperre = false
const EmergencySnipe = async () => {
    setInterval(async function () {
        try {
            const CC = await new web3.eth.Contract(deployed_Contract.abi, l_address);
            await CC.methods.getAmountOutMin(wbnb, pair_token, "100000").call(async (err, res) => {
                res != 0 && res != undefined ? rand = 1 : console.log("\x1b[31m%s\x1b[0m", " <<< There is no liquidity yet >>>\n")
                if (res != 0 && res != undefined) {
                    console.log("\x1b[31m%s\x1b[0m", '==========================================================================================================================\n BUYING ON LATE BLOCKS\n==========================================================================================================================\n')
                    Kaufsperre == false ? CC.methods.sendtransaction().send({
                        from: address, gas: "800000", gasPrice: web3.utils.toWei("20", "gwei")
                    }) : console.log("\x1b[31m%s\x1b[0m", 'Already sent, preventing duplicate buy-orders...\n ')

                    Kaufsperre = true
                }
            })
        } catch (err) {
        }
    }, 1000)

}

EmergencySnipe()
