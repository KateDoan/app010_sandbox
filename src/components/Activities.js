import React, { Component } from 'react';
import ErrModal from './ErrorModal';
import NextBtn from './NextButton';

class Activities extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isModalOpen: false,
			isBadActiveOpen: false,
			isMedActiveOpen: false,
			isGoodActiveOpen: false,
			modalMess: null
		}

		this.toggleModal = this.toggleModal.bind(this);
		this.toggleBadActive = this.toggleBadActive.bind(this);
		this.toggleMedActive = this.toggleMedActive.bind(this);
		this.toggleGoodActive = this.toggleGoodActive.bind(this);
	}

	toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
    }

    toggleBadActive() {
    	this.setState({
          isBadActiveOpen: !this.state.isBadActiveOpen
        });
    }

    toggleMedActive() {
    	this.setState({
          isMedActiveOpen: !this.state.isMedActiveOpen
        });
    }

    toggleGoodActive() {
    	this.setState({
          isGoodActiveOpen: !this.state.isGoodActiveOpen
        });
    }

	render(){
		if(this.props.currentStep !== this.props.order){
			return null;
		};

		const next = () => {
			if(this.props.exercise < 0){
				this.setState({
					modalMess: "Please answer the question before proceeding."
				});
				this.toggleModal();
	        } else {
	        	const bmi = Math.round(this.props.bmi);

				this.props.postPredict(this.props.gender, this.props.race, this.props.ageNow, bmi, 
									   this.props.smoke, this.props.veg, this.props.exercise);

				if (!this.props.countedUser) {
					this.props.postCount('user');
					this.props.handleCounted('user');
				}

                this.props._next();
            }
		};

		const baseBtnCss = 'butt rect';
		const chosenBtnCss = 'butt rect chosen';

		return(
			<div className="container">
				<div className="page-padding-top"></div>
				<div className="row">
					<div className="col-12 col-md-8 offset-md-2 question">
						<p>How much time do you spend exercising weekly?</p>
					</div>
					<div className="col-12 col-md-4">
						<button 
							onClick={() => {this.props.handleState('exercise', 0); this.toggleGoodActive()}}
							className={this.props.exercise===0 ? chosenBtnCss : baseBtnCss}
							> 
							<img className="icon" src="assets/images/icons8-running-48.png" alt="run" />
		                    <img className="icon" src="assets/images/icons8-swimming-48.png" alt="swim" />
		                    <br />
		                    <img className="icon" src="assets/images/icons8-gymnastics-48.png" alt="gym" />
		                    <img className="icon" src="assets/images/icons8-badminton-player-48.png" alt="badminton" />
							<p>More than 150 minutes</p>
						</button>
					</div>
					<div className="col-12 col-md-4">
						<button 
							onClick={() => {this.props.handleState('exercise', 1); this.toggleMedActive()}}
							className={this.props.exercise===1 ? chosenBtnCss : baseBtnCss}
							> 
							<img className="icon" src="assets/images/icons8-walking-48.png" alt="walk" />
		                    <img className="icon" src="assets/images/icons8-running-48.png" alt="run" />
							<p>50 to 150 minutes</p>
						</button>
					</div>
					<div className="col-12 col-md-4">
						<button 
							onClick={() => {this.props.handleState('exercise', 2); this.toggleBadActive()}}
							className={this.props.exercise===2 ? chosenBtnCss : baseBtnCss}
							> 
							<img className="icon" src="assets/images/icons8-walking-48.png" alt="walk" />
							<p>Less than 50 minutes</p> 
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
					isModalOpen={this.state.isBadActiveOpen}
					toggleModal={this.toggleBadActive}
					modalMess={`Being active helps you look and feel good! 
					            Aim for at least 150 minutes of physical activity per week!`}
					modalTitle={'Health Advice'}
					className={'warn'}
				/>
				<ErrModal 
					isModalOpen={this.state.isMedActiveOpen}
					toggleModal={this.toggleMedActive}
					modalMess={`Aim for at least 150 minutes of physical activity per week for a healthier you.`}
					modalTitle={'You can take one step further!'}
					className={'moderate'}
				/>
				<ErrModal 
					isModalOpen={this.state.isGoodActiveOpen}
					toggleModal={this.toggleGoodActive}
					modalMess={`Keep it up! Exercises keep you away from diabetes and other diseases.`}
					modalTitle={'Wonderful!'}
					className={'good'}
				/>
			</div>
		);
	}
}

export default Activities;