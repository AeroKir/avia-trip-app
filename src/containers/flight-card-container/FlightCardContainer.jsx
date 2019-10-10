import React from 'react';
import { connect } from 'react-redux';
import ListGroup from '../../components/list-group/ListGroup';
import ListGroupItem from '../../components/list-group/ListGroupItem';
import FlightCard from '../../components/flight-card/FlightCard';
import TICKETS from '../../data/tickets-array';

class FlightCardContainer extends React.Component {
  render() {
    const { currency } = this.props;

    return (
      <div>
        {TICKETS.map(item => (
          <FlightCard
            price={item.price}
            currencySymbol={currency.map(
              i => i.checked && i.currencyUnicodeSymbol
            )}
            origin={item.origin}
            originName={item.origin_name}
            departureTime={item.departure_time}
            departureDate={item.departure_date}
            stops={item.stops}
            arrivalTime={item.arrival_time}
            arrivalDate={item.arrival_date}
            destination={item.destination}
            destinationName={item.destination_name}
          />
        ))}
      </div>
    );
  }
}

function mapStateToProps(store) {
  console.log(store);
  return {
    currency: store.currency.currency,
    flightSearchConditions: store.flightSearchConditions.flightSearchConditions,
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     chooseCurrency: bindActionCreators(chooseCurrency, dispatch),
//   };
// }

export default connect(mapStateToProps, null)(FlightCardContainer);
