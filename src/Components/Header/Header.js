import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faSignInAlt,
  faUserAlt,
  faGlobe,
  faBars,
  faCaretSquareLeft,
} from '@fortawesome/free-solid-svg-icons';

import { Menu, Dropdown, Button, Space } from 'antd';

const Header = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleClick = () => {
    setCollapsed(!collapsed);
  };

  const handleClose = () => {
    setCollapsed(false);
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <a rel='noopener noreferrer' href='#'>
          Az
        </a>
      </Menu.Item>
      <Menu.Item>
        <a rel='noopener noreferrer' href='#'>
          En
        </a>
      </Menu.Item>
      <Menu.Item>
        <a rel='noopener noreferrer' href='#'>
          Ru
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <header className='main-header'>
        <div className='toggle-button' onClick={handleClick}>
          <FontAwesomeIcon icon={faBars} />
        </div>

        <nav className='main-navbar'>
          <ul className='main-navbar__items'>
            <li className='main-navbar__items--item'>
              <Link to='/'>
                <FontAwesomeIcon icon={faHome} />
              </Link>
            </li>
            <li className='main-navbar__items--item'>
              <Link to='/login'>
                <FontAwesomeIcon icon={faSignInAlt} />
              </Link>
            </li>
            <li className='main-navbar__items--item'>
              <Link to='/profile'>
                <FontAwesomeIcon icon={faUserAlt} />
              </Link>
            </li>
            <li className='main-navbar__items--item'>
              <Link to='#'>
                <Dropdown overlay={menu} placement='bottomCenter'>
                  <FontAwesomeIcon icon={faGlobe} />
                </Dropdown>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <div
        className={collapsed ? 'backdrop open' : 'backdrop'}
        onClick={handleClose}
      />

      <nav className={collapsed ? 'mobile-nav active' : 'mobile-nav'}>
        <ul className='mobile-nav__items'>
          <li className='mobile-nav__item' onClick={handleClick}>
            <Link to='/add-order'>Sifariş Yerləşdir</Link>
          </li>
          <li className='mobile-nav__item' onClick={handleClick}>
            <Link to='/service-orders'>Xidmət Sifarişləri</Link>
          </li>
          <li className='mobile-nav__item' onClick={handleClick}>
            <Link to='/produce-orders'>Məhsul Sifarişləri</Link>
          </li>
          <li className='mobile-nav__item' onClick={handleClick}>
            <Link to='/companies'>Şirkətlər</Link>
          </li>
          <li className='mobile-nav__item' onClick={handleClick}>
            <Link to='/store'>Mağaza</Link>
          </li>
          <li className='mobile-nav__item' onClick={handleClick}>
            <Link to='/blog'>Bloq</Link>
          </li>
          <li className='mobile-nav__item' onClick={handleClick}>
            <Link to='/instruction'>Təlimat</Link>
          </li>
          <li className='mobile-nav__item' onClick={handleClick}>
            <Link to='/paid-services'>Ödənişli Xidmətlər</Link>
          </li>
        </ul>
        <div className='close-btn' onClick={handleClose}>
          <FontAwesomeIcon icon={faCaretSquareLeft} />
        </div>
      </nav>
    </>
  );
};

export default Header;
