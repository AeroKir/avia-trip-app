import React from 'react';
import Icon from '../../components/icon/Icon';
import Aside from '../aside/Aside';
import Main from '../main/Main';

import './AppLayout.css';

import iconLogo from '../../icons/globe.svg';

function AppLayout() {
  return (
    <div className="app-wrapper">
      <Icon
        className="app-logo"
        src={iconLogo}
        alt="App logo icon"
      />
      <div className="row">
        <Aside />
        <Main />
      </div>
    </div>
  );
}

export default AppLayout;
