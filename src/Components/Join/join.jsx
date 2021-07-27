import React from "react";
import "./join.css"
import vector from "../Join/images/vec4.png";
import vectortwo from "../Join/images/vec.svg";
import vectorthree from "../Join/images/vec2.svg";
import vectorfour from "../Join/images/vec3.svg";
import imgae from "../Join/images/join-img.png";
function Join(){
    return(
        <div id="join" className="join">
               
                   <img className="join1" src={vector} alt=""/> 
                   <p className="join2">Become a member of this growing community</p>
                   <button className="button">Join the community</button><br/> 
                   <img className="join3" src={vectortwo} alt=""/>
                   <img className="join4" src={vectorthree} alt=""/>
                   <img className="join5" src={imgae} alt=""/>
                   <img className="join6" src={vectorfour} alt=""/>
                   <p className="vector">Your Photo here</p>
               
        </div>

    );
}

export default Join;