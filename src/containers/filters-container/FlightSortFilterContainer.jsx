import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListGroup from '../../components/list-group/ListGroup';
import ListGroupItem from '../../components/list-group/ListGroupItem';
import RadioButton from '../../components/radio-button/RadioButton';
import RadioButtonGroup from '../../components/radio-button-group/RadioButtonGroup';

import toggleFlightsSortFilter from '../../actions/toggleFligtsSortFilter';

class FlightSortFilterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleFlightsSortChange = this.handleFlightsSortChange.bind(this);
  }

  handleFlightsSortChange(event) {
    const { toggleSortFilter } = this.props;
    toggleSortFilter(event.target.value);
  }

  render() {
    const { flightSortFilter } = this.props;

    return (
      <RadioButtonGroup>
        <ListGroup horizontal>
          {flightSortFilter.map(item => (
            <ListGroupItem key={item.id}>
              <RadioButton
                id={item.id}
                type="radio"
                name={item.name}
                value={item.value}
                label={item.label}
                checked={item.checked}
                onChange={this.handleFlightsSortChange}
                className="flight-sort-filter-btn"
                simpleButtonView
              />
            </ListGroupItem>
          ))}
        </ListGroup>
      </RadioButtonGroup>
    );
  }
}

FlightSortFilterContainer.propTypes = {
  flightSortFilter: PropTypes.arrayOf(PropTypes.object),
  toggleSortFilter: PropTypes.func,
};

FlightSortFilterContainer.defaultProps = {
  flightSortFilter: [],
  toggleSortFilter: () => { },
};

function mapStateToProps({ flightSortFilter }) {
  return {
    flightSortFilter: flightSortFilter.flightSortFilter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleSortFilter: value => dispatch(toggleFlightsSortFilter(value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightSortFilterContainer);
