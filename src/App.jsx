import React from 'react';
import logo from './logo.svg';
import Icon from './components/icon/Icon';
import FlightCard from './components/flight-card/FlightCard';
import Aside from './layout/aside/Aside';
import Main from './layout/main/Main';
import CheckboxContainer from './containers/checkbox-container/CheckboxContainer';
import CurrencyBlockContainer from './containers/currency-block-container/CurrencyBlockContainer';
import FlightCardContainer from './containers/flight-card-container/FlightCardContainer';

import './App.css';

import iconLogo from './icons/globe.svg';

function App() {
  return (
    <div className="app-wrapper">
      <Icon
        className="app-logo"
        src={iconLogo}
        alt="App logo icon"
      />
      <div className="row">
        <Aside>
          <fieldset className="currency-select-field">
            <legend>Валюта</legend>
            <CurrencyBlockContainer />
          </fieldset>
          <fieldset className="transfer-select-field check-transfer-list">
            <legend>Количество пересадок</legend>
            <CheckboxContainer />
          </fieldset>
        </Aside>
        <Main>
          <FlightCardContainer />
        </Main>
      </div>
    </div>
  );
}

export default App;
