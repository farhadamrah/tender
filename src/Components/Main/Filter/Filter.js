import React from 'react';
import DropDown from './DropDown/DropDown';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Collapse } from 'antd';
import './Filter.scss';

const Filter = () => {
  const { Panel } = Collapse;

  return (
    <>
      <Collapse accordion>
        <FontAwesomeIcon icon={faFilter} />
        <Panel header={`Filter`} key='1'>
          <DropDown />
          <DropDown />
          <DropDown />
          <DropDown />
        </Panel>
      </Collapse>
    </>
  );
};

export default Filter;
