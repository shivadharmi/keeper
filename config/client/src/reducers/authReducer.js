import { FETCH_USER } from '../actions/types';

const authReducer = (prevState = {}, action) => {
	switch (action.type) {
		case FETCH_USER:
			return { ...action.payload };
		default:
			return prevState;
	}
};

export default authReducer;
