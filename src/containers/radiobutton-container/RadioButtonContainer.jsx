import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ListGroup from '../../components/list-group/ListGroup';
import ListGroupItem from '../../components/list-group/ListGroupItem';
import RadioButton from '../../components/radio-button/RadioButton';
import RadioButtonGroup from '../../components/radio-button-group/RadioButtonGroup';

import chooseCurrency from '../../actions/chooseCurrency';

class RadioButtonContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: true,
    };

    this.handleRadioSelectChange = this.handleRadioSelectChange.bind(this);
  }

  handleRadioSelectChange(event) {
    this.setState({
      checked: event.target.value,
    });
  }

  render() {
    const { currency, chooseCurrency } = this.props;

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
  };
}

function mapDispatchToProps(dispatch) {
  return {
    chooseCurrency: bindActionCreators(chooseCurrency, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RadioButtonContainer);
