import React, { Component } from "react";

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: ''};

    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange (event) {
    this.setState({name: event.target.value});
  }

  render() {
    return (
      <form>
        <label htmlFor="name">Name :</label>
        <input id="name" type="text" value={this.state.name} onChange={this.handleNameChange} />
      </form>
    );
  }
}

export default NameForm;