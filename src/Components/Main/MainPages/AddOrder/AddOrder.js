import React, { useState } from 'react';
import './AddOrder.scss';
import { ixtisasData, kateqoriyaData } from './Data';
// import kateqoriyaData from './Data';

import { Form, Input, Button, Select, Radio } from 'antd';
import 'antd/dist/antd.css';
import ImgUpload from './Upload';

const AddOrder = () => {
  const value1 = 'Xidmət';
  const value2 = 'Məhsul';
  const messageText = 'Zəhmət olmazsa məlumatı daxil edin';

  const [name, setName] = useState(value1);
  const { Option } = Select;
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  return (
    <div className='container'>
      <h1 className='container__title'>SİFARİŞ YERLƏŞDİRİN</h1>
      <Form form={form} name='control-hooks' onFinish={onFinish}>
        <h2 className='change-btns__title'>Sifariş növü</h2>
        <Radio.Group
          onChange={onChangeName}
          value={name}
          optionType='button'
          className='change-buttons'
        >
          <Radio
            value={value1}
            className={name === value1 ? 'radio-btn selected-btn' : 'radio-btn'}
          >
            {value1}
          </Radio>
          <Radio
            value={value2}
            className={name !== value1 ? 'radio-btn selected-btn' : 'radio-btn'}
          >
            {value2}
          </Radio>
        </Radio.Group>

        <Form.Item
          name='başlıq'
          label='Başlıq'
          rules={[{ required: true, message: [messageText] }]}
        >
          <Input placeholder='Nə etmək lazımdır?' />
        </Form.Item>

        <Form.Item
          name='təsvir'
          label='Təsvir'
          rules={[{ required: true, message: [messageText] }]}
        >
          <Input.TextArea placeholder='Sifarişi dəqiq təsvir edin: icra müddətləri, iş şərtləri və s.' />
        </Form.Item>

        <Form.Item
          name='təkliflərin qəbulu'
          label='Təkliflərin qəbulu'
          rules={[{ required: true, message: [messageText] }]}
        >
          <Select
            placeholder='Təkliflərin hansi muüddətədək qəbul ediləcəyini seçin'
            // onChange={handleTimeChange}
          >
            <Option value={3}>3 gün</Option>
            <Option value={7}>1 həftə</Option>
            <Option value={14}>2 həftə</Option>
            <Option value={30}>1 ay</Option>
            <Option value={'müddətsiz'}>Müddətsiz</Option>
          </Select>
          {/* <span>{currentDate}</span> */}
        </Form.Item>

        <div className={name != value1 ? 'hide' : ''}>
          <Form.Item
            name='ixtisas'
            label='İxtisas'
            rules={[{ required: true, message: [messageText] }]}
          >
            <Select
              placeholder='İxtisas seçin'
              // onChange={onGenderChange}
            >
              {ixtisasData.map((item) => (
                <Option value={item.option}>{item.option}</Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            noStyle
            shouldUpdate={(prevValues, currentValues) =>
              prevValues.ixtisas !== currentValues.ixtisas
            }
          >
            {({ getFieldValue }) =>
              getFieldValue('ixtisas') != null ? (
                <Form.Item
                  name='ixtisas-alt'
                  label=''
                  rules={[{ required: true, message: [messageText] }]}
                >
                  <Select
                    placeholder='İxtisas seçin'
                    // onChange={onGenderChange}
                  >
                    {ixtisasData.map((item) => (
                      <Option value={item.option}>{item.option}</Option>
                    ))}
                  </Select>
                </Form.Item>
              ) : null
            }
          </Form.Item>
        </div>

        <div className={name == value1 ? 'hide' : ''}>
          <Form.Item
            name='Məhsul'
            label='Kateqoriya'
            rules={[{ required: true, message: [messageText] }]}
          >
            <Select
              placeholder='Kateqoriya seçin'
              // onChange={onGenderChange}
            >
              {kateqoriyaData.map((item) => (
                <Option value={item.option}>{item.option}</Option>
              ))}
            </Select>
          </Form.Item>
        </div>

        <div className={name != value1 ? 'hide' : ''}>
          <Form.Item
            name='bacarıqlar'
            label='Bacarıqlar'
            rules={[{ required: true, message: [messageText] }]}
          >
            <Input placeholder='Bacarıq adını yazın' />
          </Form.Item>
        </div>

        <Form.Item
          name='region'
          label='Region'
          rules={[{ required: true, message: [messageText] }]}
        >
          <Input placeholder='Şəhər' />
        </Form.Item>

        <Form.Item name='şəkil' label='Şəkil'>
          <ImgUpload />
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Dərc et
          </Button>

          {/* <Button htmlType="button" onClick={onReset}>
            Reset
          </Button> */}

          {/* <Button type="link" htmlType="button" onClick={onFill}>
            Fill form
          </Button> */}
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddOrder;
