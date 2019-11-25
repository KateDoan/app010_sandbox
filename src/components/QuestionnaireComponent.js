import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postPredict, postCount } from '../redux/ActionCreators';
import Page0 from './Page0';
import StartComponent from './StartComponent';
import GenderRace from './GenderRace';
import BMIForm from './BMIForm';
import BMIFeedback from './BMIFeedback';
import Smoking from './Smoking';
import MedProfile from './MedProfile';
import FruitVeg from './FruitVeg';
import SweetDrink from './SweetDrink';
import Activities from './Activities';
import Plot from './Plot';
import Message from './Message';
import EndComponent from './EndComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const mapStateToProps = state => {
    return {
      ages : state.ages
    }
}

const mapDispatchToProps = (dispatch) => ({
  postPredict: (gender, race, age, bmi, smoke, veg, exercise) => dispatch(postPredict(gender, race, age, bmi, smoke, veg, exercise)),
  postCount: (counterName) => dispatch(postCount(counterName))
});

class Questionnaire extends Component {
    constructor(props) {
        super(props)
        // The initial states
        this.state = {
            currentStep: 0,
    	    gender: -1,
            race: -1,
            ageNow: '',
            height: '',
            weight: '',
            bmi: -1,
            bmiClass: -1, 
            smoke: -1,
            family: -1,
            htn: -1,
            gesDiab: -1,
            veg: -1,
            drink: -1,
            exercise: -1,
            touched: {
                ageNow: false,
                height: false,
                weight: false
            },
            counted: {
                user: false,
                screen: false,
                smoke: false,
                active: false
            },
            showChat: false
        };

        // Bind the submission to handle changes
        this._next = this._next.bind(this);
        this._prev = this._prev.bind(this);
        this._refresh = this._refresh.bind(this);
        this.handleState = this.handleState.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleCounted = this.handleCounted.bind(this);
    }

    _next = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 10 ? 11 : (currentStep + 1);
        this.setState({
          currentStep: currentStep
        })
    };
    
    _prev = () => {
        let currentStep = this.state.currentStep;
        currentStep = currentStep <= 1 ? 1 : (currentStep - 1);
        this.setState({
          currentStep: currentStep
        })
    };

    _refresh = () => {
        window.location.reload(false);
     }

    handleState(stateName, value) {
        this.setState ({
            [stateName]: value 
        });
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true },
        });
    }

    handleCounted(field) {
        this.setState({
            counted: { ...this.state.counted, [field]: true } 
        });
    }

    validateBMIForm (ageNow, height, weight){
        const errors = {
            ageNow: '',
            height: '',
            weight: '',
            bmi: ''
        };

        if(isNaN(ageNow) || ageNow < 18 || ageNow > 100) {
            errors.ageNow = 'Please enter a number between 18 and 100 years old.';
        }

        if(isNaN(height) || height <= 20 || height > 300) {
            errors.height = 'Please enter a valid number for height (cm).';
        }

        if(isNaN(weight) || weight <= 20 || weight > 300) {
            errors.weight = 'Please enter a valid number for weight (kg).';
        }

        if (this.state.touched.height && this.state.touched.weight && errors.height==='' && errors.weight===''){
            var currBMI = weight/(Math.pow(height/100, 2));
            if (isNaN(currBMI) || currBMI > 40 || currBMI < 15) {
                errors.bmi = (<span>Our method only works for BMI between 15 and 40.<br />
                                    Please re-enter your height or weight.</span>);
            }
        }

        return errors;
    }

    render(){
        const errors = this.validateBMIForm(this.state.ageNow, this.state.height, this.state.weight);

        const isPlotNull = ((this.props.ages.errMess) ||
                            (this.state.currentStep >= 9 && !this.props.ages.isLoading &&
                                (!this.props.ages.ages || !this.props.ages.ages.expectedAge || !this.props.ages.ages.healthyAge ||
                                  this.state.ageNow > this.props.ages.ages.expectedAge ||
                                  this.props.ages.ages.expectedAge > this.props.ages.ages.healthyAge))
                           );

  	    return(
            <div>
                <div className={this.state.currentStep <= 1 ? null : "nav-background fixed-bottom"}></div>
                <Page0
                    order={0}
                    currentStep={this.state.currentStep} 
                    _next={this._next}
                />
                <StartComponent
                    order={1}
                    currentStep={this.state.currentStep} 
                    _next={this._next}
                />
                <GenderRace 
                    order={2}
                    currentStep={this.state.currentStep} 
                    handleState={this.handleState}
                    gender={this.state.gender}
                    race={this.state.race}
                    _next={this._next}
                />
                <BMIForm
                    order={3}
                    currentStep={this.state.currentStep} 
                    handleState={this.handleState}
                    handleBlur={this.handleBlur}
                    errors={errors}
                    ageNow={this.state.ageNow}
                    height={this.state.height}
                    weight={this.state.weight}
                    touched={this.state.touched}
                />
                <BMIFeedback
                    order={3}
                    currentStep={this.state.currentStep}
                    handleState={this.handleState}
                    touched={this.state.touched}
                    errors={errors}
                    height={this.state.height}
                    weight={this.state.weight}
                    _next={this._next}
                />
                <Smoking
                    order={4}
                    currentStep={this.state.currentStep}
                    smoke={this.state.smoke}
                    handleState={this.handleState}
                    _next={this._next}
                />
                <MedProfile
                    order={5}
                    currentStep={this.state.currentStep}
                    handleState={this.handleState}
                    gender={this.state.gender}
                    family={this.state.family}
                    gesDiab={this.state.gesDiab}
                    htn={this.state.htn}
                    _next={this._next}
                />
                <FruitVeg
                    order={6}
                    currentStep={this.state.currentStep}
                    handleState={this.handleState}
                    veg={this.state.veg}
                    _next={this._next}
                />
                <SweetDrink
                    order={7}
                    currentStep={this.state.currentStep}
                    handleState={this.handleState}
                    drink={this.state.drink}
                    _next={this._next}
                />
                <Activities
                    order={8}
                    currentStep={this.state.currentStep}
                    handleState={this.handleState}
                    handleCounted={this.handleCounted}
                    postPredict={this.props.postPredict}
                    postCount={this.props.postCount}
                    gender={this.state.gender}
                    race={this.state.race}
                    ageNow={this.state.ageNow}
                    bmi={this.state.bmi}
                    smoke={this.state.smoke}
                    veg={this.state.veg}
                    exercise={this.state.exercise}
                    countedUser={this.state.counted.user}
                    _next={this._next}
                />
                <Plot
                    order={9} 
                    currentStep={this.state.currentStep} 
                    ageNow={this.state.ageNow}
                    isLoading={this.props.ages.isLoading}
                    errMess={this.props.ages.errMess}
                    ages={this.props.ages.ages} 
                    _next={this._next}
                /> 
                <Message
                    order={isPlotNull ? 9 : 10}
                    currentStep={this.state.currentStep}
                    handleState={this.handleState}
                    handleCounted={this.handleCounted}
                    postCount={this.props.postCount}
                    race={this.state.race}
                    gender={this.state.gender}
                    ageNow={this.state.ageNow}
                    bmiClass={this.state.bmiClass}
                    smoke={this.state.smoke}
                    family={this.state.family}
                    htn={this.state.htn}
                    gesDiab={this.state.gesDiab}
                    veg={this.state.veg}
                    drink={this.state.drink}
                    exercise={this.state.exercise}
                    counted={this.state.counted}
                    _next={this._next}
                />
                <EndComponent
                    order={isPlotNull ? 10 : 11}
                    currentStep={this.state.currentStep} 
                />
                <div className="page-padding-bottom"></div>
                <div>
                { this.state.currentStep <= 1 ?
                    null :
                    (
                        <React.Fragment>
                            <div className="col-5 col-md-2 offset-md-3 fixed-bottom">
                                <button 
                                    onClick={this._prev}
                                    className={'btn butt-nav previous'}
                                    ><span><FontAwesomeIcon icon={['fas', 'backward']} size="2x" /></span><p>Go Back</p>
                                </button>
                            </div>
                            <div className="col-5 offset-7 col-md-2 offset-md-7 fixed-bottom">
                                <button 
                                    onClick={this._refresh}
                                    className={'btn butt-nav refresh'}
                                    ><span><FontAwesomeIcon icon={['fas', 'undo']} size="2x" /></span><p>Start Over</p>
                                </button>
                            </div>
                        </React.Fragment>
                    )
                }
                </div>
            </div>
  	     );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Questionnaire);