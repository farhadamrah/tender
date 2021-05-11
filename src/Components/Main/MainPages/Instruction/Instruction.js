import React from 'react';
import './Instruction.scss';
import { Collapse } from 'antd';

const Instruction = () => {
  const { Panel } = Collapse;
  const header1 =
    'TenderWorld platformasında əsas ayarlarınızı redaktə etmək üçün bu video təlimatdan istifadə edin.';
  const header2 =
    'TenderWorld platformasında portfolionuza yeni işlər əlavə etmək üçün bu video təlimatdan istifadə edin.';
  const header3 =
    'TenderWorld platformasında mağazaya mal əlavə etmək üçün bu video təlimatdan istifadə edin.';

  return (
    <>
      <div className='instruction-container'>
        <h1 className='instruction-title'>Təlimat</h1>
        <div className='instruction-list'>
          <Collapse accordion>
            <Panel header={header1} key='1'>
              <p>{'video'}</p>
            </Panel>
            <Panel header={header2} key='2'>
              <p>{'video'}</p>
            </Panel>
            <Panel header={header3} key='3'>
              <p>{'video'}</p>
            </Panel>
          </Collapse>
        </div>
      </div>
    </>
  );
};

export default Instruction;
