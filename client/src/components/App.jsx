import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import LandingPage from './LandingPage';
import Home from './Home';

class App extends React.Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<div>
						<Header />
						<Route path='/' exact component={LandingPage}></Route>
						<Route path='/home' exact component={Home}></Route>
						<Footer />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
