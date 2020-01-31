import { FETCH_NOTES } from '../actions/types';

const notesReducer = (prevState = [], action) => {
	switch (action.type) {
		case FETCH_NOTES:
			return [...action.payload];
		default:
			return [...prevState];
	}
};

export default notesReducer;
