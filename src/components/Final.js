import React from 'react'
import profile from "../img/profilepicture.png"
import arrow from "../img/arrow.png"
import calories from "../img/Calories Burnt.png"
import water from "../img/Water Intake.png"
import sleep from "../img/Sleep Cycle.png"
import "./Final.css"

const Final = () => {
    return (
        <div className="main-header">
            <div className="header-description">
                <h1>Montserrat Poppins</h1>
                <img className="profile" src={profile} alt="mypic"/>

            </div>

            <div className="header-content">
                <h1>We are up and running!</h1>
                <p>We have compiled you a set of <br/> meals today to reach your <br/> calorie count!</p>
                <img  className= "arrow" src={arrow} alt=""/>
            </div>

            <div className="stats-container">
                <img src={water} alt=""/>
                <img src={calories} alt=""/>
                <img src={sleep} alt=""/>
            </div>
        </div>
    )
}

export default Final
