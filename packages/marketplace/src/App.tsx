import './App.scss';

import { Header } from '@udp/components';
import { logger } from '@udp/core';
import React, { useEffect } from 'react';

import { SignUp } from './features/auth';
import logo from './logo.svg';

const App = () => {
  useEffect(() => {
    logger('Testing monorepo!');
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header>
          React, Typescript, Yarn &amp; Lerna Monorepo Boilerplate
        </Header>
      </header>
      <SignUp />
    </div>
  );
};

export default App;
