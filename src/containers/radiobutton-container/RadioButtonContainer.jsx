import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ListGroup from '../../components/list-group/ListGroup';
import ListGroupItem from '../../components/list-group/ListGroupItem';
import RadioButton from '../../components/radio-button/RadioButton';
import RadioButtonGroup from '../../components/radio-button-group/RadioButtonGroup';

import chooseCurrency from '../../actions/chooseCurrency';
import {
  fetchUSDSaleRate, fetchEURSaleRate, convertUAHToUSD, convertUAHToEUR,
} from '../../actions/convertCurrency';

class RadioButtonContainer extends React.Component {
  componentDidMount() {
    // const { convertPrice } = this.props;
    // convertPrice('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11');
  }

  render() {
    const {
      currency,
      chooseCurrency,
      // convertCurrency,
      convertPriceToUSD,
      convertPriceToEUR,
      flightVariants,
      convertUAHToUSD,
      convertUAHToEUR,
    } = this.props;

    return (
      <RadioButtonGroup>
        <ListGroup horizontal>
          {currency.map(item => (
            <ListGroupItem key={item.id}>
              <RadioButton
                id={item.id}
                type="radio"
                name={item.name}
                value={item.value}
                label={item.label}
                checked={item.checked}
                onChange={(event) => {
                  chooseCurrency(event.target.value);
                  convertUAHToUSD(25, event.target.value);
                  convertUAHToEUR(28, event.target.value);
                }}
                simpleButtonView
              />
            </ListGroupItem>
          ))}
        </ListGroup>
      </RadioButtonGroup>
    );
  }
}

RadioButtonContainer.propTypes = {
  currency: PropTypes.arrayOf(PropTypes.object),
};

RadioButtonContainer.defaultProps = {
  currency: [],
};

function mapStateToProps(store) {
  console.log(store);
  return {
    currency: store.currency.currency,
    flightVariants: store.flightVariants.flightVariants,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    chooseCurrency: bindActionCreators(chooseCurrency, dispatch),
    // convertPriceToUSD: url => dispatch(fetchUSDSaleRate(url)),
    // convertPriceToEUR: url => dispatch(fetchEURSaleRate(url)),
    convertUAHToUSD: (price, value) => dispatch(convertUAHToUSD(price, value)),
    convertUAHToEUR: (price, value) => dispatch(convertUAHToEUR(price, value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RadioButtonContainer);
