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

    this.state = {
      checkedItems: new Map(),
    };

    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleCheckboxChange(event) {
    const itemValue = event.target.value;
    const isChecked = event.target.checked;

    this.setState(prevState => ({
      checkedItems: prevState.checkedItems.set(itemValue, isChecked),
    }));
  }

  render() {
    const { flightSearchConditions, flightConditionChoice } = this.props;

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
              onChange={(event) => {
                const isChecked = event.target.checked;
                const itemValue = event.target.value;
                flightConditionChoice(isChecked, itemValue);
              }}
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
    flightConditionChoice: bindActionCreators(flightConditionChoice, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxContainer);
