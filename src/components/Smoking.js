import React, { Component } from 'react';
import ErrModal from './ErrorModal';
import NextBtn from './NextButton';

class Smoking extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isModalOpen: false,
			isNoSmokeOpen: false,
			isSmokeOpen: false,
			modalMess: null
		}

		this.toggleModal = this.toggleModal.bind(this);
		this.toggleNoSmoke = this.toggleNoSmoke.bind(this);
		this.toggleSmoke = this.toggleSmoke.bind(this);
	}

	toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
    }

    toggleNoSmoke() {
		this.setState({
	      isNoSmokeOpen: !this.state.isNoSmokeOpen
        });
    }

    toggleSmoke() {
    	this.setState({
	      isSmokeOpen: !this.state.isSmokeOpen
        });
    }


	render(){
		if(this.props.currentStep !== this.props.order){
			return null;
		};

		const next = () => {
			if(this.props.smoke < 0){
				this.setState({
					modalMess: "Please select your smoking status."
				});
				this.toggleModal();
	        } else {
                this.props._next();
            }
		};

		const baseBtnCss = 'butt sq-lg';
		const chosenBtnCss = 'butt sq-lg chosen';

		return(
			<div className="container">
				<div className="page-padding-top"></div>
				<div className="row">
					<div className="col-12 col-md-8 offset-md-2 question">
						<p>Do you currently smoke?</p>
					</div>
					<div className="col-6 col-md-3 offset-md-3">
						<button 
							onClick={() => {this.props.handleState('smoke', 1); this.toggleSmoke()}}
							className={this.props.smoke===1 ? chosenBtnCss : baseBtnCss}
							><img src="assets/images/icons8-smoking-50.png" alt="" /><p>Smoking</p>
						</button>
					</div>
					<div className="col-6 col-md-3">
						<button 
							onClick={() => {this.props.handleState('smoke', 0); this.toggleNoSmoke()}}
							className={this.props.smoke===0 ? chosenBtnCss : baseBtnCss}
							><img src="assets/images/icons8-no-smoking-50.png" alt="" /><p>No Smoking</p>
						</button>
					</div>
				</div>
				<NextBtn next={next} />
				<ErrModal 
					isModalOpen={this.state.isModalOpen}
					toggleModal={this.toggleModal}
					modalMess={this.state.modalMess}
					modalTitle={'You have skipped a question.'}
				/>
				<ErrModal 
					isModalOpen={this.state.isNoSmokeOpen}
					toggleModal={this.toggleNoSmoke}
					modalMess={`You have protected yourself and your loved ones
						        by not smoking. Non-smokers have lower risk of 
						        developing Type 2 diabetes.`}
					modalTitle={'Great!'}
					className={'good'}
				/>
				<ErrModal 
					isModalOpen={this.state.isSmokeOpen}
					toggleModal={this.toggleSmoke}
					modalMess={`Smokers are more likely to develop Type 2 diabetes.
					            What's more, smoking damages the blood vessels and
					            reduces blood flow to many organs. So, if you have 
					            diabetes and smoke, you are at higher risk of serious
					            complications, such as heart disease, amputation, and 
					            stroke. Hence, please consider quitting to protect 
					            yourself and your loved ones.`}
					modalTitle={'Health Advice'}
					className={'warn'}
				/>
			</div>
		);
	}
}

export default Smoking;