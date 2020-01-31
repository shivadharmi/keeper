import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { authAction } from '../actions/index';
import history from '../history';

import HighlightIcon from '@material-ui/icons/Highlight';
import Button from '@material-ui/core/Button';
import GoogleButton from './GoogleButton';

class Header extends React.Component {
	componentDidMount() {
		this.props.authAction();
	}
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
				<h1 style={{ display: 'inline' }} onClick={() => history.push('/')}>
					<HighlightIcon />
					Keeper
				</h1>
				{this.props.auth ? (
					<Button
						variant='contained'
						color='primary'
						style={{ position: 'absolute', right: '150px' }}>
						<Link to='/home' style={{ textDecoration: 'none', color: '#fff' }}>
							Home
						</Link>
					</Button>
				) : null}
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
export default connect(mapStateToProps, { authAction })(Header);
