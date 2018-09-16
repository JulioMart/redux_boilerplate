import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import logo from './logo.svg';
class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div className="App">
						<Header branding="Contact Manager" />
						<div className="container">
							<Switch>
								{/* <Route exact path="/" component={Contacts} /> */}
								{/* <Route component={NotFound} /> */}
							</Switch>
						</div>
					</div>
				</Router>
			</Provider>

			// <div className="App">
			//   <header className="App-header">
			//     <img src={logo} className="App-logo" alt="logo" />
			//     <h1 className="App-title">Welcome to React</h1>
			//   </header>
			//   <p className="App-intro">
			//     To get started, edit <code>src/App.js</code> and save to reload.
			//   </p>
			// </div>
		);
	}
}

export default App;