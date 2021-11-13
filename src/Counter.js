import React from "react";

export default class Counter extends React.Component {
	constructor() {
		super();
		this.state = {
			cont: 0,
		}
	}

	changeCounter = (change) => {
		let values = this.state.cont + change;
		this.setState({ cont: values });
	};

	render() {
		return 	<div>
				<h1>Counter : {this.state.cont}</h1>
				<button onClick={() => this.changeCounter(1)}>Increase</button>
			</div>
	}
}
