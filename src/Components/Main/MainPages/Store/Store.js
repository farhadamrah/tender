import React from 'react';
import {
  Link,
  Switch,
  Route,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import SearchBar from '../../SearchBar/SearchBar';
import Filter from '../../Filter/Filter';
import './Store.scss';
// import { listData, productData } from './StoreCategoriesData';
import { Select, Rate } from 'antd';
// import 'antd/dist/antd.css';
import productData from './StoreCategoriesData';

const Store = () => {
  // const { Option } = Select;
  const { url, path } = useRouteMatch();

  // const handleChange = (value) => {
  //   console.log(`selected ${value}`);
  // };

  const StoreItem = ({ data }) => {
    const { productId } = useParams();
    const storeData =
      data || productData[productData.findIndex((i) => i.id === +productId)];
    return data ? (
      <>
        {/* <div className='store-container'> */}
        {/* <Filter />
        <SearchBar />
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
        </div> */}
        {/* <div className='itemsFilter-container'>
          <p className='product-count'>{`${'671'} mal`}</p>
          <Select placeholder='Sırala' onSelect={handleChange} allowClear>
            <Option value='date_desc'>Tarixə görə</Option>
            <Option value='price_asc'>Əvvəlcə ucuz</Option>
            <Option value='price_desc'>Əvvəlcə bahalı</Option>
            <Option value='rating_asc'>Artan reytinq</Option>
            <Option value='rating_desc'>Azalan reytinq</Option>
          </Select>
        </div> */}
        {/* <div className='product-boxes'> */}
        {/* {productData.map((product) => ( */}
        <Link to={`${url}/${productData.id}`}>
          <div className='product-box' key={storeData.id}>
            <div className='image-container'>
              <img src={storeData.image} alt='mebel' />
            </div>
            <div className='content'>
              <div className='content__label'>
                <span className='product-title'>{storeData.title}</span>
                <span className='product-cost'>{`${storeData.cost} AZN`}</span>
              </div>
              <div className='rating'>
                <Rate defaultValue={storeData.rating} />
              </div>
              <span className='product-comments'>{`${storeData.comment} rəy`}</span>
              <span className='product-location'>{storeData.location}</span>
            </div>
          </div>
        </Link>
        // {/* </div> */}
        {/* </div> */}
      </>
    ) : (
      <>
        <div className='product-box' key={storeData.id}>
          <div className='image-container'>
            <img src={storeData.image} alt='mebel' />
          </div>
          <div className='content'>
            <div className='content__label'>
              <span className='product-title'>{storeData.title}</span>
              <span className='product-cost'>{`${storeData.cost} AZN`}</span>
            </div>
            <div className='rating'>
              <Rate defaultValue={storeData.rating} />
            </div>
            <span className='product-comments'>{`${storeData.comment} rəy`}</span>
            <span className='product-location'>{storeData.location}</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className='store-container'>
        <Switch>
          <Route path={`${path}/:productId`} exact>
            <StoreItem />
          </Route>
          <Route path={path}>
            <Filter />
            <SearchBar />
            {productData.map((data) => (
              <Store data={data} />
            ))}
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default Store;
