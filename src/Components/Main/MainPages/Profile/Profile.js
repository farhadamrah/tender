import React from 'react';
import './Profile.scss';
import UploadProfile from './Upload';
import { Form, Input, Button, Select } from 'antd';
import { FormInstance } from 'antd/lib/form';

const Profile = () => {
  const { Option } = Select;

  return (
    <>
      <div className='profile-container'>
        <div className='personal-information'>
          <h1 className='personal-information__title'>Şəxsi məlumat</h1>
          {/* <UploadProfile /> */}
          <Form>
            <Form.Item name='note' label='Note' rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item
              name='təcrübə'
              label='İş təcrübəsi'
              rules={[{ required: true }]}
            >
              <Select
                placeholder='Select a option and change input text above'
                // onChange={this.onGenderChange}
                allowClear
              >
                <Option value='male'>male</Option>
                <Option value='female'>female</Option>
                <Option value='other'>other</Option>
              </Select>
            </Form.Item>
            <Form.Item
              noStyle
              // shouldUpdate={(prevValues, currentValues) =>
              //   prevValues.gender !== currentValues.gender
              // }
            >
              {({ getFieldValue }) =>
                getFieldValue('gender') === 'other' ? (
                  <Form.Item
                    name='customizeGender'
                    label='Customize Gender'
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                ) : null
              }
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit'>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Profile;
