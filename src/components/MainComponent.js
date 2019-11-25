import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import Questionnaire from './QuestionnaireComponent';
import About from './AboutComponent';
import Info from './InfoComponent';

class Main extends Component {
	render() {
		return(
			<div>
				<Header />
				<Switch>
					<Route path='/home' component={Questionnaire} />
					<Route exact path='/info' component={Info} />
					<Route exact path='/aboutus' component={About} />
					<Redirect to="/home" />
				</Switch>
			</div>
		);
	}
}

export default Main;