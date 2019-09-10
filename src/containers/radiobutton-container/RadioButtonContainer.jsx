import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListGroup from '../../components/list-group/ListGroup';
import ListGroupItem from '../../components/list-group/ListGroupItem';
import RadioButton from '../../components/radio-button/RadioButton';
import RadioButtonGroup from '../../components/radio-button-group/RadioButtonGroup';

class RadioButtonContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: 'uah',
    };

    this.handleRadioSelectChange = this.handleRadioSelectChange.bind(this);
  }

  handleRadioSelectChange(event) {
    this.setState({
      selectedOption: event.target.value,
    });
  }

  render() {
    const { selectedOption } = this.state;
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
                checked={selectedOption === item.value}
                onChange={this.handleRadioSelectChange}
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
    currency: store.currency,
  };
}

export default connect(mapStateToProps)(RadioButtonContainer);
