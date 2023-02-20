import React, { Component } from 'react'
import './index.css'

class FAQ extends Component {
    render() {
        return (
            <div className="w-container">
                <div className="progress-img2 pt-10 pb-8 bg-no-repeat bg-cover px-3 md:px-20 " style={{ backgroundImage: 'url(/images/space.jpg)'}}>
                    <h1 id="goalsSection" className="section-heading text-pink font-bold italic">FAQ</h1>
                    <p className="text-white font-default font-bold italic md:text-2xl sm:text-1xl">
                        Below we will try to clarify any doubts that may have arisen.
                    </p>
                </div>
                <div className="wf-section p-3 md:p-20">
                    <ul role="list" className="w-list-unstyled text-white font-default font-bold italic md:text-2xl sm:text-1xl">
                        <li className="w-full text-left mb-10">
                            <div>
                                <p className="text-white faq-bar-closed">What is CryptoETS? <span className="float-right text-black">+</span></p>
                                <div className="text-white">
                                    CryptoETS are a collection of 10,000 algorithmically generated NFT that live on the blockchain of the Ethereum network.
                                    Each CryptoETS is unique but some are rarer than others.
                                </div>
                            </div>
                        </li>
                        <li className="w-full text-left my-10">
                            <div>
                                <p className="text-white faq-bar-closed">When will minting begin?</p>
                                <div className="text-white">
                                    Launch October 15th @3PM EST.
                                    The minting will only be made from our website on the date and time indicated.
                                    CryptoETS price will be 0.06ETH + GAS.
                                    You can mint up to 20 CryptoETS per tx. The day has finally come for CryptoETS to keep us company!
                                </div>
                            </div>
                        </li>
                        <li className="w-full text-left my-10">
                            <div>
                                <p className="text-white faq-bar-closed">What is the future of CryptoETS?</p>
                                <div className="text-white">
                                    We have a lot in the works for CryptoETS, game launch, Airdrops, IRL events, contests, token, CryptoPETS.
                                    With the help of the community everything is possible, together we hope that CryptoETS reaches the MOON!
                                </div>
                            </div>
                        </li>
                        <li className="w-full text-left my-10">
                            <div>
                                <p className="text-white faq-bar-closed">Where does CryptoETS donate to?</p>
                                <div className="text-white">
                                    When we reach 50%. Between all the members of the community, $40,000 will be given to a charity dedicated to REFORESTATION in order to take care of our planet and fight against climate change.
                                </div>
                            </div>
                        </li>
                        <li className="w-full text-left my-10">
                            <div>
                                <p className="text-white faq-bar-closed">What is the CryptoETS contract?</p>
                                <div className="text-white text-center">
                                    0x91EC76f63E3A62e9FF48406930f797171fe900b1
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default FAQ