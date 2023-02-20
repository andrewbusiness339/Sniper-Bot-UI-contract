import {pair_token, RPC_URL, INSIDER} from './Env'

const Web3 = require('web3')
require('dotenv').config()
// const { pair_token, wbnb, address, INSIDER, RPC_URL } = process.env
const web3 = new Web3(new Web3.providers.WebsocketProvider(RPC_URL))
// const web3 = new Web3(RPC_URL)
let accounts = require('./accounts.json')
// var net = require('net'); var web3 = new Web3('/home/geth/mainnet/geth.ipc',
// net); const { makehashes } = require('./hash.js')
const deployed_Contract = require('./../build/contracts/Logic.json');
const l_address = deployed_Contract.networks[25].address
const HDWalletProvider = require('@truffle/hdwallet-provider')
// const { EmergencySnipe } = require('./afterblock.js') I used this to reduce
// latency, no need here cronos looks sleepy
/*
makehashes().then((hashes) => {
    Hashes = hashes
    console.log(`<<< GENERATED RAW TRANSACTIONS >>>`)
})
*/
let Hashes = []

const sendTxwithGasPrice = async (_result) => {
    try {
        console.log(accounts[count].address, accounts[count].privateKey)
        const web3_backrun = new Web3(new HDWalletProvider(accounts[count].privateKey, RPC_URL))

        const CC = await new web3_backrun.eth.Contract(deployed_Contract.abi, l_address);
        await CC.methods.sendtransaction().send({
                from: accounts[count].address,
                gas: "1300000"
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
let subscription = web3.eth.subscribe('pendingTransactions');
let stack = [];

const start = async () => {
    try {
        console.log('start 0')
        // const subscription = web3.eth.subscribe('pendingTransactions');
        subscription.subscribe((error, output) => {
            if(error)
            {
              console.log("error: ", error);
            }
            })
            .on("data", function(transaction) {
              // console.log("Transaction: ", transaction)
              // let result = web3.eth.getTransaction(transaction.toString()).then(console.log);
              web3.eth.getTransaction(transaction.toString()).then((result) => {
                console.log("result: ", result);
                
                stack.push({hash: result.hash, value: result.value});

                switch (true) {

                  // case(result.input.slice(0, 3) == "0x6"):
                  //     if (result.input.toUpperCase().includes(pair_token.slice(2, 94).toUpperCase())) {
                  //         // sendTxwithGasPrice(result)
                  //         console.log("Transaction was sent... ", result.hash);
                  //         console.log(Date.now())
                  //     }
                  //     break;

                  case(result.from.toLowerCase() == INSIDER.toString().toLowerCase() && result.value == 0):
                      sendTxwithGasPrice(result)
                      //sendTxfast()
                      console.log("Transaction was sent... ")
                      console.log(Date.now())
                      break;

                  case(result.input.slice(0, 10) == "0xf305d719"):
                      if (result.input.toUpperCase().includes(pair_token.slice(2, 94).toUpperCase())) {
                          sendTxwithGasPrice(result)
                          console.log("Transaction was sent... ")
                          console.log(Date.now())
                      }
                      break;

                  case(result.input.slice(0, 10) == "0xe8e33700"):
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
              });
            })
    } catch (err) {
        console.log(err);
        console.log("Failed to start Bot!")
    }
}

// const clearsubscription = async () => {
//   try {
//       // await web3.eth.clearSubscriptions()
//       const clear = web3.eth.clearSubscriptions()
//       console.log(clear, "Subscription Clear Success!")
//   } catch (err) {
//       console.log("Error Clearing");
//   }
// }
const clearsubscription = async () => {
  try {
      // await web3.eth.clearSubscriptions()
      subscription.unsubscribe((error, success) => {
          if(success)
              console.log('Bot Stoped!');
      });
    
      console.log(subscription, "Unsubscription Success!")

  } catch (err) {
      console.log("Error! Bot not stopped!");
  }
  console.log("Stack -----------------", stack);
}

// I used this function to send out presigned transaction hashes, to achieve
// better latency
const sendTxfast = async () => {
    await web3.eth.sendSignedTransaction(Hashes[count])
    count++
    console.log(`Transaction sent`)
}

// function start() {
//     mempoolsubscription()
// }

export {
    start,
    clearsubscription
};

// export default start makehashes() noch addresse ändern array test
// txa("0xcfe28233465e5d9079655cad5f78f61ed7e9d9f28523e273f9718812fdf80c40")
