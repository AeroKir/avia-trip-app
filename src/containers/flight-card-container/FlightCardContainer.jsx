import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ListGroup from '../../components/list-group/ListGroup';
import ListGroupItem from '../../components/list-group/ListGroupItem';
import FlightCard from '../../components/flight-card/FlightCard';
import Icon from '../../components/icon/Icon';
import { requestFlightsMock, receiveAirlineLogo, fetchAirlineLogo } from '../../actions/requestFlights';
import { fetchUSDSaleRate, fetchEURSaleRate, convertUAHToUSD } from '../../actions/convertCurrency';
import chooseCurrency from '../../actions/chooseCurrency';

class FlightCardContainer extends React.Component {
  // componentDidMount() {
  //   const { fetchData, convertPriceToUSD, convertPriceToEUR } = this.props;
  //   fetchData();
  //   convertPriceToUSD('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11');
  //   convertPriceToEUR('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11');
  // }

  componentDidUpdate(prevProps) {
    const { flightVariants } = this.props;
    if (prevProps.flightVariants !== flightVariants) {
      flightVariants.map(
        (i) => {
          console.log(i.price / 25);
          return i.price;
        },
      );
    }
  }

  render() {
    const {
      currency, flightVariants,
    } = this.props;

    const airlineLogoUrl = 'https://daisycon.io/images/airline/';
    const airlineLogoWidth = '300';
    const airlineLogoHeight = '150';
    const airlineLogoBgColor = 'ffffff';

    return (
      <div>
        {flightVariants.map(item => (
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
    chooseCurrency: bindActionCreators(chooseCurrency, dispatch),
    fetchData: () => dispatch(requestFlightsMock()),
    // convertPriceToUSD: url => dispatch(fetchUSDSaleRate(url)),
    // convertPriceToEUR: url => dispatch(fetchEURSaleRate(url)),
    // convertUAHToUSD: price => dispatch(convertUAHToUSD(price)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightCardContainer);
