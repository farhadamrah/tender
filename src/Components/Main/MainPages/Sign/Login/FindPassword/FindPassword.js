import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import './FindPassword.scss';

const FindPassword = () => {
  return (
    <div className="container">
      <h1>E-poçt və ya login</h1>
      <Input placeholder="E-poçtunuzu və ya logini daxil edin" />
      <Form.Item>
        <Link>
          <Button type="primary" className="login-form-button">
            Şifrəni bərpa edin
          </Button>
        </Link>
      </Form.Item>
    </div>
  );
};

export default FindPassword;
