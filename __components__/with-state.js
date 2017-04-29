import React, { Component } from 'react';

export default class ComponentWithState extends Component {
	constructor() {
		super();

		this.state = { snapPhrase: 'Should be snapshoted only when no setState' };
	}

	render() {
		return (
			<div>{this.state.snapPhrase}</div>
		);
	}
}
