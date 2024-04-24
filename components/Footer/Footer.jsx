import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <div className='footer__container'>
        <div className='kontak__container'>
          <h4 className='kontak__text'>KONTAKT</h4>
          <div className='email__info'>
            <p className='text-sm font-semibold'>EMAIL</p> 
            <p className='text-sm underline'>kssshistory@ksss.se</p>
          </div>
          <div className='number__info'>
            <p className='footer__telefon'>TELEFON</p> 
            <p className='footer__telefon__nummer'>+46(0)045526366</p>
          </div>
        </div>
        <div className='website__container'>
          <h4>WEBSITE</h4>
          <ul>
            <li>Om oss</li>
            <li>www.ksss.se</li>
            <li>Cookies</li>
            <li>GDPR</li>
          </ul>
        </div>
       
      </div>
    </div>
  );
};

export default Footer;
