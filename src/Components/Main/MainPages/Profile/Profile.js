import React, { useState } from 'react';
import './Profile.scss';
import UploadProfile from './Upload';
import { Form, Input, Button, Select, Radio, Space } from 'antd';
import { FormInstance } from 'antd/lib/form';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const Profile = () => {
  const [radioValue, setRadioValue] = useState();
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setRadioValue(e.target.value);
  };

  const { Option } = Select;
  const { TextArea } = Input;

  return (
    <>
      <div className='profile-container'>
        <Form>
          <div className='information-container'>
            <h1 className='personal-information__title'>Şəxsi məlumat</h1>
            {/* <UploadProfile /> */}
            <Form.Item name='login' label='Login' rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name='ad' label='Ad' rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name='soyad' label='Soyad' rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name='cins' label='Cinsi' rules={[{ required: true }]}>
              <Radio.Group onChange={onChange} value={radioValue}>
                <Radio value={1}>Kişi</Radio>
                <Radio value={2}>Qadın</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name='təcrübə'
              label='İş təcrübəsi'
              rules={[{ required: true }]}
            >
              <Select
                placeholder='İş təcrübəsi seçin'
                // onChange={this.onGenderChange}
                allowClear
              >
                <Option value='male'>1 ildən az</Option>
                <Option value='female'>1-3 il</Option>
                <Option value='other'>3-5 il</Option>
                <Option value='other'>5-10 il</Option>
                <Option value='other'>10 ildən artıq</Option>
              </Select>
            </Form.Item>

            <Form.Item>
              <Button type='primary' htmlType='submit'>
                Submit
              </Button>
            </Form.Item>
          </div>

          <div className='information-container'>
            <h1 className='skills-information__title'>
              İxtisaslar və bacarıqlar
            </h1>
            <Form.Item name='əsas' label='Əsas' rules={[{ required: true }]}>
              <Select
                placeholder='Seçmək'
                // onChange={this.onGenderChange}
                allowClear
              >
                <Option value='male'>1 ildən az</Option>
                <Option value='female'>1-3 il</Option>
                <Option value='other'>3-5 il</Option>
                <Option value='other'>5-10 il</Option>
                <Option value='other'>10 ildən artıq</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name='bacarıqlar'
              label='Bacarıqlar'
              rules={[{ required: true }]}
            >
              <TextArea autoSize />
            </Form.Item>
          </div>

          <div className='information-container'>
            <h1 className='information-container__title'>Əlaqə</h1>
            <p>
              Öz İD-nizi, istifadəçi adınızı və ya sosial şəbəkədəki profilinizi
              göstərin.
            </p>
            <Form.Item rules={[{ required: true, message: 'Missing input' }]}>
              <Select
                placeholder='Seçmək'
                // onChange={this.onGenderChange}
                allowClear
              >
                <Option value='male'>Telefon</Option>
                <Option value='female'>E-mail</Option>
                <Option value='other'>Veb sayt</Option>
              </Select>
            </Form.Item>
            <Form.Item
              rules={[{ required: true, message: 'Missing last name' }]}
            >
              <Input />
            </Form.Item>

            <Form.List name='contact'>
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, fieldKey, ...restField }) => (
                    <Space key={key} align='baseline'>
                      <Form.Item
                        {...restField}
                        name={[name, 'first']}
                        fieldKey={[fieldKey, 'first']}
                        rules={[{ required: true, message: 'Missing input' }]}
                      >
                        <Select
                          placeholder='Seçmək'
                          // onChange={this.onGenderChange}
                          allowClear
                        >
                          <Option value='male'>Telefon</Option>
                          <Option value='female'>E-mail</Option>
                          <Option value='other'>Veb sayt</Option>
                        </Select>
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, 'last']}
                        fieldKey={[fieldKey, 'last']}
                        rules={[
                          { required: true, message: 'Missing last name' },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                      <MinusCircleOutlined onClick={() => remove(name)} />
                    </Space>
                  ))}
                  <Form.Item>
                    <Button
                      type='dashed'
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}
                    >
                      Add field
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
          </div>
        </Form>

        <Form.Item>
          <Button type='primary'>Yadda saxla</Button>
          <Button type='primary'>Ləgv et</Button>
        </Form.Item>
      </div>
    </>
  );
};

export default Profile;
