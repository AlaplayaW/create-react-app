import React, { Component } from "react";
import "./App.css";
import Avatar from "./Avatar";

class Count extends Component {
	constructor(props) {
		super(props);
		this.state = { count: 0 };
	}

	increment = () => {
		const count = this.state.count;
		this.setState({ count: count + 1 });
	};

	decrement = () => {
		const count = this.state.count;
		this.setState({ count: count - 1 });
	};

	render() {
		return (
			<div>
				{this.state.count}
				<div>
					<button onClick={this.increment}>increment</button>
				</div>
				<div>
					<button onClick={this.decrement}>decrement</button>
				</div>
			</div>
		);
	}
}

export default Count;
