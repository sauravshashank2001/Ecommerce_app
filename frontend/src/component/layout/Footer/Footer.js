import React from 'react'
import playStore from "../../../images/playstore.png"
import appStore from "../../../images/Appstore.png"
import "./Footer.css"



const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>Download Our App</h4>
        <p>Download App for Android and IOS mobile Phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className='midFooter'>
        <h1>Ecommerce</h1>
        <p> High Quality is our first priority</p>
      </div>

      <div className='rightFooter'>

        <h4>Follow us</h4>
        <a href="https://www.instagram.com/shashank__27/">Instagram</a>
        <a href="https://www.linkedin.com/in/shashank-saurav-0207011b8/">Linkedin</a>
      </div>

    </footer>



  )
}

export default Footer;
