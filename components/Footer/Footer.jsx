import React from 'react';
import Image from 'next/image';
import coke from '../../public/images/coke.webp';
import hh from '../../public/images/hh.jpeg';
import stockholm from '../../public/images/stockholm.webp';
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <div className='footer-container'>
        <div className='kontak-container'>
          <h4 className='kontak-text'>Kontak</h4>
          <div className='email-info'>
            <p className='text-sm font-semibold'>EMAIL</p> 
            <p className='text-sm underline'>kssshistory@ksss.se</p>
          </div>
          <div className='number-info'>
            <p className='font-semibold text-sm'>TELEFON</p> 
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
        <div className='huvudpartners flex flex-col items-center justify-center'>
          <h4>Våra Huvudpartners</h4>
          <div className='sponsors flex flex-row gap-8 mt-7'>
            <Image src={coke} alt="Coke" width={70} height={60} />
            <Image src={hh} alt="HH" width={60} height={60} />
            <Image src={stockholm} alt="Stockholm" width={100} height={60} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
