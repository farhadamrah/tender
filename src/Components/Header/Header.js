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

const Header = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleClick = () => {
    setCollapsed(!collapsed);
  };

  const handleClose = () => {
    setCollapsed(false);
  };

  return (
    <>
      <header className="main-header">
        <div className="toggle-button" onClick={handleClick}>
          <FontAwesomeIcon icon={faBars} />
        </div>

        <nav className="main-navbar">
          <ul className="main-navbar__items">
            <li className="main-navbar__item">
              <Link to="/">
                <FontAwesomeIcon icon={faHome} />
              </Link>
            </li>
            <li className="main-navbar__item">
              <Link to="/login">
                <FontAwesomeIcon icon={faSignInAlt} />
              </Link>
            </li>
            <li className="main-navbar__item">
              <Link to="/profile">
                <FontAwesomeIcon icon={faUserAlt} />
              </Link>
            </li>
            <li className="main-navbar__item">
              <Link>
                <FontAwesomeIcon icon={faGlobe} />
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
        <ul className="mobile-nav__items">
          <li className="mobile-nav__item" onClick={handleClick}>
            <Link to="/add-order">Sifariş Yerləşdir</Link>
          </li>
          <li className="mobile-nav__item" onClick={handleClick}>
            <Link to="/service-orders">Xidmət Sifarişləri</Link>
          </li>
          <li className="mobile-nav__item" onClick={handleClick}>
            <Link>Məhsul Sifarişləri</Link>
          </li>
          <li className="mobile-nav__item" onClick={handleClick}>
            <Link>Şirkətlər</Link>
          </li>
          <li className="mobile-nav__item" onClick={handleClick}>
            <Link>Mağaza</Link>
          </li>
          <li className="mobile-nav__item" onClick={handleClick}>
            <Link>Xəbərlər</Link>
          </li>
          <li className="mobile-nav__item" onClick={handleClick}>
            <Link>Təlimat</Link>
          </li>
          <li className="mobile-nav__item" onClick={handleClick}>
            <Link>Ödənişli Xidmətlər</Link>
          </li>
        </ul>
        <div className="close-btn" onClick={handleClose}>
          <FontAwesomeIcon icon={faCaretSquareLeft} />
        </div>
      </nav>
    </>
  );
};

export default Header;
