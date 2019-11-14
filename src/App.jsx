import React from 'react';
import Icon from './components/icon/Icon';
import Aside from './layout/aside/Aside';
import Main from './layout/main/Main';
import FlightStopsFilterContainer from './containers/filters-container/FlightStopsFilterContainer';
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
            <FlightStopsFilterContainer />
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
