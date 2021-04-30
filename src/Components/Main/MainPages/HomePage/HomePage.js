import React from 'react';
import './HomePage.scss';
import HomeCarousel from './HeaderCarousel';
import ScrollableList from './ScrollableList';

const HomePage = () => {
  return (
    <>
      <HomeCarousel />
      <div className="home-container">
        <div className="home-container__list">
          <h1 className="list-title">Ən son tenderlərrr</h1>
          <ScrollableList />
        </div>

        <div className="home-container__list">
          <h1 className="list-title">Ən son məhsullar</h1>
          <ScrollableList />
        </div>
      </div>
    </>
  );
};

export default HomePage;
