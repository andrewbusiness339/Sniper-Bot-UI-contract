import React, { Component } from 'react'
import './index.css'

class TeamSection extends Component {
    render() {
        return (
            <div className="w-container">
                <div className="progress-img2 pt-10 pb-8 bg-no-repeat bg-cover px-3 md:px-20 " style={{ backgroundImage: 'url(/images/space.jpg)'}}>
                    <h1 id="goalsSection" className="section-heading text-pink font-bold italic">TEAM</h1>
                </div>
                <div className="wf-section p-3 md:p-20 ">
                    <div className="teams1 grid md:grid-cols-3 sm:grid-cols-1">
                        <div className="team-member">
                            <div className="team-img">
                                <img src="/images/team1.png"/>
                            </div>
                            <div className="team-detail">
                                <span className="section-heading text-pink font-bold italic"> Rob.ETS </span> <br />
                                <p className="text-white font-default font-bold italic text-2xl pt-3">
                                    Founder.
                                    ET marked my life. Public and commercial relations.
                                </p>

                            </div>
                        </div>
                        <div className="team-member">
                            <div className="team-img">
                                <img src="/images/team2.png"/>
                            </div>
                            <div className="team-detail">
                                <span className="section-heading text-pink font-bold italic"> Vitaliy.ETS </span> <br />
                                <p className="text-white font-default font-bold italic text-2xl pt-3">
                                    DEVELOPER.
                                </p>                                
                            </div>
                        </div>
                        <div className="team-member">
                            <div className="team-img">
                                <img src="/images/team3.png"/>
                            </div>
                            <div className="team-detail">
                                <span className="section-heading text-pink font-bold italic"> Angie.ETS </span> <br />
                                <p className="text-white font-default font-bold italic text-2xl pt-3">
                                    Co-founder.
                                    Tattoo and graffiti lover. Artist and designer.                     
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default TeamSection