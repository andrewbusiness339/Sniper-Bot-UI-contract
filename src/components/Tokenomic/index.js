import React, { Component } from 'react'
import './index.css'

class Tokenomic extends Component {
    render() {
        return (
            <div>
                <div className="progress-img2 w-container pt-10 pb-8 bg-no-repeat bg-cover" style={{ backgroundImage: 'url(/images/space.jpg)'}}>
                   <div className="replaced">
                       <div className="new-link-block mt-5">
                           <div className="image-holder">
                               <img src="/images/eth.svg" loading="lazy" width="51" alt="Ethereum Logo" className="image-11"/>
                            </div>
                            <div className="text-white font-default font-bold text-1xl italic tracking-wide">Ethereum<br/>SmartContract <br/> ERC721</div>
                        </div>
                        <div className="new-link-block mt-5">
                            <div className="image-holder">
                                <img src="/images/metamask.svg" loading="lazy" width="83" alt="The Metamask logo" className="image-14" />
                            </div>
                            <div className="text-white font-default font-bold text-1xl italic tracking-wide">0.06 ETH <br />Minted Price<br /></div>
                        </div>
                        <div className="new-link-block mt-5">
                            <div className="image-holder">
                                <img src="/images/dracula.png" loading="lazy" width="100"  alt="The RubberDuck Logo" className="image-12" />
                            </div>
                            <div className="text-white font-default font-bold text-1xl italic tracking-wide">10,000<br/>CryptoETS</div>
                        </div>
                        <div className="new-link-block mt-5">
                            <div className="image-holder">
                                <img src="/images/ipfs.png" loading="lazy" width="74" sizes="(max-width: 479px) 100vw, (max-width: 767px) 10vw, 74.00000762939453px"className="image-10"/>
                            </div>
                            <div className="text-white font-default font-bold text-1xl italic tracking-wide">InterPlanetary File System Storage</div> 
                        </div>
                        <div className="new-link-block mt-5">
                            <div className="image-holder">
                                <img src="/images/ipfs.png" loading="lazy" width="74" sizes="(max-width: 479px) 100vw, (max-width: 767px) 10vw, 74.00000762939453px"className="image-10"/>
                            </div>
                            <div className="text-white font-default font-bold text-1xl italic tracking-wide">On-Chain Randomised Starting Index</div> 
                        </div>
                        
                    </div>
                </div>
                <div className="tokenomics wf-section p-3 md:p-20">

                    <div className="w-container">
                        <div className="grid md:grid-cols-2 sm:grid-cols-1">
                            <div className="text-center">
                                <img src="/images/iglu.png" loading="lazy" className="w-3/5 mt-10 inline"/>
                            </div>
                            <div className="text-white px-5 font-defaule italic">
                                <h1 id="aboutSection" className="section-heading text-pink">RARITY</h1>
                                <p className="border-solid border-b-2 border-pink text-left py-2 mb-0">  <span className="text-3xl font-bold">10.000 </span> <span className="rariry-detail float-right pt-2 text-2xl">TOTAL CryptoETS</span>   </p>
                                <p className="border-solid border-b-2 border-pink text-left py-2 mb-0">  <span className="text-3xl font-bold">20 </span> <span className="rariry-detail float-right pt-2 text-2xl">BACKGROUNDS</span>   </p>
                                <p className="border-solid border-b-2 border-pink text-left py-2 mb-0">  <span className="text-3xl font-bold">30 </span> <span className="rariry-detail float-right pt-2 text-2xl">SKINS</span>   </p>
                                <p className="border-solid border-b-2 border-pink text-left py-2 mb-0">  <span className="text-3xl font-bold">38 </span> <span className="rariry-detail float-right pt-2 text-2xl">CLOTHES</span>   </p>
                                <p className="border-solid border-b-2 border-pink text-left py-2 mb-0">  <span className="text-3xl font-bold">39 </span> <span className="rariry-detail float-right pt-2 text-2xl">HATS</span>   </p>
                                <p className="border-solid border-b-2 border-pink text-left py-2 mb-0">  <span className="text-3xl font-bold">35 </span> <span className="rariry-detail float-right pt-2 text-2xl">MOUTHS</span>   </p>
                                <p className="border-solid border-b-2 border-pink text-left py-2 mb-0">  <span className="text-3xl font-bold">35 </span> <span className="rariry-detail float-right pt-2 text-2xl">EYES</span>   </p>
                                <p className="border-solid border-b-2 border-pink text-left py-2 mb-0">  <span className="text-3xl font-bold">10 </span> <span className="rariry-detail float-right pt-2 text-2xl">SUPER ETS</span>   </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tokenomic