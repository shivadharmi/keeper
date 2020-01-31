const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const User = require('../models/User');

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
	const user = await User.findById(id).catch(e => done(e, null));
	done(null, user);
});

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleSecretID,
			callbackURL: '/auth/google/callback'
		},
		async (acessToken, refreshToken, profile, cb) => {
			let user = await User.findOne({ profileId: profile.id }).catch(e =>
				cb(e, null)
			);
			if (!user) {
				user = new User({
					profileId: profile.id,
					name: {
						firstName: profile.name.familyName,
						secondName: profile.name.givenName
					}
				});
				user = await user.save().catch(e => console.log(e));
				return cb(null, user);
			} else {
				return cb(null, user);
			}
		}
	)
);
