import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListGroup from '../../components/list-group/ListGroup';
import ListGroupItem from '../../components/list-group/ListGroupItem';
import FlightCard from '../../components/flight-card/FlightCard';
import InfoCard from '../../components/info-card/InfoCard';
import Icon from '../../components/icon/Icon';
import { requestFlightsMock } from '../../actions/requestFlights';

import infoIcon from '../../icons/info-icon.svg';

class FlightCardContainer extends React.Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    const {
      currency, flightSearchConditions, flightVariants,
    } = this.props;

    const airlineLogoUrl = 'https://daisycon.io/images/airline/';
    const airlineLogoWidth = '300';
    const airlineLogoHeight = '150';
    const airlineLogoBgColor = 'ffffff';

    const ticketsList = flightVariants.filter(ticket => flightSearchConditions.some(item => ticket.stops === item.stops && item.checked));

    const notCheckedFlights = flightSearchConditions.filter(item => !item.checked);

    if (notCheckedFlights.length === flightSearchConditions.length || flightVariants.length === 0) {
      return (
        <InfoCard
          src={infoIcon}
          flightsQuantity={flightVariants.length}
        />
      );
    }

    return (
      <ListGroup>
        {ticketsList.map(item => (
          <ListGroupItem>
            <FlightCard
              src={`${airlineLogoUrl}?width=${airlineLogoWidth}&height=${airlineLogoHeight}&color=${airlineLogoBgColor}&iata=${item.carrier}`}
              price={item.price}
              currencySymbol={currency.map(
                i => i.checked && i.currencyUnicodeSymbol,
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
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}

FlightCardContainer.propTypes = {
  currency: PropTypes.arrayOf(PropTypes.object),
  flightSearchConditions: PropTypes.arrayOf(PropTypes.object),
  flightVariants: PropTypes.arrayOf(PropTypes.object),
};

FlightCardContainer.defaultProps = {
  currency: [],
  flightSearchConditions: [],
  flightVariants: [],
};

function mapStateToProps({ currency, flightSearchConditions, flightVariants }) {
  return {
    currency: currency.currency,
    flightSearchConditions: flightSearchConditions.flightSearchConditions,
    flightVariants: flightVariants.flightVariants,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch(requestFlightsMock()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightCardContainer);
