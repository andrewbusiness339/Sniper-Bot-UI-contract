import React, { Component } from 'react'

class Contact extends Component {
    render() {
        return (
            <div className="w-container">
                <div className="progress-img2 pt-10 pb-8 bg-no-repeat bg-cover px-3 md:px-20" style={{ backgroundImage: 'url(/images/space.jpg)'}}>
                    <h1 id="goalsSection" className="section-heading text-white font-bold italic">
                        <span className="text-pink">JOIN US</span> ON THIS JOURNEY AND TOGETHER WE WILL GET 
                        <span className="text-pink"> TO THE MOON!</span>
                    </h1>
                    <div className="text-center">
                        <img src="/images/twitter.png" className="w-12 mx-10 inline"></img>
                        <img src="/images/discord.png" className="w-12 mx-10 inline"></img>
                    </div>
                </div>
                <div className="wf-section sm:px-8 md:px-20 text-white">
                    <p className="text-white font-default font-bold italic text-1xl mt-20 mb-5">© 2021 CryptoETS | All rights reserved.</p>
                </div>
            </div>
        )
    }
}

export default Contact