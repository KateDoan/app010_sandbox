import React, { Component } from 'react';
import ErrModal from './ErrorModal';
import NextBtn from './NextButton';

class SweetDrink extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isModalOpen: false,
			isBadDrinkOpen: false,
			isMedDrinkOpen: false,
			isGoodDrinkOpen: false,
			modalMess: null
		}

		this.toggleModal = this.toggleModal.bind(this);
		this.toggleBadDrink = this.toggleBadDrink.bind(this);
		this.toggleMedDrink = this.toggleMedDrink.bind(this);
		this.toggleGoodDrink = this.toggleGoodDrink.bind(this);
	}

	toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
    }

    toggleBadDrink () {
    	this.setState({
          isBadDrinkOpen: !this.state.isBadDrinkOpen
        });
    }

    toggleMedDrink () {
    	this.setState({
          isMedDrinkOpen: !this.state.isMedDrinkOpen
        });
    }

    toggleGoodDrink () {
    	this.setState({
          isGoodDrinkOpen: !this.state.isGoodDrinkOpen
        });
    }

	render(){
		if(this.props.currentStep !== this.props.order){
			return null;
		};

		const next = () => {
			if(this.props.drink < 0){
				this.setState({
					modalMess: "Please answer the question before proceeding."
				});
				this.toggleModal();
	        } else {
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
						<p>In the last 7 days, how many times did you drink sweetened drinks or fruit juice?</p>
					</div>
					<div className="col-12 col-md-4">
						<button 
							onClick={() => {this.props.handleState('drink', 0); this.toggleGoodDrink()}}
							className={this.props.drink===0 ? chosenBtnCss : baseBtnCss}
							>
							<img className="icon" src="assets/images/icons8-orange-soda-64.png" alt="soda" />
							<p>Less than 3</p>
						</button>
					</div>
					<div className="col-12 col-md-4">
						<button 
							onClick={() => {this.props.handleState('drink', 1); this.toggleMedDrink()}}
							className={this.props.drink===1 ? chosenBtnCss : baseBtnCss}
							>
							<img className="icon" src="assets/images/icons8-orange-soda-64.png" alt=""/>
		                    <img className="icon" src="assets/images/icons8-soda-64.png" alt="soda" />
		                    <br />
		                    <img className="icon" src="assets/images/icons8-milkshake-64.png" alt="milkshake"/>
		                    <img className="icon" src="assets/images/icons8-cola-64.png" alt=""/>
							<p>3 to 5</p>
						</button>
					</div>
					<div className="col-12 col-md-4">
						<button 
							onClick={() => {this.props.handleState('drink', 2); this.toggleBadDrink()}}
							className={this.props.drink===2 ? chosenBtnCss : baseBtnCss}
							> 
							<img className="icon" src="assets/images/icons8-orange-soda-64.png" alt="" />
		                    <img className="icon" src="assets/images/icons8-soda-64.png" alt="soda" />
		                    <img className="icon" src="assets/images/icons8-milkshake-48.png" alt="" />
		                    <br />
		                    <img className="icon" src="assets/images/icons8-milkshake-64.png" alt="milkshake" />
		                    <img className="icon" src="assets/images/icons8-cola-64.png" alt=""/>
		                    <img className="icon" src="assets/images/icons8-orange-soda-64-1.png" alt="juice" />
							<p>More than 5</p>
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
					isModalOpen={this.state.isBadDrinkOpen}
					toggleModal={this.toggleBadDrink}
					modalMess={`It's time to make some changes. 
					            Start by choosing drinks with less sugar. 
					            Look for the healthier choice logo on canned or packaged drinks, 
					            or ask for less sugar when buying tea or coffee. 
					            Better still, choose water!`}
					modalTitle={'Health Advice'}
					className={'warn'}
				/>
				<ErrModal 
					isModalOpen={this.state.isMedDrinkOpen}
					toggleModal={this.toggleMedDrink}
					modalMess={`Sugar in drinks increases your calorie intake 
						        without making you feel full. Water is your best choice! 
						        Or, choose drinks with no or less sugar content whenever possible.`}
					modalTitle={'Health Advice'}
					className={'moderate'}
				/>
				<ErrModal 
					isModalOpen={this.state.isGoodDrinkOpen}
					toggleModal={this.toggleGoodDrink}
					modalMess={`Choose water instead of sweetened drinks whenever possible.`}
					modalTitle={'Fantastic!'}
					className={'good'}
				/>
			</div>
		);
	}
}

export default SweetDrink;