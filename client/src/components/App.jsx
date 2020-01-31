import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

import {
	authAction,
	submitNote,
	fetchNotes,
	deleteNote
} from '../actions/index';

class App extends React.Component {
	componentDidMount() {
		this.props.authAction();
		this.props.fetchNotes();
	}
	addNote = newNote => {
		this.props.submitNote(newNote);
	};

	deleteNote = id => {
		this.props.deleteNote(id);
	};
	componentDidUpdate() {
		this.props.fetchNotes();
	}
	render() {
		return (
			<div>
				<Header />
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
				<Footer />
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
})(App);

// const [notes, setNotes] = useState([]);

// 	setNotes(prevNotes => {
// 		return [...prevNotes, newNote];
// 	});
