import React from 'react';
import CurrencyBlockContainer from '../../containers/currency-block-container/CurrencyBlockContainer';
import FlightStopsFilterContainer from '../../containers/filters-container/FlightStopsFilterContainer';

import './Aside.css';

function Aside() {
  return (
    <aside className="layout-aside">
      <fieldset className="currency-select-field">
        <legend>Валюта</legend>
        <CurrencyBlockContainer />
      </fieldset>
      <fieldset className="transfer-select-field check-transfer-list">
        <legend className="transfer-filter-legend">Количество пересадок</legend>
        <FlightStopsFilterContainer />
      </fieldset>
    </aside>
  );
}

export default Aside;
