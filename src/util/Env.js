// require('dotenv').config() 
// const RPC_URL = "https://bsc-mainnet.nodereal.io/v1/64a9df0874fb4a93b9d0a3849de012d3"
// const RPC_URL = "wss://bsc-ws-node.nariox.org:443"
// const RPC_URL = "wss://bsc.getblock.io/mainnet/?api_key=API_KEY"
// const RPC_URL = "https://app.ankr.com/api/"
// const RPC_URL = "https://data-seed-prebsc-1-s1.binance.org:8545/"
// const RPC_URL = "wss://data-seed-prebsc-1-s1.binance.org:8545/"
// const RPC_URL = "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
// const RPC_URL = "wss://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"

// BSC Wss
// const RPC_URL = "wss://solitary-green-needle.bsc-testnet.discover.quiknode.pro/d563848109d47362bbdab22769bf384480f9dac1/"

// Polygon http, wss
const RPC_URL = "wss://ws-matic-mainnet.chainstacklabs.com"
const RPC = "https://polygon-rpc.com";
// const RPC = "https://rpc-mainnet.matic.network";

const address = "0xBa645757DE90AFf1F4AbDfa11fE227168b8d9731"
const privateKey = "9dc6ba5c233338c6f3acb72cce37caf462130dad87cf5691c02e6e02fb2cce54"

const MNEMONIC = ""
const ETH_AMOUNT = "0.5"

const BlacklistMode = false


// contract address of want to see that swapping
const pair_token = "0x637CB66526244029407046867E1E0DFD28b2294E" 
// const wbnb = "0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23"
const wbnb = "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"

const INSIDER = "0xBa645757DE90AFf1F4AbDfa11fE227168b8d9731"
// const INSIDER = "0x5b47BDC43AB763e69e06BCdf1aaFF298B7ddEb55"
// const INSIDER = "0x6bc1968133fa68046bFca3bf73Bf4676abB942F5"

const factor = 39;
const customslippage = 0

const Treshold = 50
const Fraction = 25

const FUND = "0.009"
const UV_THREADPOOL_SIZE = 16

export {
    pair_token,
    wbnb,
    address,
    factor,
    privateKey,
    RPC_URL,
    BlacklistMode,
    INSIDER,
    RPC
};