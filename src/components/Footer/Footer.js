import React from "react";
import "./footer.css";
import logo from "../../images/LOGO1.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin , faFacebook ,faTwitter , faInstagram  , faYoutube , faTripadvisor } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
  return (
    <footer className="f" >
      <div fluid style={{ backgroundColor: "lightgrey" }}  >
        <div className="cont-div">
          <div className="foot-img-div">
            <img src={logo} alt="" className="imgg"/>
          </div>
          <div className="copy-cont">
            <h2 style={{ color: "black" }}>Contact: </h2>
          
              <li style={{color:"black"}}>
              <a href="https://wa.me/9822465339" style={{color:"black"}}>Whatsapp</a>
              </li> 
            {/* 9822465339<br/> */}

<li  style={{color:"black"}}>
<a href="tel:9822465339" style={{color:"black"}}>Call </a> 
</li><li  style={{color:"black"}}>
<a href="tel:9822820339" style={{color:"black"}}>Another Call </a> 
</li>
{/* 9822465339, 9822820339<br/> */}
<li  style={{color:"black"}}>
<a href="mailto:artoflivingsewa@gmail.com?subject=Test email, please change this" style={{color:"black"}}>E-mail</a>
</li>
<li  style={{color:"black"}}>
<a href="mailto:aolshwetalakhe@gmail.com?subject=Test email, please change this" style={{color:"black"}}>E-mail2</a>
</li>
<li  style={{color:"black"}}>
<a href="https://www.facebook.com/Online-YOGA-100289865086171" style={{color:"black"}}>FacebookPage</a>
</li>
          </div>
          <div className="links-div">
            <h2 style={{ color: "black" ,textAlign:"justify"}}>Links:</h2>
            <ul className="sociall-icons">
             
                  <a href="https://www.facebook.com/Online-YOGA-100289865086171">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="follow-icon-1"
                      target="_blank"
                    />
                  </a>
                  <a href="https://www.linkedin.com/company/bangaloreashram/">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="follow-icon-1"
                      target="_blank"
                    />
                  </a>
                  <a href="https://twitter.com/BangaloreAshram">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="follow-icon-1"
                      target="_blank"
                    />
                  </a>
                  
                  <a href="https://www.instagram.com/thebangaloreashram/">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="follow-icon-1"
                      target="_blank"
                    />
                  </a>
                  <a href="https://www.youtube.com/artoflivinginternationalcenter">
                    <FontAwesomeIcon
                      icon={faYoutube}
                      className="follow-icon-1"
                      target="_blank"
                    />
                  </a>
                  <a href="https://www.tripadvisor.in/Attraction_Review-g297628-d2074081-Reviews-Art_of_Living_International_Center-Bengaluru_Bangalore_District_Karnataka.html">
                    <FontAwesomeIcon
                      icon={faTripadvisor}
                      className="follow-icon-1"
                      target="_blank"
                    />
                  </a>
                  
                </ul>
                <h4 style={{color:"black",textAlign:"left"}}>Made by:<br/>Ruchika Pandharikar <br/>Neha Kalbande</h4>
  </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
