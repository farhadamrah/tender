import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <>
      <div className='App'>
        <Router>
          <Header />
          <Main />
          <Footer />
        </Router>
      </div>
    </>
  );
};

export default App;
