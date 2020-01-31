import { SUBMIT_NOTE } from '../actions/types';

const submitNodeReducer = (prevState = null, action) => {
	switch (action.type) {
		case SUBMIT_NOTE:
			return action.payload;
		default:
			return prevState;
	}
};

export default submitNodeReducer;
