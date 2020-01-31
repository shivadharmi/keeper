import { combineReducers } from 'redux';
import authReducer from '../reducers/authReducer';
import submitNoteReducer from '../reducers/submitNoteReducer';
import notesReducer from '../reducers/notesReducer';
import deleteNoteReducer from '../reducers/deleteNoteReducer';

export default combineReducers({
	auth: authReducer,
	lastNote: submitNoteReducer,
	notes: notesReducer,
	isLastNoteDeleted: deleteNoteReducer
});
