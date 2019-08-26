import React from 'react';
import ListGroup from '../../components/list-group/ListGroup';
import ListGroupItem from '../../components/list-group/ListGroupItem';
import Checkbox from '../../components/checkbox/Checkbox';
import FLIGHT_SEARCH_CONDITIONS from '../../config/flight-search-conditions';

class CheckboxContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedItems: new Map(),
    };

    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleCheckboxChange(event) {
    const item = event.target.value;
    console.log(item);
    const isChecked = event.target.checked;
    console.log(isChecked);

    this.setState(prevState => ({
      checkedItems: prevState.checkedItems.set(item, isChecked),
    }));
  }

  render() {
    const { checkedItems } = this.state;

    return (
      <ListGroup>
        {FLIGHT_SEARCH_CONDITIONS.map(item => (
          <ListGroupItem key={item.id}>
            <Checkbox
              id={item.id}
              name={item.name}
              value={item.value}
              label={item.label}
              checked={checkedItems.get(item.value)}
              onChange={this.handleCheckboxChange}
            />
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}

export default CheckboxContainer;
