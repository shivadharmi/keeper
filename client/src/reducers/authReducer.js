import { FETCH_USER } from '../actions/types';

const authReducer = (prevState = null, action) => {
	switch (action.type) {
		case FETCH_USER:
			return action.payload || false;
		default:
			return prevState;
	}
};

export default authReducer;
