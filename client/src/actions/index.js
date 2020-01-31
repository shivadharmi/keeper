import axios from 'axios';
import { FETCH_USER, SUBMIT_NOTE, FETCH_NOTES, DELETE_NOTE } from './types';

export const authAction = () => async dispatch => {
	const response = await axios
		.get('/api/current_user')
		.catch(e => console.log(e));
	dispatch({ type: FETCH_USER, payload: response.data });
};

export const submitNote = note => async dispatch => {
	const response = await axios
		.post('/api/submitNote', note)
		.catch(e => console.log(e));
	dispatch({ type: SUBMIT_NOTE, payload: response.data });
};

export const fetchNotes = () => async dispatch => {
	const response = await axios.get('/api/notes').catch(e => console.log(e));
	dispatch({ type: FETCH_NOTES, payload: response.data });
};

export const deleteNote = id => async dispatch => {
	const response = await axios
		.delete(`/api/deleteNote/${id}`)
		.catch(e => console.log(e));
	dispatch({ type: DELETE_NOTE, payload: response.data });
};
