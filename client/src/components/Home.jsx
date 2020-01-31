import React from 'react';
import { connect } from 'react-redux';

import Note from './Note';
import CreateArea from './CreateArea';

import {
	authAction,
	submitNote,
	fetchNotes,
	deleteNote
} from '../actions/index';

class Home extends React.Component {
	componentDidMount() {
		this.props.fetchNotes();
	}
	addNote = newNote => {
		this.props.submitNote(newNote);
	};

	deleteNote = id => {
		this.props.deleteNote(id);
	};
	render() {
		return (
			<div>
				<CreateArea onAdd={this.addNote} />
				{this.props.notes.map(noteItem => {
					return (
						<Note
							key={noteItem._id}
							id={noteItem._id}
							title={noteItem.title}
							content={noteItem.content}
							onDelete={this.deleteNote}
						/>
					);
				})}
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		notes: state.notes,
		auth: state.auth,
		lasNote: state.lasNote
	};
};

export default connect(mapStateToProps, {
	authAction,
	submitNote,
	fetchNotes,
	deleteNote
})(Home);
