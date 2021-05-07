import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <nav className='footer__nav'>
          <h1 className='footer__title'>Tender World</h1>
          <ul className='footer__list'>
            <li className='list__item'>
              <a href='#'>Bizimlə əlaqə</a>
            </li>
            <li className='list__item'>
              <a href='#'>İstifadəçi qaydaları</a>
            </li>
            <li className='list__item'>
              <a href='#'>Saytda reklam</a>
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
