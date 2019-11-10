import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ListGroup from '../../components/list-group/ListGroup';
import ListGroupItem from '../../components/list-group/ListGroupItem';
import Checkbox from '../../components/checkbox/Checkbox';

import flightConditionChoice from '../../actions/chooseFlights';

class CheckboxContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleFlightConditionsChange = this.handleFlightConditionsChange.bind(this);
  }

  handleFlightConditionsChange(event) {
    const { flightConditionFilter } = this.props;
    const isChecked = event.target.checked;
    const itemValue = event.target.value;

    flightConditionFilter(isChecked, itemValue);
  }

  render() {
    const { flightSearchConditions } = this.props;

    return (
      <ListGroup>
        {flightSearchConditions.map(item => (
          <ListGroupItem key={item.id}>
            <Checkbox
              id={item.id}
              name={item.name}
              value={item.value}
              label={item.label}
              checked={item.checked}
              onChange={this.handleFlightConditionsChange}
            />
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}

function mapStateToProps(store) {
  return {
    flightSearchConditions: store.flightSearchConditions.flightSearchConditions,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    flightConditionFilter: bindActionCreators(flightConditionChoice, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxContainer);
