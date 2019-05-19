import React, { Component } from "react";

class Wild extends Component {
	constructor(props) {
		super(props);
		this.state = { number: 1 };
	}
	componentDidMount() {
		this.interval = setInterval(() => {
			console.log(this.state.number);
			this.setState({ number: this.state.number + 1 });
			}, 1000);
  }
  componentWillUpdate() {
    console.log('Le composant va se mettre à jour');
  }
	componentDidUpdate() {
		console.log("Un update a eu lieu");
  }
  componentWillUnmount () {
    clearInterval(this.interval)
}
	render() {
		return (
			<div>
				<h1>{this.state.number}</h1>
			</div>
		);
	}
}

export default Wild;