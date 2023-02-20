import React, { Component } from 'react'
import {  Button } from 'antd';

class NavBar extends Component {

    render() {
        const { onClickConnectWallet, onClickDisconnectWallet, walletAddress } = this.props
        return (
            <div className="absolute top-0 m-auto w-full z-10">
                <header>
                    <p className="text-white py-2 font-sans font-semibold sm:tracking-wider md:tracking-widest" style={{backgroundImage:'linear-gradient(to right, #690655, #c30e8e, #d50e9a, #d50e9a, #c30e8e, #690655)'}}>
                        LAUNCH STARTS OCTOBER 15TH @3PM EST
                    </p>
                </header>
                <nav className="">
                    <div className="flex justify-center md:justify-end">
                        {
                            walletAddress ? 
                            <div className="flex flex-row md:w-98 w-90 md:pt-4 pt-6">
                                <Button onClick={onClickDisconnectWallet} className="text-white font-sans font-semibold py-3 mx-3" style={{backgroundImage: 'linear-gradient(#FF14CA, #6C034D)', color:'#FFFFFF', borderRadius:'8px', border:'none'}}>
                                    { walletAddress.slice(0, 30) }...
                                </Button> 
                            </div>
                            :
                            <div className="flex flex-row md:w-48 w-40 md:pt-4 pt-6">
                                {/* <Button onClick={onClickConnectWallet} size={'large'} style={{backgroundColor: 'rgba(253, 230, 138, 0.8)', borderColor: 'rgba(253, 230, 138, 1)'}}> */}
                                <Button onClick={onClickConnectWallet} className="text-white font-sans font-semibold py-3" style={{backgroundImage: 'linear-gradient(#FF14CA, #6C034D)', color:'#FFFFFF', borderRadius:'8px', border:'none'}}>
                                    CONNECT WALLET                     
                                </Button>
                            </div>
                        }
                       
                    </div>

                </nav>
            </div>
        )
    }
}

export default NavBar