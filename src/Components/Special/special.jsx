import React from "react";
import "./special.css"
import image from "../Special/images/shettle-img.png";
import imageone from "../Special/images/shettle-img2.png";
import imagetwo from "../Special/images/guy-img.png";



function Special(){
    return(
        <div>
            <div class="special" id="special">
        <h1 class="special1">Why we are special?</h1>
    </div>
    <div class="zig-zag">
        <div class="circle5"></div>
        <div class="circle2"></div>
        <img class="shettleimg" src={image} alt="" width="308px" height="332px" />
        <div class="circle3"></div>
        <img class="shettleimg2" src={imageone} alt="" width="308px" height="286px"/>
        <div class="circle4"></div>
        <img class="guyimg" src={imagetwo} alt="" width="186px" height="186px"/>
        <div class="circle6"></div>
    </div>
    <div class="listing">
        <h1 class="heading0"><li>Perfume</li></h1>
        <p class="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis scelerisque at quam congue posuere libero in sit quam. Consequat, scelerisque non tincidunt sit lectus senectus.</p>
    </div>
    <div class="listing-two">
        <h1 class="heading1"><li>Lipstick</li></h1>
        <p class="para1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis scelerisque at quam congue posuere libero in sit quam. Consequat, scelerisque non tincidunt sit lectus senectus.</p>
    </div>
    <div class="listing-three">
        <h1 class="heading2"><li>Face wash</li></h1>
        <p class="para2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis scelerisque at quam congue posuere libero in sit quam. Consequat, scelerisque non tincidunt sit lectus senectus.</p>
    </div>
        </div>

    );
    
}

export default Special;