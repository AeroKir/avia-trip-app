import React from 'react';
import { connect } from 'react-redux';
import ListGroup from '../../components/list-group/ListGroup';
import ListGroupItem from '../../components/list-group/ListGroupItem';
import RadioButton from '../../components/radio-button/RadioButton';
import RadioButtonGroup from '../../components/radio-button-group/RadioButtonGroup';
import CURRENCY_CONFIG from '../../config/currency-config';

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

    return (
      <RadioButtonGroup>
        <ListGroup horizontal>
          {CURRENCY_CONFIG.map(item => (
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

function mapStateToProps(store) {
  console.log(store);
  return {
    checked: store.checked,
  };
}

export default connect(mapStateToProps)(RadioButtonContainer);
