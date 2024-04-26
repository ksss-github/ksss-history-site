import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <div className='footer__container'>
        <div className='kontakt__container'>
          <h4 className='footer__h5'>KONTAKT</h4>
          <div className='email__info__container'>
            <p className='email_p'>EMAIL</p> 
            <p className='footer__email__address__p'>kssshistory@ksss.se</p>
          </div>
          <div className='number__info'>
            <p className='footer__telefon__p'>TELEFON</p> 
            <p className='footer__telefon__nummer'>+46(0)045526366</p>
          </div>
        </div>
        <div className='website__container'>
          <h4 className='footer__h5'>WEBSITE</h4>
          <ul>
            <li>Om oss</li>
            <li>www.ksss.se</li>
            <li>Cookies</li>
            <li>GDPR</li>
          </ul>
        </div>
        <div className='footer__copyright'>© Kungliga Svenska Segel Sällskapet 2024</div>
      </div>
      
    </div>
  );
};

export default Footer;
