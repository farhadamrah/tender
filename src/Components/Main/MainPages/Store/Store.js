import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SearchBar from '../../SearchBar/SearchBar';
import Filter from '../../Filter/Filter';
import './Store.scss';
import { Select } from 'antd';
// import 'antd/dist/antd.css';
import { productData, listData } from './StoreCategoriesData';
import Products from './Products/Products';
import FullProduct from './FullProduct/FullProduct';

const Store = () => {
  const { Option } = Select;

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <Switch>
        <Route exact path='/store'>
          <div className='store-container'>
            <Filter />
            <SearchBar />
            <div className='store-container__list'>
              <h1 className='list-header__title'>
                TenderWorld saytında məhsullar
              </h1>
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
            <div className='itemsFilter-container'>
              <p className='product-count'>{`${'671'} mal`}</p>
              <Select placeholder='Sırala' onSelect={handleChange} allowClear>
                <Option value='date_desc'>Tarixə görə</Option>
                <Option value='price_asc'>Əvvəlcə ucuz</Option>
                <Option value='price_desc'>Əvvəlcə bahalı</Option>
                <Option value='rating_asc'>Artan reytinq</Option>
                <Option value='rating_desc'>Azalan reytinq</Option>
              </Select>
            </div>
          </div>
          <Products productData={productData} />
        </Route>
        <Route path='/store/:id'>
          <FullProduct productData={productData} />
        </Route>
      </Switch>
    </>
  );
};

export default Store;
