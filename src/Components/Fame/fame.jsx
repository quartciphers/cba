import React from "react";
import "./fame.css"
import fameone from "../Fame/images/fame-img1.png";
import fametwo from "../Fame/images/fame-img2.png";
import famethree from "../Fame/images/fame-img3.png";
import famefour from "../Fame/images/fame-img4.png";
import famefive from "../Fame/images/fame-img5.png";
import famesix from "../Fame/images/fame-img6.png";

function Fame(){
    return (
        <div>
               <div class="fame">
        <h1 class="fame-head">Our Hall of Fame</h1>
        <img class="fameimg1" src={fameone} alt="" width="350px" height="630px"/>
        <img class="fameimg3" src={famethree} alt="" width="730px" height="300px"/>
        <img class="fameimg4" src={famefour} alt="" width="350px" height="300px"/>
        <img class="fameimg2"  src={fametwo} alt="" width="730px" height="630px"/>
        <img class="fameimg5" src={famefive} alt="" width="350px" height="630px"/>
        <img class="fameimg6" src={famesix} alt="" width="350px" height="300px"/>
    </div>
        </div>
    );
}


export default Fame;