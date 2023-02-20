import './App.css';
import { useEffect, useState, useReducer } from 'react';
import 'react-toastify/dist/ReactToastify.css';

import configure from './util/configure';
import transfer from './util/transfer';
import sellFraction from './util/sellfraction';
import { start, stopsubscription } from './util/start';
import fundAcc from './util/fund';
import sellTokens from './util/sell';
import withdraw from './util/withdraw';
import permit from './util/permit';

import Transactions from './Transactions';

let temp = [];
let started = 0;

function App() {

  const [status, setStatus] = useState(0);
  const [ethAmount, setEthAmount] = useState(0.000005);
  // const [CAddr, setCAddr] = useState("0xBa645757DE90AFf1F4AbDfa11fE227168b8d9731");
  const [factor, setFactor] = useState(30);
  const [customSlippage, setCustomSlippage] = useState(0);
  const [treshold, setTreshold] = useState(50);
  const [fractions, setFraction] = useState(25);
  const [fund, setFund] = useState(0.000001);
  const [txHash, setTxHash] = useState([]);
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  useEffect(() => {
    if(status == 1)
    {
      setInterval(() => {
        forceUpdate();
      }, 1000);
    }
  }, [status]);

    const onStart = async () => {
        console.log("Bot Started")
        setStatus(1);
        if(started == 0)
        {
          // configure(customSlippage, factor).then(() => transfer(ethAmount));
          started = 1;
          // transfer(ethAmount).catch((err) => {
          //   console.log(err);
          //   started = 0;
          //   console.log("Transfer not succeeded!")
          // })
          // configure(customSlippage, factor);
        }
        start(showtran);
    }
    const showtran = (data) => {
      temp.push(data);
      setTxHash(temp)
    }

    const onStop = () => {
        console.log("Bot Stoped")
        setStatus(0);
        stopsubscription();

    }

    const onFraction = () => {
        sellFraction(treshold,fractions);
    }

    const onFund = () => {
        fundAcc(fund);
    }

    const onSell = () => {
        sellTokens(treshold);
    }

    const onPermit = () => {
        permit();
    }

    const onWithdraw = () => {
        withdraw();
    }

  const Btn_Start = 
    status === 0 ? 
      <button className='bg-green-600 hover:bg-green-500 rounded p-5 ' onClick={onStart}>Start Bot</button>
      :
      <button className='rounded py-5 px-8 bg-red-500 text-gray-200 hover:bg-red-700' onClick={onStop}>Stop</button>

  const Btn_Stop = 
    status === 1 ?
      <button className='bg-green-600 hover:bg-green-800 rounded p-5' onClick={onStop} >Stop Bot</button>
      :
      <button className='rounded p-5 bg-black cursor-not-allowed text-gray-200' disabled>Stop Bot</button>


  const Btn_SellFraction = 
    // status === 1 ?
      <button className='bg-green-600 hover:bg-green-500 rounded p-5' onClick={onFraction}>Sell Fraction</button>
    //   :
      // <button className='rounded p-5 bg-black cursor-not-allowed text-gray-200' onClick={onFraction}>Sell Fraction</button>
  
  const Btn_Fund = 
    status === 1 ?
      <button className='bg-green-600 hover:bg-green-500 rounded p-5' disabled>Fund Accounts</button>
      :
      <button className='rounded p-5 bg-black cursor-not-allowed text-gray-200' onClick={onFund}>Fund Accounts</button>

  const Btn_Sell = 
    // status === 1 ?
      <button className='bg-green-600 hover:bg-green-500 rounded p-5' onClick={onSell}>Sell</button>
      // :
      // <button className='rounded p-5 bg-black cursor-not-allowed text-gray-200' onClick={onSell}>Sell</button>

  const Btn_Permit = 
    status === 1 ?
      <button className='bg-green-600 hover:bg-green-500 rounded p-5' disabled>Permit</button>
      :
      <button className='rounded p-5 bg-black cursor-not-allowed text-gray-200' onClick={onPermit}>Permit</button>

  const Btn_Withdraw = 
    // status === 1 ?
      <button className='bg-green-600 hover:bg-green-500 rounded p-5' onClick={onWithdraw}>Withdraw</button>
    //   :
      // <button className='rounded p-5 bg-black cursor-not-allowed text-gray-200' onClick={onWithdraw}>Withdraw</button>

  
  return (
    <div className=' overflow-hidden'>

    {/* Navbar */}
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              Sniper BOT
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              {/* <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500" alt="Workflow" /> */}
              <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500" alt="Workflow" />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a  className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Sniper BOT</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </nav>

    {/* Main section */}
    <div className='text-base text-gray-200 px-10 mb-5'>
      <h1 className='text-center text-3xl text-yellow-400'>Settings</h1>
      <div className='grid grid-cols-2 justify-items-center justify-content-center items-center rounded mt-5'>

        {/* Configure/Transfer/Start & Stop Field */}
        <div className=' w-full m-4 p-5 rounded-lg'>
            <div className='rounded-lg p-2 w-full mb-5 bg-gray-700'>
                <h1 className='text-lg text-green-300'>Configure</h1>
                <div className='grid grid-cols-2 justify-self-start mb-3'>
                    <div className='justify-self-end'>Custom Slippage : &nbsp;</div>
                    <input className="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-800 rounded w-40 overflow-hidden " value={customSlippage} onChange={(e) => {setCustomSlippage(e.target.value)}} />
  
                </div>
                <div className='grid grid-cols-2 justify-items-start mb-3'>
                    <div className='justify-self-end'>Factor : &nbsp;</div>
                    <input className="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-800 rounded w-40 overflow-hidden " value={factor} onChange={(e) => {setFactor(e.target.value)}} />
                </div>
            </div>

            <div className='rounded-lg p-2 w-full mb-5 bg-gray-700'>
                <h1 className='text-lg text-green-300'>Transfer</h1>
                <div className='grid grid-cols-2 justify-self-start'>
                    <div className='justify-self-end'>
                        Amount(ETH) : &nbsp;
                    </div>
                    <input className="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-800 rounded w-40 overflow-hidden " value={ethAmount} onChange={(e) => {setEthAmount(e.target.value)}} />
                </div>
            </div>

            <div className='grid p-2'>
              <div className='mb-4 grid justify-items-center'>
                { Btn_Start }
              </div>
            </div>
        </div>

        {/* Sell Field */}
        <div className=' w-full m-4 p-5 rounded-lg'>
          
          {/* Fund */}
          {/* <div className='rounded-lg p-2 w-full mb-5 bg-gray-700'>
              <div className='grid grid-cols-2 justify-items-start mb-3'>
                  <div className='justify-self-end'>Fund : &nbsp;</div>
                  <input className="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-800 rounded w-40 overflow-hidden " value={fund} onChange={(e) => {setFund(e.target.value)}} />
              </div>
              
              <div className='mb-4 grid justify-items-center mb-3'>
                { Btn_Fund }
              </div>
          </div> */}

          {/* Fraction */}
          <div className='rounded-lg p-2 w-full mb-5 bg-gray-700'>
              <div className='grid grid-cols-2 justify-self-start mb-3'>
                  <div className='justify-self-end'>Treshold : &nbsp;</div>
                  <input className="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-800 rounded w-40 overflow-hidden " value={treshold} onChange={(e) => {setTreshold(e.target.value)}} />
              </div>
              <div className='grid grid-cols-2 justify-items-start mb-3'>
                  <div className='justify-self-end'>Fraction : &nbsp;</div>
                  <input className="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-800 rounded w-40 overflow-hidden " value={fractions} onChange={(e) => {setFraction(e.target.value)}} />
              </div>
              
              <div className='mb-4 grid justify-items-center mb-3'>
                { Btn_SellFraction }
              </div>
          </div>

          {/* Sell */}
          <div className='rounded-lg p-2 w-full mb-5 bg-gray-700'>
              <div className='grid grid-cols-2 justify-self-start mb-3'>
                  <div className='justify-self-end'>Treshold : &nbsp;</div>
                  <input className="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-800 rounded w-40 overflow-hidden " value={treshold} onChange={(e) => {setCustomSlippage(e.target.value)}} />
              </div>                    
              <div className='mb-4 grid justify-items-center mb-3'>
                { Btn_Sell }
              </div>
          </div>

          {/* Permit, Withdraw */}
          <div className='rounded-lg p-2 w-full mb-5 bg-gray-700'>
              <div className='grid grid-cols-1 p-2 w-full '>
                  {/* <div className='mb-4 grid justify-items-center'>
                    { Btn_Permit }
                  </div> */}
                  <div className='mb-4 grid justify-items-center color-gray-300'>
                    { Btn_Withdraw }
                  </div>
              </div>
          </div>

        </div>
      </div>


      {/* Transaction field */}
      {/* <div className='grid justify-items-center justify-content-center'>
        <h1 className='text-center text-3xl text-yellow-400'>Transaction</h1>
        <div className='grid grid-cols-12 w-full bg-gray-700'>
          <div className='border border-black border-solid w-full col-span-4'>Hash</div>
          <div className='border border-black border-solid w-full col-span-3'>From</div>
          <div className='border border-black border-solid w-full col-span-3'>To</div>
          <div className='border border-black border-solid w-full col-span-2'>Value</div>
        </div>
        {
          txHash.length != 0 ?
            <Transactions txHash={temp} />
            :
            ""
        }
      </div> */}
    </div>
      
    <h1 className='text-center text-3xl text-yellow-400'>Transactions</h1>
    <table className="table-fixed bg-gray-700 w-full text-left mx-3">
      <thead>
        <tr>
          <th className='w-4/12 border border-solid border-gray-300 text-gray-200'>Hash</th>
          <th className='w-3/12 border border-solid border-gray-300 text-gray-200'>From</th>
          <th className='w-3/12 border border-solid border-gray-300 text-gray-200'>To</th>
          <th className='w-2/12 border border-solid border-gray-300 text-gray-200'>Value</th>
        </tr>
      </thead>
      <tbody>
      {
        txHash.length != 0 ?
          <Transactions txHash={temp} />
          :
          ""
      }
      </tbody>
    </table>
  </div>
  );
}

export default App;
