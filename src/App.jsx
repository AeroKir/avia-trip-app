import React from 'react';
import logo from './logo.svg';
import Button from './components/button/Button';
import ButtonGroup from './components/button-group/ButtonGroup';
import Input from './components/input/Input';
import ListGroup from './components/list-group/ListGroup';
import ListGroupItem from './components/list-group/ListGroupItem';
import Icon from './components/icon/Icon';
import FlightCard from './components/flight-card/FlightCard';
import Aside from './layout/aside/Aside';
import Main from './layout/main/Main';
import InputContainer from './containers/InputContainer';
import CheckboxContainer from './containers/checkbox-container/CheckboxContainer';
import RadioButtonContainer from './containers/radiobutton-container/RadioButtonContainer';
import RadioButton from './components/radio-button/RadioButton';
import RadioButtonGroup from './components/radio-button-group/RadioButtonGroup';
import FlightCardContainer from './containers/flight-card-container/FlightCardContainer';
import showFlights from './reducers/showFlights';
import store from './store/store';

import './App.css';

import iconLogo from './icons/globe.svg';
import airlineTurkishLogo from './icons/turkish-airlines-logo-v1.svg';
import airlineLufthansaLogo from './icons/lufthansa-logo.svg';
import airlineElAlLogo from './icons/Logo_of_El_Al_Israel_Airlines.svg';
import airlineAirFranceLogo from './icons/Air_France_Logo.svg';
import airlineRyanairLogo from './icons/Ryanair.svg';

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
            <RadioButtonContainer />
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
