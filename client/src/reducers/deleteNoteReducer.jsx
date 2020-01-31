import { DELETE_NOTE } from '../actions/types';

const deleteNoteReducer = (PrevState = false, action) => {
	switch (action.type) {
		case DELETE_NOTE:
			if (action.payload === '') {
				return true;
			} else {
				return false;
			}
		default:
			return PrevState;
	}
};

export default deleteNoteReducer;
