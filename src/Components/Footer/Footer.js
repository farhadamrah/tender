import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <nav className='footer__nav'>
          <h1 className='footer__title'>Tender World</h1>
          <ul className='footer__list'>
            <li className='list__item'>
              <Link to='/contact-us'>Bizimlə əlaqə</Link>
            </li>
            <li className='list__item'>
              <Link to='/rules'>İstifadəçi qaydaları</Link>
            </li>
            <li className='list__item'>
              <Link to='/advertisement'>Saytda reklam</Link>
            </li>
          </ul>
          <span>info@tender.az</span>
          <span>+994 ** *** ** **</span>
          <span>+994 12 *** ** **</span>
          <p className='footer__copyrigth'>Copyright © 2021 Tender World </p>
        </nav>
      </div>
    </>
  );
};

export default Footer;
