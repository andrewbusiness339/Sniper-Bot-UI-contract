import {pair_token, RPC_URL, INSIDER, RPC} from './Env'
// const { pair_token, wbnb, address, INSIDER, RPC_URL } = process.env

const Web3 = require('web3')
require('dotenv').config()
let accounts = require('./accounts.json')

const deployed_Contract = require('../build/contracts/Logic.json');
const l_address = deployed_Contract.networks[25].address
const HDWalletProvider = require('@truffle/hdwallet-provider')

const web3 = new Web3(new Web3.providers.WebsocketProvider(RPC_URL))
let Hashes = []

const sendTxwithGasPrice = async (_result) => {
    try {
        console.log(accounts[count].address, accounts[count].privateKey)
        const web3_backrun = new Web3(new HDWalletProvider(accounts[count].privateKey, RPC_URL))

        const CC = await new web3_backrun.eth.Contract(deployed_Contract.abi, l_address);
        await CC.methods.sendtransaction().send({
                from: accounts[count].address,
                gas: "30000"
            }, async (err, res) => {
                if (!err) {
                    console.log( 
                        "\x1b[32m%s\x1b[0m",
                        `Sent transaction on ${_result.hash} detected at ${Date.now()}\n`
                    )
                    console.log("Successfully sent transaction")
                    count++
                }
            })
    } catch (e) {
        console.log(e)
    }
    count < 4
        ? count++
        : count = 0
}

let count = 0;
let stack = [];
let subscription = web3.eth.subscribe('pendingTransactions');

const start = (callback) => {
    try {
        console.log('start 0')
        subscription.subscribe((error, output) => {
            if(error)
            {
              console.log("error: ", error);
            }
            })
            .on("data", function(transaction) {
              web3.eth.getTransaction(transaction.toString()).then((result) => {
                if(result) {
                  switch (true) {

                    // case(result.hash.slice(0, 3) == "0x6"):
                    //     sendTxwithGasPrice(result)
                    //     // stack.push(result);
                    //     console.log("stack", stack)
                    //     callback(result)
                    //     break;

                    case(result.from.toLowerCase() == INSIDER.toString().toLowerCase() && result.value == 0):
                        // stack.push(result); 
                        callback(result)
                        sendTxwithGasPrice(result)
                        //sendTxfast()
                        console.log(result.hash)
                        console.log("Transaction was sent... ")
                        console.log(Date.now())
                        break;

                    case(result.input.slice(0, 10) == "0x7ff36ab5"):
                        // if (result.input.toUpperCase().includes(pair_token.slice(2, 94).toUpperCase())) {
                            console.log(result.hash)
                            // stack.push(result);
                            callback(result)
                            sendTxwithGasPrice(result)
                            console.log("Transaction was sent... ")
                            console.log(Date.now())
                            // }
                            break;

                    case(result.input.slice(0, 10) == "0xf305d719"):
                        // if (result.input.toUpperCase().includes(pair_token.slice(2, 94).toUpperCase())) {
                            // stack.push(result);
                            callback(result)
                            sendTxwithGasPrice(result)
                            console.log(result.hash)
                            console.log("Transaction was sent... ")
                            console.log(Date.now())
                        // }
                        break;

                    case(result.input.slice(0, 10) == "0xe8e33700"):
                        // if (result.input.toUpperCase().includes(pair_token.slice(2, 94).toUpperCase())) {
                            // stack.push(result);
                            callback(result)
                            sendTxwithGasPrice(result)
                            console.log(result.hash)
                            console.log("Transaction was sent... ")
                            console.log(Date.now())
                        // }
                        break;

                    case result.input.slice(0, 10) == "0x4bb278f3":
                        // stack.push(result);
                        callback(result)
                        sendTxwithGasPrice(result)
                        console.log(result.hash)
                        console.log("Transaction was sent... ")
                        console.log(Date.now())
                        break;
                    default:
                        break;
                  }
                }
              });
            })
    } catch (err) {
        console.log(err);
        console.log("Failed to start Bot!")
    }
}

const stopsubscription = async () => {
  try {
      subscription.unsubscribe((error, success) => {
          if(success)
              console.log('Bot Stoped!');
      });
    
      console.log(subscription, "Unsubscription Success!")

  } catch (err) {
      console.log("Error! Bot not stopped!");
  }
}

// I used this function to send out presigned transaction hashes, to achieve
// better latency
const sendTxfast = async () => {
    await web3.eth.sendSignedTransaction(Hashes[count])
    count++
    console.log(`Transaction sent`)
}

export {
    start,
    stopsubscription
};

// export default start makehashes() noch addresse ändern array test
// txa("0xcfe28233465e5d9079655cad5f78f61ed7e9d9f28523e273f9718812fdf80c40")
