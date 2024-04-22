import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <div>Footer
      <div className='footer-container'>
        <div className='kontak-container'>
          <h4 className='kontak-text'>Kontak</h4>
          <div className='email-info'>
            <p className='text-sm font-semibold'>EMAIL</p> 
            <p className='text-sm underline'>kssshistory@ksss.se</p>
          </div>
          <div className='number-info'>
            <p className='font-semibold text-sm '>TELEFON</p> 
            <p className='text-sm'>+46(0)045526366</p>
          </div>
        </div>
        <div className='website-container'>
          <h4>WEBSITE</h4>
          <ul>
            <li>Om oss</li>
            <li>www.ksss.se</li>
            <li>Cookies</li>
            <li>GDPR</li>
          </ul>
        </div>
        <div className='huvudpartners'>
        <h4>Våra Huvudpartners</h4>
        
      </div>
      </div>
      
      
    </div>
  );
}

export default Footer;
