import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ListGroup from '../../components/list-group/ListGroup';
import ListGroupItem from '../../components/list-group/ListGroupItem';
import FlightCard from '../../components/flight-card/FlightCard';
import Icon from '../../components/icon/Icon';
import { requestFlightsMock, receiveAirlineLogo, fetchAirlineLogo } from '../../actions/requestFlights';

class FlightCardContainer extends React.Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    const { currency, flightVariants } = this.props;

    return (
      <div>
        {flightVariants.map(item => (
          <FlightCard
            src={`https://daisycon.io/images/airline/?width=300&height=150&color=ffffff&iata=${item.carrier}`}
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
    flightVariants: store.flightVariants.flightVariants,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch(requestFlightsMock()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightCardContainer);
