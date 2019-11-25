import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import NextBtn from './NextButton';
import Chatbox from './Chatbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const gen = require('random-seed');
const rand = gen();
const seedBMI = 'seedBMI' + rand(1000),
	  seedActivities = 'seedActivities' + rand(1000);

class Message extends Component {
	constructor(props) {
        super(props);

        this.state = {
    		countedClicker : false,
    		isLargerText: false
    	}

    	this.toggleLargerText = this.toggleLargerText.bind(this);
    	this.toggleChat = this.toggleChat.bind(this);
    }

    handleClick = (linkName) => {
    	if (!this.props.counted[linkName]) {
			this.props.postCount(linkName);
			this.props.handleCounted(linkName);
		}
    }

    toggleLargerText() {
    	this.setState ({
    		isLargerText: !this.state.isLargerText
    	})
    }

    toggleChat = () => {
        this.setState({
            showChat: !this.state.showChat
        })
    }

	render(){
		if(this.props.currentStep !== this.props.order){
			return null;
		};

		const { race, ageNow, bmiClass, smoke, family, htn, gesDiab, veg, drink, exercise } = this.props;
		
		const BMIMsg = (props) => {
			const randBMI = gen(seedBMI);

			var msgBMI = null;

			switch(bmiClass) {
				case 0:
					msgBMI = (<span>
							    Your BMI is in the low risk range. 
						        A BMI between 18.5 - 22.9 is considered healthy. 
	                  			Perhaps you could consider{' '} 
	                            {["increasing protein in your diet ",
	                              "adding more protein to your meals ",
	                              "consuming more protein in your meals "][randBMI(3)]}  
	                  			such as from{' '} 
	                   			{["lean chicken.", "fishes.", "nuts and beans."][randBMI(3)]}
                   			</span>);
                   	break;
				case 1: 
					msgBMI = (<span>
								Your BMI is in the healthy range.{' '} 
	                            {["Keep it up with regular physical activities and a healthy diet including enough water. ",
	                              "Please keep it up with regular exercise and a healthy diet including adequate water. ",
	                              "Please maintain your good shape with regular exercise and a healthy diet with sufficient water. "][randBMI(3)]}
                            </span>);
					break;
				case 2: 
					msgBMI = (<span>
								Your BMI is in the moderate risk range.{' '}  
	                            {["Luckily, ", "Fortunately, "][randBMI(2)]} 
	                            you just need to lose some weight to be back in the healthy weight range. 
	                            If you snack frequently, you can switch to healthier alternatives such as{' '}
	                            {["fruits ", "dark chocolate ", "mixed nuts "][randBMI(3)]} 
	                            or go for healthier cooking options such as baked or steamed food.
                            </span>);
					break;
				case 3: 
					msgBMI = (<span>
								Your BMI is in the high risk range. 
	                            Having increased body fat puts one at risk for diabetes and other health conditions. 
	                            You can decrease the amount of saturated fat in the diet, 
	                            usually from red meat and fried foods, and increase the amount of wholegrains. 
	                            If you snack frequently, you can switch to healthier alternatives 
	                            such as nuts or dark chocolate  
	                            or go for healthier cooking options such as baked or steamed food.
                            </span>);
					break;
				default:
					msgBMI = null;

			}

			return (
				<p>{msgBMI}</p> 
			);
		}

		const SmokeMsg = () => {
			if(smoke === 0)
				return null;
			
			var tran = null;
			var msgSmoke = null;

			switch(bmiClass) {
				case 1:
					tran = (<span>Still, </span>);
					break;
				default:
					tran = (<span>Moreover, </span>);
			}

			const smokeLink = (<a  className="health-link"
			                       href="https://www.healthhub.sg/live-healthy/422/howtoquit" 
							       target="_blank" rel="noopener noreferrer" 
							       onClick={() =>  {this.handleClick('smoke')}}>here</a>);

			msgSmoke = (<span>
							as you have reported that you are a smoker, please consider   
				            quitting. It is the small victories that count. Do not give up.  
				            There are smoking cessation services island-wide, such as at 
				            polyclinics, hospitals and pharmacies. 
				            You can make an appointment or ring Quitline at 1800-438-2000.  
				            We also have some resources that you can check out{' '}  
				            {smokeLink}
				           . It helps too if you tell your family and friends about your decision to quit, 
				           as their support will definitely motivate you.
			           	</span>);

			return (
				<p>{tran} {msgSmoke}</p> 
			);
		}

		const MedicalMsg = () => {
			//Part 1
			var tran = null;
			var msgMed1 = null;

  			if (gesDiab === 1 && htn === 1) {
  				msgMed1 = (<span>
  								women with other chronic diseases and a history of
                                Gestational Diabetes or PCOS are more likely to get diabetes.
  					       </span>);
  			} else if (gesDiab === 1) {
  				msgMed1 = (<span>
  								women with Gestational Diabetes or PCOS are more likely to get diabetes.
  					       </span>);
  			} else if (htn === 1) {
  				msgMed1 = (<span>
  								people with other chronic diseases are more likely to get diabetes.
  					       </span>);
  			} 

  			if (msgMed1) {
  				if (bmiClass === 1 && smoke === 0){
					tran = <span>Still, </span>
  				} else {
  					tran = <span>In addition, </span>
  				}
  				
  			} 

			//Part 2
			var msgMed2 = null;

  			if (gesDiab === 1 || htn === 1) {
  				if (family === 1 && bmiClass >= 2) {
  					msgMed2 = (<span>
			  					Your family history of diabetes plus your excess weight puts you at even higher risk.
                 		      </span>);
  				} else if (family === 1) {
  					msgMed2 = (<span>
			  					Your family history of diabetes puts you at even higher risk.
                 		      </span>);
  				}
  			} 

			//Part 3
			var msgMed3 = null;

  			if (gesDiab === 0 && htn === 0 && family === 1) {
  				if (bmiClass >= 2) {
  					msgMed3 = (<span>
	  							    Furthermore, as you have a family history of diabetes, 
	  							    please monitor your blood sugar level. 
	  							    Your excess weight puts you at heightened risk.
				                    You can do so at polyclinics or by visiting your GP. 
				                    Or you can buy a blood sugar monitor.
  						       </span>);
  				} else {
  					msgMed3 = (<span>
	  							    Furthermore, as you have a family history of diabetes, please
			                        monitor your blood sugar level. You can do so at
			                        polyclinics or by visiting your GP. Or you can buy a blood sugar monitor.
  						       </span>);
  				}
  			} else if (gesDiab === 1 && htn === 1 && family === 1) {
				if (ageNow >= 40) {
					msgMed3 = (<span>
	  							    Furthermore, please monitor your blood sugar level closely, especially
					                since you are above age 40. You can do so at polyclinics or
					                by visiting your GP. Or you can buy a blood sugar monitor.
  						       </span>);
				} else {
					msgMed3 = (<span>
	  							    Furthermore, please monitor your blood sugar level closely. You can
			                        do so at polyclinics or by visiting your GP. Or you can
			                        buy a blood sugar monitor.
  						       </span>);
				}
  			}

			return (
				<p>{tran} {msgMed1} {msgMed2} {msgMed3}</p> 
			);
		}

		const ScreenMsg = () => {
			var msgScreen = null;

  			const screenLink = (<span>
  									Please go for <a className="health-link"
  									                 href="https://www.healthhub.sg/programmes/61/Screen_for_Life" 
								                     target="_blank" rel="noopener noreferrer" 
								                     onClick={() => {this.handleClick('screen');}}>health screening</a> 
			                        {' '}to know more about your health status as you are at higher risk of getting diabetes
  								</span>);	

  			if (bmiClass > 1 || gesDiab === 1 || htn === 1 || family === 1) {
  				msgScreen = (<span>{screenLink}.</span>);
  			} else if (ageNow >= 40 && (race === 1 || race === 2)) {
  				msgScreen = (<span>{screenLink} due to your age and your ethnic group.</span>);
  			} else if (ageNow >= 40) {
  				msgScreen = (<span>{screenLink} due to your age.</span>);
  			} else if (race === 1 || race === 2) {
				msgScreen = (<span>{screenLink} due to your ethnic group.</span>);
  			}

  			return (
				<p>{msgScreen}</p>
			);
		}

		const VegMsg = () => {
			var msgVeg = null;

			const score = smoke + family + gesDiab + htn;
  
			if (veg === 2) {
				if (score >= 4 && bmiClass === 0) {
					msgVeg = (
						<span>
							Besides, as your risk is rather high and you have reduced nutrition,
		                    it could be easier to fall sick with diabetes and other
		                    ailments. As such, try to incorporate fruits or vegetables into
		                    every meal. It will reduce your risk of getting
		                    constipation and boost your immune system.
						</span>
					);
				} else if (bmiClass >= 2) {
					msgVeg = (
						<span>
							Besides, try to incorporate a fruit or vegetable into every meal.
		                    It will reduce your risk of getting constipation and
		                    boost your immune system. As well, fibre contents will help with
		                    satiety, making you rely less on snacks or large meals.
						</span>
					);
				} else if (bmiClass === 0) {
					msgVeg = (
						<span>
							Besides, there is a danger that you might not be getting enough
		                    nutrition due to your low body weight and little fruit and
		                    vegetables consumption. Try to incorporate a fruit or vegetables
		                    into every meal. It will reduce your risk of getting
		                    constipation and boost your immune system.
						</span>
					);	
				} else if (bmiClass === 1) {
					msgVeg = (
						<span>
							Besides, try to incorporate a fruit or vegetables into every meal.
		                    It will reduce your risk of getting constipation 
		                    and boost your immune system.
						</span>
					);
				}
			} else if (veg === 0 && drink !== 0) {
				if (bmiClass === 1 && score === 0) {
					msgVeg = (
						<span>
							Moreover, it is awesome that you limit your sweetened
		                    drink intake. Carry on!
						</span>
					);
				} else {
					msgVeg = (
						<span>
							It is awesome though that you mostly have 4 servings of vegetables
                         	or fruits daily. Carry on!
						</span>
					);
				}
			}

			return (
				<p>{msgVeg}</p>
			);
		}

		const DrinkMsg = () => {
			var msgDrink = null;

			const score = smoke + family + gesDiab + htn + veg;
  
  			if (drink === 1 && bmiClass >= 2) {
				msgDrink = (
					<span>
						On top of that, please consider swapping a sweetened drink for plain water
	                    one time during the week. Additionally, try and ask for less
	                    sugar when ordering tea, coffee, milo, and try cutting sodas
	                    out of your diet altogether. As well, you could eat
	                    the whole fruits instead of drinking juices, as this increases
	                    the nutritional value.
					</span>
				);
  			} else if (drink === 2) {
  				if (score === 0) {
					msgDrink = (
						<span>
							Nevertheless, consuming excess sugar puts you at increased risk of
	                        diabetes. Try swapping a sweetened drink with plain water,
	                        tea or coffee with less sugar at least twice a week.
						</span>
					);
  				} else {
					msgDrink = (
						<span>
							On top of that, consuming excess sugar puts you at increased risk of
		                    diabetes. Try swapping a sweetened drink with plain water,
		                    tea or coffee with less sugar at least twice a week.
						</span>
					);
  				}
  			} else if (drink === 0) {
  				if (bmiClass === 1 && score === 0) {
  					msgDrink = (
						<span>
							Moreover, you care for your health by having 
		                    4 servings of fruits and vegetables daily as well as limiting 
		                    sweetened beverage intake. Excellent!
						</span>
					);
  				} else if (veg === 0 && bmiClass >= 2) {
					msgDrink = (
						<span>
							Nevertheless, you have done well by mostly by having 
		                    4 servings of fruits and vegetables daily as well as limiting 
		                    sweetened beverage intake. Awesome! Carry on taking responsibility for your
		                    health. Please consider eating smaller meals, while incorporating
		                    fruits and vegetables frequently through the day, too.
						</span>
					);
  				} else if (veg === 0) {
					msgDrink = (
						<span>
							Nevertheless, you care for your health by having 
		                    4 servings of fruits and vegetables daily as well as limiting 
		                    sweetened beverage intake. Awesome! Carry on taking responsibility
		                    for your health.
						</span>
					);
  				} else if ((score - veg) === 0 && bmiClass === 1) {
					msgDrink = (
						<span>
							Moreover, it is awesome that you limit your sweetened
                            drink consumption. It could be even better if you add more 
                            fruits and vegetables to your meals!
						</span>
					);
  				} else {
					msgDrink = (
						<span>
							Nevertheless, it is awesome that you limit your sweetened
		                    drink intake. Keep going!
						</span>
					);					
  				}
  			}

  			return (
				<p>{msgDrink}</p>
			);
		}

		const ActiveMsg = () => {
			const randActivities = gen(seedActivities);
			var tran = null;
			var msgActive = null;

  			const score = smoke + family + gesDiab + htn + veg + drink;
  
			if (exercise === 0) {
				tran = (<span>
							Finally,{' '}
							{["good job", "nice job", "good effort", "nice effort"][randActivities(4)]}
							{' '}in staying active!
						</span>);

				if (score >= 6) {
					msgActive = (<span>
									You're on your journey to keep your risk of diabetes at bay. Do ensure that 
			                        your doctor clears you for any physical activity.
								</span>);
				} else if (bmiClass === 3) {
					msgActive = (<span>
									You're on your journey to healthy weight loss. 
					                Do ensure that your doctor clears you for any physical activity.
								</span>);					
				} else if (bmiClass === 2) {
					msgActive = (<span>
									Try increasing your physical activity level a little every week. 
									Do ensure that your doctor clears you for any physical activity.
								</span>);
				} else {
					msgActive = (<span>
									Ensure you consume enough protein and carbohydrates to fuel your body for
                   					all the physical activities.
								</span>);
				}
			} else {
				const activityLink = (<a className="health-link"
										 href="https://www.healthhub.sg/programmes" 
										 target="_blank" rel="noopener noreferrer"
										 onClick={() => {this.handleClick('active');}}>our programmes</a>);

				if (exercise === 1) {
					msgActive = (<span>
									you could try increasing your physical activity
			                        level by going on an after meal walk with your family or pet, or by walking
			                        to the MRT station instead of taking a bus. Also, you can consider joining{' '}
			                        {activityLink}
			                        . Small lifestyle changes have been shown to cause a significant reduction in
			                        chronic diseases.
								</span>);
				} else if (exercise === 2) {
					if (bmiClass >= 2) {
						msgActive = (<span>
										a sedentary lifestyle puts one at risk for diabetes.
				                       	Try walking to somewhere nearby instead of driving. Every step
				                       	counts! Also, you can consider joining{' '}
				                       	{activityLink}
				                       	. Do ensure that your doctor clears you for any physical activity.
									</span>);
					} else {
						msgActive = (<span>
										a sedentary lifestyle puts one at risk for diabetes.
	                          			Try walking to somewhere nearby instead of
	                          			driving. Also, you can consider joining{' '}
	                          			{activityLink}
	                          			. Every step counts!
									</span>);
					}
				} else {
					msgActive = null;
				}

				if (!msgActive) {
					tran = null;
				} else if (bmiClass === 1 && score === 0) {
					tran = (<span>Still, </span>);
				} else {
					tran = (<span>Finally, </span>);
				}
			}

			return (
				<p>{tran} {msgActive}</p>
			);
		}

		const next = () => {
			if (this.props.counted.screen || this.props.counted.smoke || this.props.counted.active) {
				if (!this.state.countedClicker) {
					this.props.postCount('clicker');
					this.setState({
						countedClicker: true
					})
				}
			}
			this.props._next();
		};

		return(
			<div>
				<div className="container">
					<div className="page-padding-top"></div>
					<div className="row">
						<div className="col-12 msg-title">
							Health advices for you
		                    <button className="btn chat-btn" onClick={() => {this.toggleChat()}}
		                    		data-tip={`<div style="font-size: 16px"> Click to ask <br /> questions about diabetes</div>`} data-html={true}>
		                        <FontAwesomeIcon icon={['fas', 'comments']} size="2x" />
		                    </button> 
			                <ReactTooltip html={true} />
						</div>
					</div>
					<div className="row">
						<div className="col-2 text-center">
							<button className="btn zoom-icon" onClick={this.toggleLargerText} 
							        data-tip={`<div style="font-size: 16px"> Toggle <br /> Bigger Font</div>`} data-html={true}>
								<span className="smallerA">A</span><span className="largerA">A</span>
							</button>
							<ReactTooltip html={true} />
						</div>
						<div className={"col-10 offset-1 msg-frame" + (this.state.isLargerText ? " lg-text" : "")}>
							<BMIMsg />
							<SmokeMsg />
							<MedicalMsg />
							<ScreenMsg />
							<VegMsg />
							<DrinkMsg />
							<ActiveMsg />
						</div>
					</div>
					<div>
	                    <div style ={{display: this.state.showChat ? "" : "none"}}>
	                      	<Chatbox 
	                      		toggleChat={this.toggleChat}
	                      		ageNow ={this.props.ageNow}
	                      		race={this.props.race}
	                      		gender={this.props.gender}
	                      		bmiClass={this.props.bmiClass} 
	                      	/>
	                    </div>      
	                </div>  
					<NextBtn next={next} />
				</div>
			</div>
		);
	}
}

export default Message;