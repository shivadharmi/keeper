const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: { firstName: String, secondName: String },
	profileId: String
});

module.exports = mongoose.model('user', userSchema);
