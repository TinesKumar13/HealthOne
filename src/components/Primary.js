import React from 'react'
import Yoga from "../img/maxresdefault.jpg"
import "./Primary.css"

const Primary = () => {
    return (
        <div className="main-container">

            <div className="right-section">

            <img src={Yoga} alt=""/>
            </div>

            <div className="left-section">
                <h1>Revive Your Spirit</h1>
                <p>Track your health on a daily basis with us!</p>
                <button>Start Now</button>
            </div>
            
        </div>
    )
}

export default Primary
