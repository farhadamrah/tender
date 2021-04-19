import React, { useState } from 'react';
import DropDown from './DropDown/DropDown';

import './Filter.scss';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Filter = () => {
  const [clickFilter, setClickFilter] = useState(false);

  const handleFilter = () => {
    setClickFilter(!clickFilter);
  };
  return (
    <>
      <section className="filter-section">
        <div className="filter-section--header" onClick={handleFilter}>
          <p className="header__title">{'Filtr'}</p>
          <div className="header__icon">
            <FontAwesomeIcon icon={faFilter} />
          </div>
        </div>
        <div
          className={
            !clickFilter
              ? 'filter-section__filters'
              : 'filter-section__filters active'
          }
        >
          <DropDown />
          <DropDown />
          <DropDown />
          <DropDown />
        </div>
      </section>
    </>
  );
};

export default Filter;
