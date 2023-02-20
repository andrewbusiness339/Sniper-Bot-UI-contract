import {pair_token, wbnb, address, privateKey, RPC_URL} from './Env'

const Web3 = require('web3')
require('dotenv').config()
const BN = require("bn.js")

// const { pair_token, wbnb, address, customslippage, factor, privateKey,
// RPC_URL, Treshold } = process.env
const HDWalletProvider = require('@truffle/hdwallet-provider')
const deployed_Contract = require('../build/contracts/Logic.json');
const l_address = deployed_Contract
    .networks[25]
    .address

const web3 = new Web3(new HDWalletProvider(privateKey, RPC_URL))
const {PCABI, ERCABI, PCaddress} = require('./abi')
const {unsafeTransfer} = require('./transferToOwner')

/* * you should avoid using this function
* it is old and I did not put a lot of
 * effort into restructuring it
* also a very dangerous attribute is that this
 * function sets slippage to zero
* meaning front runners can steal your money
*
 * you should sell over sell fractions or sell if it does not work increase the
 * slippage
* use this as the last option
 */

let Slippage = [
    0.95,
    0.90,
    0.85,
    0.80,
    0.75,
    0.70,
    0.65,
    0.60,
    0.55,
    0.50,
    0.45
]

let TRY = 0
let token_balance
let sellPath = [pair_token, wbnb]
let ratio
let approved = false

const autosell = async () => { //approve
    try {

        const Router = await new web3
            .eth
            .Contract(PCABI, PCaddress);
        const ERC20 = await new web3
            .eth
            .Contract(ERCABI, pair_token);
        token_balance = await ERC20
            .methods
            .balanceOf(address)
            .call()
        console.log(token_balance)
        approved == false
            ? await ERC20
                .methods
                .approve(PCaddress, token_balance)
                .send({
                    from: address
                }, (r, s) => {
                    s != undefined
                        ? approved = true
                        : console.log("approved")
                })
            : console.log("already approved")
        const myContract = await new web3
            .eth
            .Contract(deployed_Contract.abi, l_address)
        ratio = await myContract
            .methods
            .getAmountOutMin(wbnb, pair_token, token_balance)
            .call()
        await Router
            .methods
            .swapExactTokensForETHSupportingFeeOnTransferTokens(
                new BN(token_balance),
                0,
                sellPath,
                address,
                Date.now() + 60
            )
            .send({
                from: address,
                gasPrice: web3
                    .utils
                    .toWei("7", "Gwei"),
                gas: "800000"
            }, async (r, s) => {
                !s
                    ? console.log(r)
                    : console.log(s)
                if (s) {
                    console.log(
                        "\x1b[32m%s\x1b[0m",
                        `==========================================================================================================================\nSuccessfully sold ${token_balance} amounts of tokens \nRemaining tokens in the contract: ${await ERC20.methods.balanceOf(l_address).call()}`
                    )
                    web3
                        .eth
                        .getBalance(address)
                        .then((value) => console.log(
                            "\x1b[32m%s\x1b[0m",
                            `\nYour new Eth balance: ${web3.utils.fromWei(value)}\n==========================================================================================================================\n`
                        ))
                    console.log('Cashout Success!')
                } else if (r) {
                    console.log(
                        `Selling failed with slippage ${ (1 - Slippage[TRY]) * 100}% , increasing slippage`
                    )
                    TRY++
                    console.log(Slippage[TRY])
                    autosell()
                }
            })
    } catch (err) {
        console.log(err)
        console.log('Cashout Failed!')
    }
}
const cashout = () => {
    unsafeTransfer().then(() => {
        autosell()
    })
}

export default cashout