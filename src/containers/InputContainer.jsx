import React from 'react';
import Input from '../components/input/Input';

class InputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isChecked: false };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    // const check = this.state;
    const check = event.target.checked;
    console.log(check);
    this.setState({
      isChecked: check,
    });
  }

  render() {
    const { isChecked } = this.state;

    return (
      <Input
        id="input-check"
        type="checkbox"
        value="Check"
        checked={isChecked}
        onChange={this.handleInputChange}
        label="Yo"
      />
    );
  }
}

export default InputContainer;
