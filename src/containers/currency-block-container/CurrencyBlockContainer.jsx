import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListGroup from '../../components/list-group/ListGroup';
import ListGroupItem from '../../components/list-group/ListGroupItem';
import RadioButton from '../../components/radio-button/RadioButton';
import RadioButtonGroup from '../../components/radio-button-group/RadioButtonGroup';

import chooseCurrency from '../../actions/chooseCurrency';
import { fetchUSDSaleRate, fetchEURSaleRate } from '../../actions/convertCurrency';

class CurrencyBlockContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
  }

  handleCurrencyChange(event) {
    const { changeCurrency, convertPriceToUSD, convertPriceToEUR } = this.props;
    const currencyExchangeAPIUrl = 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11';

    changeCurrency(event.target.value);
    convertPriceToUSD(`${currencyExchangeAPIUrl}`, event.target.value);
    convertPriceToEUR(`${currencyExchangeAPIUrl}`, event.target.value);
  }

  render() {
    const { currency } = this.props;

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
                onChange={this.handleCurrencyChange}
                simpleButtonView
              />
            </ListGroupItem>
          ))}
        </ListGroup>
      </RadioButtonGroup>
    );
  }
}

CurrencyBlockContainer.propTypes = {
  currency: PropTypes.arrayOf(PropTypes.object),
  changeCurrency: PropTypes.func,
  convertPriceToUSD: PropTypes.func,
  convertPriceToEUR: PropTypes.func,
};

CurrencyBlockContainer.defaultProps = {
  currency: [],
  changeCurrency: () => { },
  convertPriceToUSD: () => { },
  convertPriceToEUR: () => { },
};

function mapStateToProps(store) {
  return {
    currency: store.currency.currency,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeCurrency: value => dispatch(chooseCurrency(value)),
    convertPriceToUSD: (url, value) => dispatch(fetchUSDSaleRate(url, value)),
    convertPriceToEUR: (url, value) => dispatch(fetchEURSaleRate(url, value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyBlockContainer);
