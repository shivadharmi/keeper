import React from 'react';
import { connect } from 'react-redux';

import HighlightIcon from '@material-ui/icons/Highlight';
import GoogleButton from './GoogleButton';

class Header extends React.Component {
	renderContent() {
		switch (this.props.auth) {
			case false:
				return (
					<GoogleButton route='/auth/google' action='Sign In With Google' />
				);
			case null:
				return <div>Deciding</div>;
			default:
				return <GoogleButton route='/api/logout' action='LogOut' />;
		}
	}
	render() {
		return (
			<header style={{ position: 'relative' }}>
				<h1 style={{ display: 'inline' }}>
					<HighlightIcon />
					Keeper
				</h1>
				{this.renderContent()}
			</header>
		);
	}
}
const mapStateToProps = state => {
	return {
		auth: state.auth
	};
};
export default connect(mapStateToProps)(Header);
