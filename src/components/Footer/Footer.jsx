import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <a src={facebook_icon} target="facebook" href="https://www.facebook.com/Netflix">
          <img src={facebook_icon} alt="Facebook" />
        </a>
        <a src={instagram_icon} target="instagram" href="https://www.instagram.com/netflix">
          <img src={instagram_icon} alt="instagram" />
        </a>
        <a src={twitter_icon} target="twitter" href="https://twitter.com/netflix">
          <img src={twitter_icon} alt="twitter" />
        </a>
        <a src={youtube_icon} target="youtube" href="https://www.youtube.com/Netflix">
          <img src={youtube_icon} alt="youtube" />
        </a>
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Prefrences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>© 2025 Netflix, Inc. All rights reserved.</p>
    </div>
  )
}

export default Footer
