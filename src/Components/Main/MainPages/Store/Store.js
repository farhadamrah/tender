import React from 'react';
import SearchBar from '../../SearchBar/SearchBar';
import Filter from '../../Filter/Filter';
import './Store.scss';
import { listData, productData } from './StoreCategoriesData';
import { Select, Rate } from 'antd';

const Store = () => {
  const { Option } = Select;

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <Filter />
      <SearchBar />
      <div className='store-container'>
        <div className='store-container__list'>
          <h1 className='list-header__title'>TenderWorld saytında məhsullar</h1>
          <p>{'672'} məhsul arasından Sizə lazım olanı seçin</p>
          <ul className='category-list'>
            {listData.map((listItem) => (
              <li className='list-item'>
                <span className='item-name'>{listItem.name}</span>
                <span className='item-count'>{listItem.count}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className='filter-container'>
          <p className='product-count'>{`${'671'} mal`}</p>
          <Select placeholder='Sırala' onSelect={handleChange} allowClear>
            <Option value='date_desc'>Tarixə görə</Option>
            <Option value='price_asc'>Əvvəlcə ucuz</Option>
            <Option value='price_desc'>Əvvəlcə bahalı</Option>
            <Option value='rating_asc'>Artan reytinq</Option>
            <Option value='rating_desc'>Azalan reytinq</Option>
          </Select>
        </div>

        <div className='product-boxes'>
          {productData.map((product) => (
            <div className='product-box'>
              <div className='image-container'>
                <img src={product.image} alt='mebel' />
              </div>
              <div className='content'>
                <h1 className='product-title'>{product.title}</h1>
                <p className='product-cost'>{`${product.cost} AZN`}</p>
                <div className='rating'>
                  <Rate defaultValue={4} />
                </div>
                <p className='product-comments'>{`${product.comment} rəy`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Store;
