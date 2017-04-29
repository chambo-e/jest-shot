import React, { Component } from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
export default class ComponentWithProps extends Component {
	render() {
		return (
			<div>{this.props.snapPhrase}</div>
		);
	}
}

ComponentWithProps.propTypes = {
	snapPhrase: PropTypes.string,
};

ComponentWithProps.defaultProps = {
	snapPhrase: 'Should only be snapshoted when no props',
};
