import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from '../Footer/Footer';

import './Main.scss';
import '../Footer/Footer.scss';

import ServiceOrders from './MainPages/ServiceOrders/ServiceOrders';
import Login from './MainPages/Sign/Login/Login';
import Register from './MainPages/Sign/Register/Register';
import Rules from './MainPages/Sign/Register/RegisterRules/Rules';

const Main = () => {
  return (
    <>
      <main className="main">
        <section className="main-container">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/rules" component={Rules} />
            <Route path="/" component={ServiceOrders} />
          </Switch>
        </section>
      </main>
    </>
  );
};

export default Main;
