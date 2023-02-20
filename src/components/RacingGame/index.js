import React, { Component } from 'react'

class RacingGame extends Component {
    render() {
        return (
            <div className="w-container">
                <div className="progress-img2 pt-10 pb-8 bg-no-repeat px-3 md:px-20 " style={{ backgroundImage: 'url(/images/ufo.jpg)', height:'250px', backgroundSize:'100% 100%'}}>
                </div>
                <div className="wf-section p-3 md:p-20 ">
                    <ul role="list" className="w-list-unstyled">
                        <li className="game-items my-10">
                            <div>
                                <p className="section-heading text-pink font-bold italic">RACING GAME WITH UFO BLOCKCHAIN</p>
                                <div className="text-white font-default font-bold italic md:text-2xl sm:text-1xl">
                                    We have met with a well-known company that develops Blockchain games and if we get 100% of your support we will give way to the realization of a racing game with CrytoETS ufo where you will import your CryptoETS and compete to win $ CETS. These tokens will be used to buy other upgrades for the ufo, merchandising, 
                                    IRL events, etc.
                                </div>
                            </div>
                        </li>
                        <li className="game-items my-10">
                            <div>
                                <p className="text-white font-bold italic sm:text-3xl md:text-3xl">
                                    <span className="text-pink">5-6 WEEKS AFTER LAUNCH,</span> the CryptoPETS will arrive. All owners of a CryptoETS will receive a free companion pet (they will only pay for gas) so they do not feel alone on their trip <span className="text-pink">to the MOON!</span>
                                </p>
                                <div className="text-white font-default font-bold italic md:text-2xl sm:text-1xl">
                                    We are excited to have you join us in this adventure where the future of CryptoETS will depend on you. We will be delighted to hear your ideas that we will vote among the community and we will set out to make them a reality. 
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default RacingGame