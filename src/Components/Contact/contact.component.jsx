import React from 'react';
import "./contact.css";
import background from  './bg.png';

//import map from '../assets/map1.png'
function Contact()
{
    
    return(

        <body >
        <div className="text contact" >
            
                    <img className="img2 reach" src={background} alt=""></img>
                    
                    <div className="map">
                    <iframe className="map1 map2" title="map"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Chennai Port&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"/>
                    </div>
                                    
                           
                            
                           
                <h1 className="txt line1" id="contact">Reach to us!</h1>
                <p className="p line2">Let’s connect to extend our opportunities</p>
                <div className="src" >
                    <form>
                    <div className="form">
                    <input className="name" type="text"  name="name" placeholder="Name"/>
                    <input className="mobilenumber" type="text"  name="mobile Number" placeholder="Mobile Number"/>
                    <input className="email"  type="text" id="Email" name="lastname" placeholder="Email" />
                    <input  className="message" name="subject" placeholder="Message" />
                    <button className="submit" >Send Now</button>
                    
                    </div>
                    </form>
                </div>
                </div>

        
        </body>


    
    );
}
export default Contact;