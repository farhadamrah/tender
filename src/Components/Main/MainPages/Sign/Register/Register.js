import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.scss';
import 'antd/dist/antd.css';

import { Form, Input, Button, Checkbox, Radio } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';

const Register = () => {
  const value1 = 'Adınız';
  const value2 = 'Şirkətinizin adı';

  const [value, setValue] = useState();
  const [name, setName] = useState(value1);

  // const [formData, setFormData] = useState({
  //   formName: 'test',
  //   email: '',
  //   number: '',
  // });
  // const { formName, email, number } = formData;

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const onChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  console.log(name);

  return (
    <>
      <div className="form">
        <Radio.Group
          onChange={onChangeName}
          // value={name}
          optionType="button"
          className="change-buttons"
        >
          <Radio
            value={value1}
            className={name === value1 ? 'radio-btn selected-btn' : 'radio-btn'}
          >
            Fiziki şəxs
          </Radio>
          <Radio
            value={value2}
            className={name !== value1 ? 'radio-btn selected-btn' : 'radio-btn'}
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
            label={name}
            name="username"
            rules={[
              {
                required: true,
                message:
                  name === value1
                    ? 'Zəhmət olmazsa adınızı daxil edin'
                    : 'Zəhmət olmazsa şirkətinizin adını daxil edin',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder={
                name === value1
                  ? 'Adınızı daxil edin'
                  : 'Şirkətinizin adını daxil edin'
              }
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
              placeholder="example@gmail.com"
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
