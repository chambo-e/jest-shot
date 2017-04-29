import shot from '../src/';
import WithProps from '../__components__/with-props';

const mutations = [
	{
		description: 'without props, should snap default props',
	},
	{
		description: 'with custom props',
		props: {
			snapPhrase: 'test snapshot 1',
		},
	},
	{
		// Without description
		props: {
			snapPhrase: 'should be snapshoted',
		},
	},
];

shot(WithProps, mutations);
