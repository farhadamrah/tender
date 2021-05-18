import Form from 'antd/lib/form/Form';
import React from 'react';
import './ContactUs.scss';
import { Input, Button } from 'antd';

const ContactUs = () => {
  const message = 'Zəhmət olmazsa, məlumatı daxil edin';

  return (
    <>
      <div className='contact container'>
        <h1 className='contact-title'>
          Təklif və tənqidlərinizi bizə bildirə bilərsiniz
        </h1>
        <Form
          name='Əlaqə'
          //   initialValues={{
          //     remember: true,
          //   }}
          //   onFinish={onFinish}
          //   onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name='username'
            rules={[
              {
                required: true,
                message,
              },
            ]}
          >
            <Input placeholder='Ad,Soyad' />
          </Form.Item>
          <Form.Item
            label=''
            name='email'
            rules={[
              {
                required: true,
                message,
              },
            ]}
          >
            <Input placeholder='E-mail' />
          </Form.Item>
          <Form.Item
            name='message'
            rules={[
              {
                required: true,
                message,
              },
            ]}
          >
            <Input.TextArea placeholder='Mesajınız' />
          </Form.Item>

          <Form.Item>
            <Button type='primary' htmlType='submit' className='send-btn'>
              Göndər
            </Button>
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit' className='cancel-btn'>
              Ləğv et
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default ContactUs;
