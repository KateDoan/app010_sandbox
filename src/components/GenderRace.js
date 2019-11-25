import React, { Component } from 'react';
import ErrModal from './ErrorModal';
import NextBtn from './NextButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class GenderRace extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isModalOpen: false,
			isRaceModalOpen: false,
			modalMess: null
		}

		this.toggleModal = this.toggleModal.bind(this);
		this.toggleRaceModal = this.toggleRaceModal.bind(this);
	}

	toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
    }

    toggleRaceModal() {
    	this.setState({
          isRaceModalOpen: !this.state.isRaceModalOpen
        });
    }

	render(){
		if(this.props.currentStep !== this.props.order){
			return null;
		};

		const next = () => {
			if(this.props.gender < 0){
				this.setState({
					modalMess: "Please select the gender."
				});
				this.toggleModal();
	        } else {
	            if(this.props.race < 0){
	            	this.setState({
						modalMess: "Please select the race."
					});
					this.toggleModal();
	            } else {
	                this.props._next();
	            }
	        }
		};

		const baseBtnCss = 'butt';
		const pinkBtnCss = 'butt pink';
		const chosenBtnCss = 'butt chosen';

		return(
			<div className="container">
				<div className="page-padding-top"></div>
				<div className="row">
					<div className="col-12 col-md-8 offset-md-2 question">
						<p>What is your gender?</p>
					</div>
					<div className="col-6 col-md-3 offset-md-3">
						<button  
							onClick={() => {this.props.handleState('gender', 1);
											this.props.handleState('gesDiab', 0)}}
							className={this.props.gender===1 ? chosenBtnCss : baseBtnCss}
							><span><FontAwesomeIcon icon={['fas', 'mars']} size="2x" /></span><p>Male</p></button>
					</div>
					<div className="col-6 col-md-3">
						<button onClick={() => {this.props.handleState('gender', 0);
												this.props.handleState('gesDiab', -1)}}
							className={this.props.gender===0 ? chosenBtnCss : pinkBtnCss}
							><span><FontAwesomeIcon icon={['fas', 'venus']} size="2x" /></span><p>Female</p></button>
					</div>
				</div>
				<div className="row">
					<div className="col-12 col-md-8 offset-md-2">
						<hr />
					</div>
				</div>
				<div className="row">
					<div className="col-12 question">
						<p>Which ethnic group do you belong to?</p>
					</div>
					<div className="col-6 col-md-3 offset-md-3">
						<button 
							onClick={() => this.props.handleState('race', 0)}
							className={this.props.race===0 ? chosenBtnCss : pinkBtnCss}
							><span>Chinese</span></button>
					</div>
					<div className="col-6 col-md-3">
						<button 
							onClick={() => {this.props.handleState('race', 1); this.toggleRaceModal()}}
							className={this.props.race===1 ? chosenBtnCss : pinkBtnCss}
							><span>Malay</span></button>
					</div>
				</div>
				<div className="row">
					<div className="col-6 col-md-3 offset-md-3">
						<button
							onClick={() => {this.props.handleState('race', 2); this.toggleRaceModal()}}
							className={this.props.race===2 ? chosenBtnCss : pinkBtnCss}
							><span>Indian</span></button>
					</div>
					<div className="col-6 col-md-3">
						<button 
							onClick={() => this.props.handleState('race', 3)}
							className={this.props.race===3 ? chosenBtnCss : pinkBtnCss}
							><span>Other</span></button>
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
					isModalOpen={this.state.isRaceModalOpen}
					toggleModal={this.toggleRaceModal}
					modalMess={'Your ethnic group is at higher risk of getting diabetes.'}
					modalTitle={'Take care'}
					className={'warn'}
				/>
			</div>
		);
	}
}

export default GenderRace;