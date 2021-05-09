import React from 'react';
import './SearchBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  return (
    <>
      <section className='search-bar'>
        <div className='input-container'>
          <input
            type='text'
            className='search-bar__input'
            placeholder={'Tender axtar'}
          />
          <FontAwesomeIcon icon={faSearch} className='search-icon' />
        </div>
        <div className='horizontal-line' />
      </section>
    </>
  );
};

export default SearchBar;
