import React from 'react'
import "./Secondary.css"
import Cook from "../img/cookbook.png"
import Discover from "../img/discovermore.png"
import Fit from "../img/stayfit.png"

const Secondary = () => {
    return (
        <div className="secondary-container">
         <div className="card-section">
             <img src={Cook} alt=""/>
             <p>Cookbook</p>
             <h3>discover</h3>
         </div>
         <div className="card-section">
             <img src={Discover} alt=""/>
             <p>Discover More</p>
             <h3>discover</h3>
         </div>
         <div className="card-section">
             <img src={Fit} alt=""/>
             <p>Stay Fit</p>
             <h3>discover</h3>
         </div>
        </div>
    )
}

export default Secondary
