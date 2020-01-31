const express = require('express');
const router = express.Router();
const Note = require('../models/Notes');
// const User = require('../models/User');

router.get('/current_user', (req, res) => {
	res.send(req.user);
});

router.get('/logout', (req, res) => {
	req.logout();
	res.redirect('/');
});

router.get('/notes', async (req, res) => {
	const notes = await Note.find({ profileId: req.user.profileId }).catch(e =>
		console.log(e)
	);
	res.send(notes);
});

router.post('/submitNote', async (req, res) => {
	let note = new Note({
		title: req.body.title,
		content: req.body.content,
		profileId: req.user.profileId
	});
	note = await note.save().catch(e => console.log(e));
	const notes = await Note.find({ profileId: req.user.profileId }).catch(e =>
		console.log(e)
	);
	res.send(notes);
});

router.delete('/deleteNote/:id', async (req, res) => {
	const id = req.params.id;
	const response = await Note.deleteOne({ _id: id }).catch(e => console.log(e));
	const notes = await Note.find({ profileId: req.user.profileId }).catch(e =>
		console.log(e)
	);
	res.send(notes);
});

module.exports = router;
