import React, { Component } from 'react';

class EndComponent extends Component {
	render() {
		if (this.props.currentStep !== this.props.order) { 
	      return null;
	    }

		return (
			<div>
				<div className="page-padding-top"></div>
				<div className="page-padding-start-end d-none d-md-block"></div>
				<div className="row"> 
					<div className="col-10 offset-1">
						<img className="beat" src="assets/images/letsbeatdiabetes.png" alt="" />
					</div>
				</div>
				<div className="row"> 
					<div className="col-10 offset-1">
						Thank you for using the app. <br />
						It is never too late to start your journey to a healthier life!
					</div>
				</div>
			</div>
		);
	}
}

export default EndComponent;