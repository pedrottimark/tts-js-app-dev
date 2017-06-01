import React, {Component} from 'react';

const name = 'adder';
const placeholder = 'new item';
const label = 'Add';

class Adder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    }
  }

  _onChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  }

  _onSubmit = (event) => {
    // http://api.jquery.com/event.preventDefault/
    event.preventDefault(); // comment out this line to see why you need it :(

    this.props.onSubmit(this.state.text);
    this.setState({
      text: '',
    })
  }

  render () {
    return (
      <form name={name} onSubmit={this._onSubmit}>
        <input type="text"
          placeholder={placeholder}
          name={name}
          onChange={this._onChange}
        />
        <button type="submit">{label}</button>
      </form>
    );
  }
}

export default Adder;
