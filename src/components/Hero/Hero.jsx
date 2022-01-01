import React from 'react'
import "./Hero.css"
import {Link} from "react-scroll"
function Hero() {
    return (
        <div className="heroSection">
            <div className="hero__content">
            
                 <div className="hero__content__heading">
                 
                      <h1>Great stuff is built <br/>with amazing developers </h1>
                      
                 </div>
                 <div className="hero__content__text">
                      <p>Start Your Open Source Journey From Here and <br/>Win Swags To Show Off</p>
                 </div>
                 <div className="hero__content__button">
                      <Link to="repoSection"><button>Get Started</button></Link>
                 </div>
                 <div className="hero__image">
                     <img src="/images/Main_Front.png" alt="Front_Main_image"/>
                 </div>
                 
            </div>
        </div>
    )
}

export default Hero
