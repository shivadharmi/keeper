const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const User = require('../models/User');

const noteSchema = new Schema({
	profileId: String,
	title: String,
	content: String,
	createdOn: { type: Date, default: Date.now },
	_user: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('note', noteSchema);
