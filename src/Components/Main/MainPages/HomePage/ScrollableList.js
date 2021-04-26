import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { List } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import TendersData from '../ServiceOrders/ServiceOrdersData';
import './HomePage.scss';

const ScrollableList = () => {
  return (
    <div className="list-container">
      <InfiniteScroll>
        <List
          dataSource={TendersData}
          renderItem={(item) => (
            <List.Item key={item.id}>
              <List.Item.Meta
                avatar={<FontAwesomeIcon icon={faUserCircle} />}
                title={item.title}
                description={item.header}
              />
              <div>{item.content}</div>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};

export default ScrollableList;
