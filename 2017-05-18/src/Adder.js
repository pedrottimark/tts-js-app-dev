import React, {Component} from 'react';

const name = 'adder';
const placeholder = 'new item';
const label = 'Add';

class Adder extends Component {
  constructor(props) {
    super(props);

    this._onSubmit = this._onSubmit.bind(this);
  }

  _onSubmit(event) {
    // http://api.jquery.com/event.preventDefault/
    event.preventDefault(); // comment out this line to see why you need it :(

    var text = this._input.value;
    this._input.value = '';
    this.props.onSubmit(text);
  }

  render () {
    return (
      <form name={name} onSubmit={this._onSubmit}>
        <input type="text"
          placeholder={placeholder}
          name={name}
          ref={input => {this._input = input;}}
        />
        <button type="submit">{label}</button>
      </form>
    );
  }
}

export default Adder;
