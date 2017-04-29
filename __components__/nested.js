import React, { Component } from 'react';
import Simple from './simple';

// eslint-disable-next-line react/prefer-stateless-function
export default class NestedComponent extends Component {
	render() {
		return (
			<div>
				<Simple/>
				World
			</div>
		);
	}
}
