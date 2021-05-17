import React, { useState } from 'react';
import DropDown from './DropDown/DropDown';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Filter.scss';
import { Collapse } from 'antd';

const Filter = () => {
  const [clickFilter, setClickFilter] = useState(false);

  const { Panel } = Collapse;

  // const handleFilter = () => {
  //   setClickFilter(!clickFilter);
  // };
  return (
    <>
      {/* <section className='filter-section'> */}
      {/* <div className='filter-section--header' onClick={handleFilter}>
          <span className='header__title'>{'Filter'}</span>
          <div className='header__icon'>
            <FontAwesomeIcon icon={faFilter} />
          </div>
        </div> */}

      <Collapse accordion>
        <FontAwesomeIcon icon={faFilter} />
        <Panel header={`Filter`} key='1'>
          <DropDown />
          <DropDown />
          <DropDown />
          <DropDown />
        </Panel>
      </Collapse>

      {/* <div
          className={
            !clickFilter
              ? 'filter-section__filters'
              : 'filter-section__filters active'
          }
        >
          
        </div> */}
      {/* </section> */}
    </>
  );
};

export default Filter;
