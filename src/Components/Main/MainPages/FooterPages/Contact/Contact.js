import React from 'react';
import './Contact.scss';
import Form from 'antd/lib/form/Form';
import { Form, Input, Button } from 'antd';

const Contact = () => {
  const message = 'Zəhmət olmazsa, məlumatı daxil edin';

  return (
    <>
      <div className='contact container'>
        <h1 className='contact-title'>
          Təklif və tənqidlərinizi bizə bildirə bilərsiniz
        </h1>
        <Form
          name='contact'
          initialValues={{
            remember: true,
          }}
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

export default Contact;
