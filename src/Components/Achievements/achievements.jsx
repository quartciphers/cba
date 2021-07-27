import React from "react";
import "./achievements.css"
import svgone from "../Achievements/images/vec5.png";
import svgtwo from "../Achievements/images/vec6.png";
import svgthree from "../Achievements/images/vec7.svg";
import svgfour from "../Achievements/images/vec8.png";
import svgfive from "../Achievements/images/vec9.png";
import svgsix from "../Achievements/images/vec10.png";
import svgseven from "../Achievements/images/vec11.png";
import svgeight from "../Achievements/images/vec12.png";
import svgnine from "../Achievements/images/vec13.png";
import svgten from "../Achievements/images/vec14.png";
import svgeleven from "../Achievements/images/vec15.png";
import svgtwelve from "../Achievements/images/vec16.png";


function Achievements(){
    return (
        <div id="achieve">
            <div class="achievements" >
                <h1 class="heading6">Our 8 years of achievements</h1>
                <p class="para6">And still marching towards a great goal...</p>
                <img class="svg1" src={svgone} alt=""/>
                <img class="svg2" src={svgtwo} alt="" />
                <img class="svg3" src={svgthree} alt=""/>
                <h1 class="achieve-fluid">1000+</h1>
                <p class="achieve-fluid-two">players coached so far</p>
                <img class="svg4" src={svgfour} alt=""/>
                <img class="svg5" src={svgfive} alt=""/>
                <img class="svg6" src={svgsix} alt=""/>
                <h1 class="achieve-fluid-three" >150+</h1>
                <p class="achieve-fluid-four">active trainees</p>
                <img class="svg7" src={svgseven} alt=""/>
                <img class="svg8" src={svgeight} alt=""/>
                <img class="svg9" src={svgnine} alt=""/>
                <h1 class="achieve-fluid-three1">1 vs 1</h1>
                <p class="achieve-fluid-four1">frequent internal games</p>
                <img class="svg10" src={svgten} alt=""/>
                <img class="svg11" src={svgten} alt=""/>
                <img class="svg12" src={svgeleven} alt=""/>
                <img class="svg13" src={svgtwelve} alt=""/>
                <img class="svg14" src={svgeleven} alt=""/>
                <img class="svg15" src={svgtwelve} alt=""/>
                <h1 class="achieve-fluid-three2">2</h1>
                <p class="achieve-fluid-four2">branches</p>
            </div>
        </div>
    );
}

export default Achievements;