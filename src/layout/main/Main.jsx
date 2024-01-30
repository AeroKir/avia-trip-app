import React from 'react';
import FlightSortFilterContainer from '../../containers/filters-container/FlightSortFilterContainer';
import FlightCardContainer from '../../containers/flight-card-container/FlightCardContainer';

import './Main.css';

function Main() {
  return (
    <main className="layout-main">
      {/* <FlightSortFilterContainer /> */}
      <FlightCardContainer />
    </main>
  );
}

export default Main;
