import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.scss';
import 'antd/dist/antd.css';

import { Form, Input, Button, Checkbox, Radio } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';

const Register = () => {
  const [value, setValue] = useState();
  const [name, setName] = useState('');
  const [button, setButton] = useState(false);

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const onChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  const onChangeBtn = (e) => {
    console.log(e.target.value);
    setButton(e.target.value);
    setButton(!button);
    console.log(button);
  };

  return (
    <>
      <div className="form">
        <Radio.Group
          onChange={onChangeBtn}
          value={value}
          optionType="button"
          className="change-buttons"
        >
          <Radio
            value={'şəxs'}
            className={button ? 'radio-btn selected-btn' : 'radio-btn'}
          >
            Fiziki şəxs
          </Radio>
          <Radio
            value={'şirkət'}
            className={!button ? 'radio-btn selected-btn' : 'radio-btn'}
          >
            Şirkət
          </Radio>
        </Radio.Group>

        <Radio.Group
          onChange={onChange}
          value={value}
          className="radio-container"
        >
          <Radio value={1} className="radio">
            İcraçı (Xidmət və ya məhsul təklif edən şəxs və ya şirkət)
          </Radio>
          <Radio value={2} className="radio">
            Sifarişçi (Xidmət və ya məhsul axtaran şəxs və ya şirkət)
          </Radio>
          <Radio value={3} className="radio">
            Satıcı (məhsul satan şəxs)
          </Radio>
        </Radio.Group>

        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            label={button ? 'Adınız' : 'Şirkətinizin adı'}
            name="username"
            rules={[
              {
                required: true,
                message: 'Zəhmət olmazsa adınızı daxil edin!',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder={button ? 'Adınız' : 'Şirkətinizin adı'}
            />
          </Form.Item>

          <Form.Item
            label="E-poçtunuz"
            name="email"
            rules={[
              {
                required: true,
                message: 'Zəhmət olmazsa e-poçtunuzu daxil edin!',
              },
            ]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="E-poçtunuz"
            />
          </Form.Item>

          <Form.Item
            label="Telefon nömrəniz"
            name="phone"
            rules={[
              {
                required: true,
                message: 'Zəhmət olmazsa telefon nömrənizi daxil edin!',
              },
            ]}
          >
            <Input
              addonBefore="+994"
              placeholder="Telefon nömrənizi daxil edin"
            />
          </Form.Item>

          <Form.Item
            label="Şifrə"
            name="password1"
            rules={[
              {
                required: true,
                message: 'Zəhmət olmazsa şifrənizi daxil edin!',
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Şifrə"
            />
          </Form.Item>
          <Form.Item
            label="Şifrə"
            name="password2"
            rules={[
              {
                required: true,
                message: 'Zəhmət olmazsa şifrənizi daxil edin!',
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Təkrar şifrə"
            />
          </Form.Item>

          <Form.Item>
            <Form.Item name="remember" valuePropName="" noStyle>
              <Checkbox>
                <Link to="/rules">Qaydalarla</Link> tanış oldum və qəbul edirəm
              </Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Qeydiyyat
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Register;
