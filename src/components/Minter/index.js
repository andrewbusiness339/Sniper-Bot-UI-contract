import React, { Component } from 'react'
import { Slider, Button } from 'antd';
import { ethers, BigNumber } from 'ethers'

import './index.css'
import { contractAddress } from '../../constants/address';
import { hexlify } from '@ethersproject/bytes';

class Minter extends Component {

    state = {
        numberOfDuck: 20
    }

    onChangeNumberOfDuck = (value) => {
        this.setState({ numberOfDuck: value })
    }

    onMint = async () => {

        const { walletAddress, setStatus, setMintLoading } = this.props
        const { numberOfDuck } = this.state

        if (!walletAddress) {
            setStatus('Please connect with Metamask')
            return
        }
        setMintLoading(true)

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const contractABI = require("../../constants/contract.json")
        const contract = new ethers.Contract(contractAddress, contractABI, signer)
        let res = await contract.mintToken(numberOfDuck, { value: BigNumber.from(1e9).mul(BigNumber.from(1e9)).mul(5).div(100).mul(numberOfDuck), from: walletAddress })
        if (res.hash) {
            setStatus(`You minted ${numberOfDuck} Ducks Successfully`)
            setMintLoading(false)
        }
    }

    render() {

        const { numberOfDuck } = this.state
        const { loading } = this.props
        return (
            <div className="feature-image" style={{ backgroundImage: 'url(/images/backend.jpg)', backgroundSize:'100% 100%' }}>
                <div className="black-overlay">
                    <div className="container-14 w-container mt-3">
                        <img src={'/images/logo.png'} loading="lazy" style={{width:'200px'}} />
                    </div>
                    <div className="container-16 w-container">
                        <p className="text-white font-default font-bold italic text-2xl">
                            1000 CryptoETS on the Ethereum Blockchain
                        </p>
                    </div>
                    <div className="flex mx-auto rounded-3xl bg-black m-5" >
                        <div className="flex flex-col items-center p-10 minter-wrapper">
                            <span className="md:text-6xl text-3xl text-gray-600 md:max-w-[450px] max-w-[300px]" data-nsfw-filter-status="swf">
                                <span className="text-white drop-shadow-xl" data-nsfw-filter-status="swf">10 / 1000</span>
                            </span>
                            <div className="w-full">
                                <div className="flex justify-between">
                                    <span className="text-white drop-shadow-xl">Minted</span><br></br>
                                </div>
                                <div className="flex justify-between">

                                    <span className="md:text-2xl text-3xl text-white drop-shadow-xl"><center>Mint Price: <b>0.06 ETH</b></center></span>

                                </div>
                                <div className="w-full p-5 rounded-3xl mt-5" style={{ background: 'rgba(255, 255, 255, 0.4)' }}>
                                    <div className="w-full py-5">
                                        <Slider autoFocus={false} value={numberOfDuck} onChange={this.onChangeNumberOfDuck} defaultValue={20} min={1} max={20} marks={{
                                            1: <span className="text-black">1</span>,
                                            20: <span className="text-black">20</span>
                                        }} />
                                    </div>
                                    <div className="w-full flex justify-between">
                                        <span className="text-black drop-shadow-xl">{numberOfDuck} Duck</span>
                                        <span className="text-black drop-shadow-xl fontSize='50px' ">Total Price: {Math.round(5 * numberOfDuck) / 100}ETH</span>
                                    </div>
                                </div>

                                <div className="w-full flex justify-between mt-5">
                                    <span></span>
                                    {
                                        loading ?
                                            <Button type="primary" className="rounded-6x2 " size={'large'} style={{ backgroundColor: 'black', borderColor: 'black', fontSize: '50px' }}>
                                                Minting.....
                                            </Button> :
                                            <Button type="primary" onClick={this.onMint} className="rounded-6x2 " size={'large'} style={{ backgroundColor: 'black', borderColor: 'black', fontSize: '50px' }}>
                                                Mint
                                            </Button>
                                    }
                                    <br></br><br></br><br></br>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div> 
            </div>

        )
    }
}

export default Minter