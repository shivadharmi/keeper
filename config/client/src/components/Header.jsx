import React from 'react';
import Button from '@material-ui/core/Button';
import HighlightIcon from '@material-ui/icons/Highlight';

function Header() {
	return (
		<header style={{ position: 'relative' }}>
			<h1 style={{ display: 'inline' }}>
				<HighlightIcon />
				Keeper
			</h1>
			<Button
				variant='contained'
				color='secondary'
				style={{ position: 'absolute', right: '10px' }}>
				<a
					href='/auth/google'
					style={{ textDecoration: 'none', color: '#fff' }}>
					<i className='fab fa-google-plus-g' style={{ paddingRight: '5px' }} />
					{` Sign In with Google`}
				</a>
			</Button>
		</header>
	);
}

export default Header;
