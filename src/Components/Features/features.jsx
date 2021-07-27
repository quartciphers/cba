import React from "react";
import "./features.css"
import containerone from "../Features/images/container1.png";
import containertwo from "../Features/images/container2.png";
import containerthree from "../Features/images/container3.png";
import containerfour from "../Features/images/container4.png";

function Features(){
    return (
        <div>
            <div class="listing-four">
                <h1 class="fheading">CBA features</h1>
            </div>
            <div class="container">
                <img class="container1" src={containerone} alt="" width="255px" height="204px"/>
                <img class="container2" src={containertwo} alt="" width="255px" height="204px"/>
                <img class="container3" src={containerthree} alt="" width="255px" height="204px"/>
                <img class="container4" src={containerfour} alt="" width="255px" height="204px"/>
            </div>
            <div class="about">
                <p class="about-one">
                    easy field courts for<br/>continous play
                </p>
                <p class="about-two">
                    spacious audience sets and <br/>sportive ambience
                </p>
                <p class="about-three">
                    regular fitness monitoring and <br/>medical assistance
                </p>
                <p class="about-four">
                    guide path to the trainees to <br/>competitions
                    </p>
            </div>
            <div class="circle7"></div>
            <div class="circle8"></div><br/>
        </div>
    );
}

export default Features;