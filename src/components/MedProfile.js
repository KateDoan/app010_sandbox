import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip'
import ErrModal from './ErrorModal';
import NextBtn from './NextButton';

class MedProfile extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isModalOpen: false,
			isFamilyOpen: false,
			isGesOpen: false,
			isHtnOpen: false,
			modalMess: null
		}

		this.toggleModal = this.toggleModal.bind(this);
		this.toggleFamilyModal = this.toggleFamilyModal.bind(this);
		this.toggleGesModal = this.toggleGesModal.bind(this);
		this.toggleHtnModal = this.toggleHtnModal.bind(this);
	}

	toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
    }

    toggleFamilyModal() {
        this.setState({
          isFamilyOpen: !this.state.isFamilyOpen
        });
    }

    toggleGesModal() {
        this.setState({
          isGesOpen: !this.state.isGesOpen
        });
    }

    toggleHtnModal() {
        this.setState({
          isHtnOpen: !this.state.isHtnOpen
        });
    }

	render(){
		if(this.props.currentStep !== this.props.order){
			return null;
		};

		const next = () => {
			if (this.props.family < 0) {
				this.setState({
					modalMess: "Please answer the question regarding your family diabetic history."
				});
				this.toggleModal();
	        } else if((this.props.gender === 0) && (this.props.gesDiab < 0)) {
	        	this.setState({
					modalMess: "Please answer the question regarding gestational diabetes."
				});
				this.toggleModal();
            } else if(this.props.htn < 0) {
            	this.setState({
					modalMess: "Please answer the question regarding hypertension."
				});
				this.toggleModal();
            } else {
            	this.props._next();
            }
		};

		const baseBtnCss = 'butt';
		const chosenBtnCss = 'butt chosen';

		const FamilyQuestion = () => {
			return(
				<div className="row">
					<div className="col-12 col-md-8 offset-md-2 question">
						<p>Does any of your close relatives (parents, siblings, or children) have diabetes?</p>
					</div>
					<div className="col-6 col-md-3 offset-md-3 lg-text">
						<button 
							onClick={() => {this.props.handleState('family', 1); this.toggleFamilyModal()}}
							className={this.props.family===1 ? chosenBtnCss : baseBtnCss}
							><span>Yes</span>
						</button>
					</div>
					<div className="col-6 col-md-3 lg-text">
						<button 
							onClick={() => this.props.handleState('family', 0)}
							className={this.props.family===0 ? chosenBtnCss : baseBtnCss}
							><span>No</span>
						</button>
					</div>
				</div>
			);
		};

		const GesDiabQuestion = () => {
			if (this.props.gender === 1) {
				return null;
			}

			const gesInfo = `<div style="font-size: 16px; width: 250px;"> 
							    Gestational Diabetes is a condition in which  
								a woman without diabetes develops high blood pressure  
								during pregnancy.</div>`;

			const pcosInfo = `<div style="font-size: 16px; width: 250px;">  
								Polycystic Ovary Syndrome (PCOS) is a condition that affects a woman’s hormone levels. 
		                        Women with PCOS produce higher-than-normal amounts of male hormones.<br />
		                        This hormone imbalance can contribute to long-term health problems         
		                        like diabetes and heart diseases.</div>`;

			return(
				<div className="row">
					<div className="col-12 col-md-8 offset-md-2 question">
						<p>Have you ever been diagnosed to have{' '} 
						<span className={"technical-term"} data-tip={gesInfo} data-html={true}>Gestational Diabetes </span> 
						or{' '}
						 <span className={"technical-term"} data-tip={pcosInfo} data-html={true}>Polycystic Ovary Syndrome (PCOS)</span>?</p>
						<ReactTooltip html={true}/>
					</div>
					<div className="col-6 col-md-3 offset-md-3 lg-text">
						<button 
							onClick={() => {this.props.handleState('gesDiab', 1); this.toggleGesModal()}}
							className={this.props.gesDiab===1 ? chosenBtnCss : baseBtnCss}
							><span>Yes</span>
						</button>
					</div>
					<div className="col-6 col-md-3 lg-text">
						<button 
							onClick={() => this.props.handleState('gesDiab', 0)}
							className={this.props.gesDiab===0 ? chosenBtnCss : baseBtnCss}
							><span>No</span>
						</button>
					</div>
				</div>
			);
		};

		const HtnQuestion = () => {
			return(
				<div className="row">
					<div className="col-12 col-md-8 offset-md-2 question">
						<p>Have you ever been diagnosed by a Western-trained doctor to have High Blood Pressure or Cholesterol?</p>
					</div>
					<div className="col-6 col-md-3 offset-md-3 lg-text">
						<button 
							onClick={() => {this.props.handleState('htn', 1); this.toggleHtnModal()}}
							className={this.props.htn===1 ? chosenBtnCss : baseBtnCss}
							><span>Yes</span>
						</button>
					</div>
					<div className="col-6 col-md-3 lg-text">
						<button 
							onClick={() => this.props.handleState('htn', 0)}
							className={this.props.htn===0 ? chosenBtnCss : baseBtnCss}
							><span>No</span>
						</button>
					</div>
				</div>
			);
		};

		const HorizontalBreak = () => {
			return (
				<div className="row">
					<div className="col-12 col-md-8 offset-md-2">
						<hr />
					</div>
				</div>
			);
		}

		return(
			<div className="container">
				<div className="page-padding-top"></div>
				<FamilyQuestion />
				<div> {this.props.gender===0 ? <HorizontalBreak /> : null} </div>
				<GesDiabQuestion />
				<HorizontalBreak />
				<HtnQuestion />

				<NextBtn next={next} />

				<ErrModal 
					isModalOpen={this.state.isModalOpen}
					toggleModal={this.toggleModal}
					modalMess={this.state.modalMess}
					modalTitle={'You have skipped a question.'}
				/>
				<ErrModal 
					isModalOpen={this.state.isFamilyOpen}
					toggleModal={this.toggleFamilyModal}
					modalMess={<span>You are more likely to have pre-diabetes and develop diabetes
					            if you have a family history of diabetes.<br /><br />
					            It is recommended that you go for{' '} 
					            <a className="health-link" href="https://www.healthhub.sg/programmes/61/Screen_for_Life" 
					               target="_blank" rel="noopener noreferrer">health screening</a> to check your health status.
					            </span>}
					modalTitle={'Caution'}
					className={'warn'}
				/>
				<ErrModal 
					isModalOpen={this.state.isGesOpen}
					toggleModal={this.toggleGesModal}
					modalMess={<span>Women with a history of Gestational Diabetes and 
						        Polycystic Ovary Syndrome (PCOS) should go for regular{' '}  
						        <a className="health-link" href="https://www.healthhub.sg/programmes/61/Screen_for_Life" 
					               target="_blank" rel="noopener noreferrer">health screening</a> and follow-up with a doctor.
						        </span>}
					modalTitle={'Caution'}
					className={'warn'}
				/>
				<ErrModal 
					isModalOpen={this.state.isHtnOpen}
					toggleModal={this.toggleHtnModal}
					modalMess={<span>Having high blood pressure is associated 
						             with an increased risk of developing diabetes!<br /><br />
								Please go for{' '}  
								<a className="health-link" href="https://www.healthhub.sg/programmes/61/Screen_for_Life" 
					               target="_blank" rel="noopener noreferrer">health screening</a> to find out more.
							   </span>}
					modalTitle={'Caution'}
					className={'warn'}
				/>
			</div>
		);
	}
}

export default MedProfile;