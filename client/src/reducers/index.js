import { combineReducers } from 'redux';
import authReducer from '../reducers/authReducer';
import notesReducer from '../reducers/notesReducer';

export default combineReducers({
	auth: authReducer,
	notes: notesReducer
});
