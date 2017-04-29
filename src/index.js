import React from 'react';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';

const snap = element => {
	const elementJSON = toJSON(element);
	expect(elementJSON).toMatchSnapshot();
};

const shot = Component => (mutation, index) => {
	it(mutation.description || `mutation n°${index}`, () => {
		const props = mutation.props || {};

		const element = mutation.mount ?
			mount(React.createElement(Component, props)) :
			shallow(React.createElement(Component, props));

		if (mutation.state) {
			element.setState(mutation.state);
		}

		snap(element);
	});
};

export default (Component, mutations) => {
	describe(Component.name || 'Unknown', () => {
		if (mutations) {
			mutations.forEach(shot(Component));
		} else {
			it('renders correctly without props', () => {
				const element = shallow(React.createElement(Component));
				snap(element);
			});
		}
	});
};
