import React, { Component } from 'react';

class Page0 extends Component {

	constructor(props) {
		super(props);

		this.state = {
			diabetic: -1
		}
	}

	render(){
		if(this.props.currentStep !== this.props.order){
			return null;
		};

		const baseBtnCss = 'butt';
		const chosenBtnCss = 'butt chosen';

		const DiabeticMsg = () => {
			return(
				<div className="row">
					<div className="col-10 offset-1 col-md-6 offset-md-3 warn bold text-center">
						<p>
							We are sorry. This app is only for the non-diabetic. 
							Please take care of your health and follow your doctor's advices.
							You can exit by closing this app window.
						</p>
					</div>
				</div>
			);
		}

		return(
			<div className="container">
				<div className="page-padding-top"></div>
				<div className="row">
					<div className="col-12 col-md-8 offset-md-2 question">
						<p>Have you ever been told by a doctor that you have diabetes?</p>
					</div>
					<div className="col-6 col-md-3 offset-md-3">
						<button 
							onClick={() => {this.setState({ diabetic: 1 })}}
							className={this.state.diabetic > 0 ? chosenBtnCss : baseBtnCss}
							><span className="lg-text">Yes</span>
						</button>
					</div>
					<div className="col-6 col-md-3">
						<button 
							onClick={() => {this.setState({ diabetic: 0 }); this.props._next()}}
							className={!this.state.diabetic ? chosenBtnCss : baseBtnCss}
							><span className="lg-text">No</span>
						</button>
					</div>
				</div>
				<div>{ this.state.diabetic > 0 ? <DiabeticMsg /> : null }</div>
			</div>
		);
	}
}

export default Page0;