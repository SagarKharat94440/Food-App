import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
<div className="footer-content">

    <div className="footer-content-left">
<img src={assets.logo} alt="" />

<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione neque illum impedit consequatur praesentium, officia rem beatae architecto sapiente? Nihil officiis obcaecati nisi, accusantium voluptatibus enim velit dolore provident molestiae praesentium commodi maxime neque animi. Animi quasi libero fuga quis quae aliquid architecto qui iste, laudantium similique, iusto nam rem?</p>
<div className="footer-social-icons">
    <img src={assets.facebook_icon} alt="" />
    <img src={assets.twitter_icon} alt="" />
    <img src={assets.linkedin_icon} alt="" />
</div>
    </div>

    <div className="footer-content-center">
        <h2>COMPANY</h2>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
        </ul>
        </div>

    <div className="footer-content-right">
<h2>
    GET IN TOUCH
</h2>
<ul>
    <li>+1-121-234-5436</li>
    <li>contact@tomato.com</li>
</ul>

    </div>
   

</div>
<hr />
<p className="footer-copyright">Copyright 2024 @ Tomato.com - All Right Reserved.</p>

    </div>
  )
}

export default Footer