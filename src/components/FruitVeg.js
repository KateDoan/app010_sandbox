import React, { Component } from 'react';
import ErrModal from './ErrorModal';
import NextBtn from './NextButton';

class FruitVeg extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isModalOpen: false,
			isBadVegOpen: false,
			isMedVegOpen: false,
			isGoodVegOpen: false,
			modalMess: null
		}

		this.toggleModal = this.toggleModal.bind(this);
		this.toggleBadVeg = this.toggleBadVeg.bind(this);
		this.toggleMedVeg = this.toggleMedVeg.bind(this);
		this.toggleGoodVeg = this.toggleGoodVeg.bind(this);
	}

	toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
    }	

    toggleBadVeg() {
        this.setState({
          isBadVegOpen: !this.state.isBadVegOpen
        });
    }	

    toggleMedVeg() {
        this.setState({
          isMedVegOpen: !this.state.isMedVegOpen
        });
    }	

    toggleGoodVeg() {
        this.setState({
          isGoodVegOpen: !this.state.isGoodVegOpen
        });
    }	

	render(){
		if(this.props.currentStep !== this.props.order){
			return null;
		};

		const next = () => {
			if(this.props.veg < 0){
				this.setState({
					modalMess: "Please answer the question before proceeding."
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
						<p>How many servings of fruits and vegetables do you usually eat per day?</p>
					</div>
					<div className="col-12 col-md-4">
						<button 
							onClick={() => {this.props.handleState('veg', 2); this.toggleBadVeg()}}
							className={this.props.veg===2 ? chosenBtnCss : baseBtnCss}
							><img src="assets/images/icons8-apple-40.png" alt="apple" />
							<p>Less than 2</p>
						</button>
					</div>
					<div className="col-12 col-md-4">
						<button 
							onClick={() => {this.props.handleState('veg', 1); this.toggleMedVeg()}}
							className={this.props.veg===1 ? chosenBtnCss : baseBtnCss}
							><img src="assets/images/icons8-apple-40.png" alt="apple"/>
	                      	<img src="assets/images/icons8-broccoli-48.png" alt="broccoli"/>
							<p>2 to 3</p>
						</button>
					</div>
					<div className="col-12 col-md-4">
						<button 
							onClick={() => {this.props.handleState('veg', 0); this.toggleGoodVeg()}}
							className={this.props.veg===0 ? chosenBtnCss : baseBtnCss}
							><img src="assets/images/icons8-apple-40.png" alt="apple"/>
	                      	<img src="assets/images/icons8-peas-48.png" alt="peas" />
	                      	<br />
	                      	<img src="assets/images/icons8-banana-40.png" alt="banana" />
	                      	<img src="assets/images/icons8-broccoli-48.png" alt="broccoli" />
							<p>4 or more</p> 
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
					isModalOpen={this.state.isBadVegOpen}
					toggleModal={this.toggleBadVeg}
					modalMess={`Vegetables and fruits are rich in fiber and nutrients — a win 
						        for people who want to gain control over their blood sugar level. 
						        Please try to include more vegetables and whole fruits 
						        to your diet, aiming for 4 servings a day.`}
					modalTitle={'Health Advice'}
					className={'warn'}
				/>
				<ErrModal 
					isModalOpen={this.state.isMedVegOpen}
					toggleModal={this.toggleMedVeg}
					modalMess={`Vegetables and fruits are full of fiber and nutrients 
						        which can help you gain control over you blood sugar level. 
						        Please try to aim for at least 4 servings 
					            of vegetables and whole fruits daily. You can make it!`}
					modalTitle={'You can do it better!'}
					className={'moderate'}
				/>
				<ErrModal 
					isModalOpen={this.state.isGoodVegOpen}
					toggleModal={this.toggleGoodVeg}
					modalMess={`Please continue to eat 4 servings or more 
						        of vegetables and fruits daily. Remember not 
						        to overcook vegetables, and go for whole fruits 
						        rather than fruit juices.`}
					modalTitle={'Well done!'}
					className={'good'}
				/>
			</div>
		);
	}
}

export default FruitVeg;