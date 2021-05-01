import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.scss';
import 'antd/dist/antd.css';
import { auth, db } from '../../../../../firebase';
import { Form, Input, Button, Checkbox, Radio } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';

const Register = () => {
  const value1 = 'Adınız';
  const value2 = 'Şirkətinizin adı';

  const [value, setValue] = useState();
  const [name, setName] = useState(value1);
  const [checked, setChecked] = useState(false);

  const [user, setUser] = useState({
    status: name === 'Adınız' ? 0 : 1,
    name: '',
    email: '',
    phone: '',
    password1: '',
    password2: '',
  });

  // const [formData, setFormData] = useState({
  //   formName: 'test',
  //   email: '',
  //   number: '',
  // });
  // const { formName, email, number } = formData;

  const onFinish = (values) => {
    if (checked) {
      if (!user.name && !user.email && !user.password1 && !user.password2) {
        alert('Bütün xanalar daxil edilməyib');
        return;
      }

      if (user.password1 !== user.password2) {
        alert('Şifrələr eyni deyil');
        return;
      }

      if (
        user.name &&
        user.email &&
        user.password1 &&
        user.password2 &&
        user.password1 === user.password2
      ) {
        auth
          .createUserWithEmailAndPassword(user.email, user.password1)
          .then((authUser) => {
            authUser.user
              .updateProfile({
                displayName: user.name,
                photoURL: null,
              })
              .then(() => {
                db.collection('Users')
                  .doc(auth.currentUser.uid)
                  .set({
                    status: user.status,
                    name: authUser.user.providerData[0].displayName,
                    email: authUser.user.providerData[0].email,
                    photoURL: authUser.user.providerData[0].photoURL || null,
                    phoneNumber:
                      authUser.user.providerData[0].phoneNumber || null,
                    providerId: authUser.user.providerData[0].providerId,
                  });
              })
              .catch((err) => alert(err.message));
          })
          .catch((err) => {
            if (
              err.message ===
              'The email address is already in use by another account.'
            ) {
              alert('E-poçt artıq qeydiyyatdan keçib');
            } else if (
              err.message === 'The email address is badly formatted.'
            ) {
              alert('E-poçtun formatı uyğun deyil');
            } else {
              alert(err.message);
            }
          });
      }
    } else {
      alert('Check the checkbox below');
    }
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

  const onChangeCheckBox = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <>
      <div className='form'>
        <Radio.Group
          onChange={onChangeName}
          // value={name}
          optionType='button'
          className='change-buttons'
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
          className='radio-container'
        >
          <Radio value={1} className='radio'>
            İcraçı (Xidmət və ya məhsul təklif edən şəxs və ya şirkət)
          </Radio>
          <Radio value={2} className='radio'>
            Sifarişçi (Xidmət və ya məhsul axtaran şəxs və ya şirkət)
          </Radio>
          <Radio value={3} className='radio'>
            Satıcı (məhsul satan şəxs)
          </Radio>
        </Radio.Group>

        <Form
          name='normal_login'
          className='login-form'
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            label={name}
            name='username'
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
              prefix={<UserOutlined className='site-form-item-icon' />}
              placeholder={
                name === value1
                  ? 'Adınızı daxil edin'
                  : 'Şirkətinizin adını daxil edin'
              }
              value={user.name}
              onChange={(text) => setUser((prev) => ({ ...prev, name: text }))}
            />
          </Form.Item>

          <Form.Item
            label='E-poçtunuz'
            name='email'
            rules={[
              {
                required: true,
                message: 'Zəhmət olmazsa e-poçtunuzu daxil edin!',
              },
            ]}
          >
            <Input
              prefix={<MailOutlined className='site-form-item-icon' />}
              placeholder='example@gmail.com'
              value={user.email}
              onChange={(text) => setUser((prev) => ({ ...prev, email: text }))}
            />
          </Form.Item>

          <Form.Item
            label='Telefon nömrəniz'
            name='phone'
            rules={[
              {
                required: true,
                message: 'Zəhmət olmazsa telefon nömrənizi daxil edin!',
              },
            ]}
          >
            <Input
              addonBefore='+994'
              placeholder='Telefon nömrənizi daxil edin'
              value={user.phone}
              onChange={(text) => setUser((prev) => ({ ...prev, phone: text }))}
            />
          </Form.Item>

          <Form.Item
            label='Şifrə'
            name='password1'
            rules={[
              {
                required: true,
                message: 'Zəhmət olmazsa şifrənizi daxil edin!',
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className='site-form-item-icon' />}
              type='password'
              placeholder='Şifrə'
              value={user.password1}
              onChange={(text) =>
                setUser((prev) => ({ ...prev, password1: text }))
              }
            />
          </Form.Item>
          <Form.Item
            label='Şifrə'
            name='password2'
            rules={[
              {
                required: true,
                message: 'Zəhmət olmazsa şifrənizi daxil edin!',
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className='site-form-item-icon' />}
              type='password'
              placeholder='Təkrar şifrə'
              value={user.password2}
              onChange={(text) =>
                setUser((prev) => ({ ...prev, password2: text }))
              }
            />
          </Form.Item>

          <Form.Item>
            <Form.Item name='remember' valuePropName='' noStyle>
              <Checkbox checked={checked} onChange={onChangeCheckBox}>
                <Link to='/rules'>Qaydalarla</Link> tanış oldum və qəbul edirəm
              </Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              className='login-form-button'
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
