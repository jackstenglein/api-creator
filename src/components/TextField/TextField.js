import React, {Component} from 'react';


class TextField extends Component {
  render() {
    return (
      <input
        type="text"
        className="TextField"
        name={this.props.name}
        value={this.props.value}
        placeholder={this.props.placeholder}
        onChange={this.props.onChange}
      />
    );
  }
}

export default TextField;
