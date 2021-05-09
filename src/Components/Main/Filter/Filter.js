import React, { useState } from 'react';
import DropDown from './DropDown/DropDown';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Filter.scss';

const Filter = () => {
  const [clickFilter, setClickFilter] = useState(false);

  const handleFilter = () => {
    setClickFilter(!clickFilter);
  };
  return (
    <>
      <section className='filter-section'>
        <div className='filter-section--header' onClick={handleFilter}>
          <span className='header__title'>{'Filter'}</span>
          <div className='header__icon'>
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
