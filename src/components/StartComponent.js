import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class StartComponent extends Component {
	render() {
		if (this.props.currentStep !== this.props.order) { 
	      return null;
	    }

		return (
			<div>
				<div className="page-padding-top"></div>
				<div className="page-padding-start-end d-none d-md-block"></div>
				<div className="row">
					<div className="col-12 welcome">
						Welcome
					</div>
				</div>
				<div className="page-padding-middle"></div>
				<div className="row">
					<div className="col-10 offset-1 col-md-4 offset-md-4 lg-text text-justify">
						<p>
						This Personalised Risk Predictor (PRP) for Diabetes tool 
						estimates your lifetime risk of developing diabetes 
						and provides health messages specially for you.
						</p>
						<p>
						Take the quiz today to find out how you can take action 
						and live a healthier life!
						</p>
					</div>
				</div>
				<div className="page-padding-middle"></div>
				<div className="row">
					<div className="col-xs-4 col-md-2 offset-md-5">
						<button
							onClick={this.props._next}
							className={'btn butt-nav next'}
							><span><FontAwesomeIcon icon={['fas', 'play-circle']} size="5x" /></span><p>Start Quiz</p>
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default StartComponent;