import React from 'react';
import Button from '@material-ui/core/Button';

const GoogleButton = props => {
	return (
		<Button
			variant='contained'
			color='secondary'
			style={{ position: 'absolute', right: '10px' }}>
			<a href={props.route} style={{ textDecoration: 'none', color: '#fff' }}>
				<i className='fab fa-google-plus-g' style={{ paddingRight: '5px' }} />
				{props.action}
			</a>
		</Button>
	);
};

export default GoogleButton;
