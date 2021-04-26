import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

import { Form, Input, Button, Checkbox } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';

const Login = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <>
      <div className="login-container">
        <h1 className="login-title">Welcome to Tender World</h1>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
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
            label="Şifrə"
            name="password"
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

          <div className="login__check">
            <Form.Item>
              <Form.Item name="remember" valuePropName="" noStyle>
                <Checkbox>Yadda saxla</Checkbox>
              </Form.Item>
            </Form.Item>

            <Form.Item>
              <Link to="/find-password">Şifrəni unutdun?</Link>
            </Form.Item>
          </div>

          <div className="login__buttons">
            <Form.Item>
              <Button type="primary" className="login-form-button">
                Daxil ol
              </Button>
            </Form.Item>
            <div className="horizontal-line" />
            <p>Hesabınız yoxdur?</p>
            <Form.Item>
              <Link to="/register">
                <Button type="primary" className="login-form-button">
                  Qeydiyyat
                </Button>
              </Link>
            </Form.Item>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;

/**
  <div className="flex items-center justify-center bg-gray-50  pb-8 px-4 sm:px-6 lg:px-8 mt-24 login-container">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-5 text-center text-3xl font-extrabold text-gray-900 form__title">
              Welcome to Tender World
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="mb-4">
                <label
                  htmlFor="email-address"
                  className="form__label font-medium"
                >
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-1.5"
                  //   placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="form__label font-medium">
                  Şifrə
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-1.5"
                  //   placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Yadda saxla
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Şifrəni unutdun?
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-6"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Daxil ol
              </button>

              <div className="horizontal-line" />

              <p className="font-normal text-indigo-600 hover:text-indigo-500 mb-2">
                Hesabınız yoxdur?
              </p>

              <Link to="/register">
                <button
                  type="submit"
                  className="group relative w-48 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Qeydiyyat
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
 */
