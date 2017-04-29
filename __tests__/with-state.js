import shot from '../src/';
import WithState from '../__components__/with-state';

const mutations = [
	{
		description: 'without state, should snap default state',
	},
	{
		description: 'with custom state',
		state: {
			snapPhrase: 'test snapshot 1',
		},
	},
	{
		description: 'with custom state bis',
		state: {
			snapPhrase: 'should be snapshoted',
		},
	},
];

shot(WithState, mutations);
