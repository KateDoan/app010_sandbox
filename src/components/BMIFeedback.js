import React, { Component } from 'react';
import NextBtn from './NextButton';

class BMIFeedback extends Component {

	render(){
		const classifyBMI = (bmi) => {
			if(bmi < 18.5) {
				return {
							"class": 0,
					    	"cssClass": 'bad', 
					    	"msg":  (<span>Your BMI is in the Low Risk range for diabetes.<br />
				                           However, you are under the risk of nutritional
				                           deficiency diseases and osteoporosis.</span>)
				        };
			} else if(bmi < 23) {
				return {    
							"class": 1,
					        "cssClass": 'good', 
					        "msg":  (<span>Your BMI is in the healthy range.<br />
				                           Maintain your weight by balancing diet and exercise.</span>)
				        };
			} else if(bmi < 27) {
				return {
							"class": 2,
							"cssClass": 'moderate',
							"msg":  (<span>Your BMI is in the Moderate Risk range.<br />
				                           Aim to lose 5-10% of your weight over the next
				                           6-12 months for a heathier you.</span>)
				        };
			} else {
				return {
							"class": 3,
							"cssClass": 'bad', 
							"msg":  (<span>Your BMI is in the High Risk range.<br />
				                           You are at risk of numerous health problems including diabetes.
				                           Aim to lose 5-10% of your weight over the next 6-12 months.
				                           Lose weight to stay healthy.</span>)
				        };
			}
		}

		const props = this.props;

		if (this.props.currentStep !== this.props.order) { 
	      	return null;
	    }

		if(!props.touched.ageNow || !props.touched.height || !props.touched.weight){
			return null;
		}

		if(props.errors.ageNow || props.errors.height || props.errors.weight || props.errors.bmi){
			return null;
		}

		const bmi = (props.weight/Math.pow(props.height/100, 2.0)).toFixed(1);
		
		const bmiClass = classifyBMI(bmi);

		const cssClass = bmiClass.cssClass + ' bold';

		const next = () => {
			props.handleState('bmi', bmi);
			props.handleState('bmiClass', bmiClass.class);
			props._next();
		}

		return (
			<div className="container">
				<div className="row">
					<div className="col-10 offset-1 col-md-6 offset-md-3"> 
						<p> Your BMI is <span className={cssClass}>{bmi}</span> <span>kg/m<sup>2</sup></span> </p>
					</div>
				</div>
				<div className="row">
					<div className="col-10 offset-1 col-md-6 offset-md-3"> 
						<p className={cssClass}>{bmiClass.msg}</p>
					</div>
				</div>
				<NextBtn next={next} />
			</div>
			
		);
	}
	
}

export default BMIFeedback;
