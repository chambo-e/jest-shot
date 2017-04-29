import shot from '../src/';
import Nested from '../__components__/nested';

const mutations = [
	{
		description: 'without props, should snap shallow',
	},
	{
		description: 'without props, should snap full tree',
		mount: true,
	},
];

shot(Nested, mutations);
