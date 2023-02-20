import React, { Component } from 'react'
import './index.css'

class RoadMap extends Component {
    render() {
        return (
            <div className="w-container">
                <div className="progress-img2 pt-10 pb-8 bg-no-repeat bg-cover px-3 md:px-20 " style={{ backgroundImage: 'url(/images/space.jpg)'}}>
                    <h1 id="goalsSection" className="section-heading text-pink font-bold italic">Road map</h1>
                    <p className="text-white font-default font-bold italic md:text-2xl sm:text-1xl">
                        We have been working very hard during the last 3 months and we are doing 
                        our best to make this project successful. 
                        Below is our roadmap explaining what we are working on. 
                        Each milestone will be unlocked when a certain % of CryptoETS has been minted. 
                        Further developments will be decided and voted by the CryptoETS community as a whole.
                    </p>
                </div>
                <div className="wf-section p-3 md:p-20 ">
                    <ul role="list">
                        <li className="roadmap-course my-10">
                            <div> <span className="text-pink text-2xl border-2 rounded-3xl border-pink">20%</span> </div>
                            <div className="text-white font-default font-bold italic md:text-2xl sm:text-1xl px-8" style={{opacity: 1}}>We have reserved 300 CryptoETS to giveaway, launch them among our community members. We will run raffles from our social networks and discord to keep the community active.<br /></div>
                        </li>
                        <li className="roadmap-course my-10">
                            <div> <span className="text-pink text-2xl border-2 rounded-3xl border-pink">50%</span> </div>
                            <div className="text-white font-default font-bold italic md:text-2xl sm:text-1xl px-8" style={{opacity: 1}}>Between all the members of the community, $40,000 will be given to a charity dedicated to REFORESTATION in order to take care of our planet and fight against climate change.<br /></div>
                        </li>
                        <li className="roadmap-course my-10">
                            <div> <span className="text-pink text-2xl border-2 rounded-3xl border-pink">70%</span> </div>
                            <div className="text-white font-default font-bold italic md:text-2xl sm:text-1xl px-8" style={{opacity: 1}}>5% of the CryptoETS collection has been reserved to a wallet that will belong to the community to subsidize future projects that the community values. (Additional art, memes, etc) with this we will give an added value to our cute CryptoETS so that they can reach the moon.<br /></div>
                        </li>
                        <li className="roadmap-course my-10">
                            <div> <span className="text-pink text-2xl border-2 rounded-3xl border-pink">90%</span> </div>
                            <div className="text-white font-default font-bold italic md:text-2xl sm:text-1xl px-8" style={{opacity: 1}}>An exclusive Merchandising section will open for the community, where you will find all kinds of products from t-shirts, caps, hoodies, tank tops, mugs and many articles that will fascinate you. Additionally all CryptoETS owners with a selected trait (to be revealed) will receive free merchandise.<br /></div>
                        </li>
                        <li className="roadmap-course active my-10">
                            <div> <span className="text-pink text-2xl border-2 rounded-3xl border-pink">100%</span> </div>
                            <div className="text-white font-default font-bold italic md:text-2xl sm:text-1xl px-8" style={{opacity: 1}}>To celebrate that we are all prepared to reach the moon, we are going to raffle a TESLA model3 among all CryptoETS owners. Each CryptoETS counts as one entry towards the raffle!<br /></div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default RoadMap