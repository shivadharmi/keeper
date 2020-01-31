const express = require('express');
const mongoose = require('mongoose');
const bodyPaser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');
const app = express();

require('./services/passport');

const keys = require('./config/keys');
const authRoutes = require('./routes/authRoutes');
const apiRoutes = require('./routes/apiRoutes');

mongoose.connect(keys.mongoURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
	console.log('connected mongoDB server');
});

app.use(bodyPaser.json());
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth/google', authRoutes);
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
	res.send('server started');
});

if (process.env.NODE_ENV === 'production') {
	// It will try to serve the file required by use of the below
	// line of the code(express.satatic) and if it doesn't find the file
	// it will send the index.html file for all other requests

	// Express will serve up production asssets
	// like our main.js file, or main.css file!
	app.use(express.static('client/build'));

	// Express will serve up the index.html file
	// if it doesn't recognise the route
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT;
app.listen(PORT || 5000, () => {
	console.log('server got started on port 5000');
});

const port = process.env.port || 5000;
app.listen(port, () => {
	console.log('server started at port 5000');
});
