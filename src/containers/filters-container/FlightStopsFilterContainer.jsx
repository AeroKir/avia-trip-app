import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListGroup from '../../components/list-group/ListGroup';
import ListGroupItem from '../../components/list-group/ListGroupItem';
import Checkbox from '../../components/checkbox/Checkbox';

import flightConditionChoice from '../../actions/chooseFlights';

class FlightStopsFilterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleFlightStopsChange = this.handleFlightStopsChange.bind(this);
  }

  handleFlightStopsChange(event) {
    const { flightStopsFilter } = this.props;
    const isChecked = event.target.checked;
    const itemValue = event.target.value;

    flightStopsFilter(isChecked, itemValue);
  }

  render() {
    const { flightSearchConditions } = this.props;

    return (
      <ListGroup>
        {flightSearchConditions.map(item => (
          <ListGroupItem key={item.id} className="flight-stops-filter-item">
            <Checkbox
              id={item.id}
              name={item.name}
              value={item.value}
              label={item.label}
              checked={item.checked}
              onChange={this.handleFlightStopsChange}
            />
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}

FlightStopsFilterContainer.propTypes = {
  flightSearchConditions: PropTypes.arrayOf(PropTypes.object),
  flightStopsFilter: PropTypes.func,
};

FlightStopsFilterContainer.defaultProps = {
  flightSearchConditions: [],
  flightStopsFilter: () => { },
};

function mapStateToProps({ flightSearchConditions }) {
  return {
    flightSearchConditions: flightSearchConditions.flightSearchConditions,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    flightStopsFilter: (checked, value) => dispatch(flightConditionChoice(checked, value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightStopsFilterContainer);
