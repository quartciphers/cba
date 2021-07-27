import React from "react";
import "./intro.css"
import image from "../Intro/images/illustration.png";
import imagetwo from "../Intro/images/illustration-1.png";


function Intro(){
    return(
        <div id="intro">
            <div class="intro"  >
        <h1 class="heading">Christopher Badminton Academy</h1>
        
        <img class="img-fluid" src={image} alt=""/>
        <p class="heading-flex" >SCBC Academy</p>
        <p class="heading-flex1">Nanganallur</p>
        <div class="circle"></div>
        <div class="circle1"></div>
    </div>
    <img class="img-fluid1" src={imagetwo} alt=""/>
    <p class="heading-flex2">Knights Mount academy</p>
    <p class="heading-flex3">Urapakkam</p>
    </div>
    );
         
}

export default Intro;

