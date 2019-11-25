export const generateAnswer = (question, ageNow, race, gender, bmiClass) => {
	
    question = question.toLowerCase().trim();
  
    if(new RegExp("\\babout(\\s)*\\bme\\b").test(question) ||
       new RegExp("\\babout(\\s)*\\bmyself").test(question) ||
       new RegExp("\\bmy(\\s)*\\binfo").test(question) ||
       new RegExp("\\bmy(\\s)*\\bprofil").test(question) ||
       new RegExp("\\bprediction").test(question)){
    	return(ansAboutMe(ageNow, race, gender, bmiClass));
    } else if(new RegExp("(\\bexampl.*\\ques)").test(question) ||
              new RegExp("(\\bwhat.*\\bask)").test(question)){
    	return(ansExampleQuestion());
    } else if(new RegExp("(\\bgluco)").test(question)){
     	return(ansGlucose());
    } else if(new RegExp("((\\binsul|bisul))").test(question)){
     	return(ansInsulin());
    } else if(new RegExp("(\\bbmi)").test(question) ||
              new RegExp("(\\bweig.*\\brang)").test(question)){
     	return(ansBMI());
  	} else if(new RegExp("(\\bpcos|cys|\\bpolyc)").test(question)){
    	return(ansPCOS());
 	} else if(new RegExp("(\\bhyper|\\bpressu|\\bhtn)").test(question)){
    	return(ansHypertension());
    } else if(new RegExp("((\\bcure|\\bcura))").test(question)){
     	return(ansCurable());
    } else if(new RegExp("((\\bmental|\\bstres))").test(question)){
     	return(ansMental());
    } else if(new RegExp("(\\bscreen|\\bcheck|\\bexamin\\bdiag)").test(question) ||
              new RegExp("(\\bclinic|\\bdoctor)").test(question) ||
              new RegExp("(\\bhow.*(\\bcan|\\bto).*(\\bknow))").test(question)){
     	return(ansScreen());
    } else if(new RegExp("((\\bpreval|\\bsinga))").test(question) ||
              new RegExp("(\\bhow\\.*(\\bcommon|\\bmany))").test(question)){
     	return(ansPrevalence());
    } else if(new RegExp("((\\bsmok|cig))").test(question)){
     	return(ansSmoke());
    } else if(new RegExp("((\\beat|\\bfood|\\bdiet|\\bmeal))").test(question)){
     	return(ansDiet());
    } else if(new RegExp("(\\bprotei)").test(question)){
     	return(ansProtein());
    } else if(new RegExp("(\\bcarboh)").test(question)){
     	return(ansCarbohydrate());
    } else if(new RegExp("(\\bveg|\\bfruit)").test(question)){
     	return(ansVegFruit());
    } else if(new RegExp("((\\bexercis|\\bactiv|\\bphys))").test(question)){
     	return(ansExercise());
    } else if(new RegExp("(\\btype(\\s*)\\b1)").test(question)){
     	return(ansType1());
    } else if(new RegExp("(\\btype(\\s*)\\b2)").test(question) ||
              new RegExp("(\\bd2m)").test(question)){
     	return(ansType2());
    } else if(new RegExp("(\\bgest)").test(question)){
     	return(ansGest());
    } else if(new RegExp("(\\btype)").test(question)){
     	return(ansTypes());
    } else if(new RegExp("((\\bsign|\\bsympt))").test(question)){
     	return(ansSigns());
    } else if(new RegExp("((\\blower|\\blessen|\\breduce|\\bprevent|\\bcontrol|\\bavoid|\\ballev))").test(question) ||
              new RegExp("((\\bshould|\\bsuppos).*(\\bdo|\\blive))").test(question) ||
              new RegExp("(\\bbest.*\\bpractic)").test(question)){
    	return(ansLowerRisk());
    } else if(new RegExp("(\\bpre(\\s|-)*dia)").test(question)){
     	return(ansPreDiabetes());
    } else if(new RegExp("((\\bcomplicat|\\bconseq))").test(question) ||
              new RegExp("((\\bhappen|\\bmatter|\\boccur))").test(question) || 
              new RegExp("(\\bwhy.*(b\\learn|b\\know))").test(question)){
    	return(ansComplication());
    } else if(new RegExp("(\\bmorbid|\\bco.*mor)").test(question)){
    	return(ansComorbid());
    } else if(new RegExp("(\\bfactor)").test(question) ||
              new RegExp("(\\bhigh.*\\brisk)").test(question) ||
              new RegExp("(\\bcause|(\\bgive.*\\brise)|\\bmake|\\blead)").test(question) ||
              new RegExp("(\\blikely|\\bincre|\\bchance|\\bsusce|\\bvuln)").test(question) ||
              new RegExp("(\\bwhy\\b)").test(question)){
    	return(ansRiskFactors());
    } else if(new RegExp("\\brisk").test(question)){
    	return(ansRisk());
    } else if(new RegExp("\\bdiab").test(question)){
    	return(ansDiabetes());
    } else if(new RegExp("\\bwho.*\\byou").test(question) ||
              new RegExp("\\babout.*\\byou").test(question) ||
              new RegExp("\\bintrodu.*\\byou").test(question) ||
              new RegExp("\\byou.*\\bhuman").test(question) ||
              new RegExp("\\byou.*bot").test(question) ||
              new RegExp("\\byou.*\\bdo").test(question) ||
              new RegExp("\\byou.*\\bknow").test(question)){
    	return(ansAboutYou());
    } else if(new RegExp("\\bhi\\b").test(question) ||
              new RegExp("\\bhello\\b").test(question) ||
              new RegExp("\\bmorning").test(question) ||
              new RegExp("\\bgood(\\s)*\\bafternoon").test(question) ||
              new RegExp("\\bgood(\\s)*\\bevening").test(question)){
    	return(ansHi());
    } else if(new RegExp("\\bbye|\\bgood(\\s)*night").test(question) ||
              new RegExp("(\\bcya|(\\bsee(\\s)*you))").test(question)){
    	return(ansBye());
    } else if(new RegExp("(\\bnot\\b|\\bno\\b|\\buseless|terrible|\\bbad|\\bwrong|\\bincorrect|\\birr|\\bmistake|\\bmisun|\\berr)").test(question)){
    	return(ansSorry());
    } else if(new RegExp("(\\bgood|\\bthank|\\bgreat|\\bi\\b(\\s)*\\bsee|\\bnice)").test(question)){
    	return(ansThank());
    } else {
    	return(ansOther());
    }
}

function randN(strList) {
	return (strList[Math.floor(Math.random()*(strList.length))]);
}

function ansAboutMe(ageNow, race, gender, bmiClass) {
    var basicInfo = "",
        bmiInfo = "";
    if (ageNow) {
        basicInfo += "You are " + ageNow + " years old";
    }

    const raceStrs = ["Chinese", "Malay", "Indian", "Other"]
    if (race >= 0) {
        basicInfo += ", " + raceStrs[race];
    }

    const genderStrs = ["female", "male"]
    if (gender >= 0) {
        basicInfo += " " + genderStrs[gender];
    }

    const bmiClassStrs = ["Low Risk", "Healthy", "Moderate Risk", "High Risk"];
    if (bmiClass >= 0) {
        bmiInfo = "Your BMI is in the " + bmiClassStrs[bmiClass] + " range for diabetes.";
    }

    return (
      	[
    		{
    			"msg": basicInfo
    		},
            {
                "msg": bmiInfo
            }
      	]
    );
}

function ansExampleQuestion() {
    return (
	    [
	    	{
		    	"msg": 	"Below are some example questions:",
		    	"hasOption": true,
		    	"options":  ["What is diabetes?",
	               			"Risks of diabetes",
	              			"Comorbidity of diabetes",
	               			"Diet to prevent diabetes",
	               			"Exercises to prevent diabetes"]
	    	}
	    ]
    );            
}

function ansGlucose() {
  	return (
	  	[
		  	{
		  		"msg": `Your doctor may conduct two types of blood glucose tests for diabetes.
			            <ul>
				            <li><b>Oral Glucose Tolerance Test (OGTT): </b>An oral glucose tolerance test consists of two blood tests; the first administered after an 8-hour fast, and the second 2 hours after consuming a sugary beverage.</li>
				            <li><b>Fasting Blood Glucose (FBG) Test: </b>This is a blood test usually done in the morning, as it requires a fast of at least 8 hours before the blood sample is taken.</li>
			            </ul>`
		  	}
	  	]
   	);
}

function ansInsulin() {
  	return (
  		[
  			{
  				"msg": `Insulin is a hormone produced by the pancreas to regulate the amount of glucose in the blood.`
  			},
  			{
  				"msg":  `Food is converted into glucose before it is absorbed into our bloodstream. The function of insulin is to move the glucose from the bloodstream into the body cells for use or storage. People with diabetes  are unable to fully use the glucose in their bloodstream either because they lack insulin in the body or insulin is ineffective for them.`
  			}
  		]
  	);
}

function ansBMI() {
	return (
		[
			{
				"msg": `The body mass index (BMI) is a measure that uses your height and weight to work out if your weight is healthy.`
			},
			{
				"msg": `
	 				If your BMI is:
	           		<ul>
	           			<li><b>below 18.5</b> – you're in the underweight range</li>
	           			<li><b>between 18.5 and 24.9</b> – you're in the healthy weight range</li>
	           			<li><b>between 25 and 29.9</b> – you're in the overweight range</li>
	           			<li><b>between 30 and 39.9</b> – you're in the obese range </li>
	           		</ul>`
            }
		]
	);
}

function ansPCOS() {
	return (
		[
			{
				"msg": `Polycystic Ovary Syndrome (PCOS) is a condition that affects a woman’s hormone levels. 
	               		Women with PCOS produce higher-than-normal amounts of male hormones. 
	               		This hormone imbalance causes them to skip menstrual periods  
	               		and makes it harder for them to get pregnant.`
			},
			{
				"msg": `PCOS also causes hair growth on the face and body, and baldness. 
	               		And it can contribute to long-term health problems like diabetes and heart disease.`
			}
		]
	);
}

function ansHypertension() {
  	return (
  		[
  			{
  				"msg": `<a href="https://www.healthhub.sg/a-z/diseases-and-conditions/53/highbloodpressure
              			   target="_blank" rel="noopener noreferrer">High blood pressure</a> or hypertension 
              			refers to the condition in which the blood is pumped around 
              			the body at too high a pressure.`
  			},
  			{
  				"msg": `Uncontrolled diabetes causes narrowing of the blood vessels which in turn can lead to high blood pressure.`
  			},
  			{
  				"msg": `Having both high blood pressure and diabetes greatly increases your risk of having a heart attack, stroke, diabetic eye disease and kidney disease.`
  			}
  		]
  	);
}

function ansCurable() {
  	return (
  		[
  			{
  				"msg": `Unfortunately, diabetes is a chronic medical condition that has no cure. The good news is it can be managed with some lifestyle changes and, in some cases, medication.`
  			},
  			{
  				"msg": `You can learn more about the <a href="https://www.healthhub.sg/programmes/87/diabetes-mellitus" target="_blank" rel="noopener noreferrer">Myths and Facts</a> of diabetes. 
             			Remember to scroll down and select the Be aware tab on that page.`
  			}
  		]
  	)
}

function ansMental() {
  	return (
  		[
  			{
  				"msg": `Stress can raise blood pressure and blood glucose levels. It can also affect how well you manage medical conditions. Here are some tips to improve your mental well-being:
           				<ul>
           					<li>Have enough sleep</li>
           					<li>Think positively. Smile :)</li>
           					<li> Relax </li>
           				</ul>`
  			}
  		]
  	);
}

function ansScreen() {
  	return (
  		[
  			{
  				"msg": `Screen for Life (SFL) is a national screening programme that encourages Singapore Citizens and Permanent Residents to go for regular health screenings and follow up.`
  			},
  			{
  				"msg": `Please follow this link to learn about the 3 simple steps of Screen for Life:  
             			<a href="https://www.healthhub.sg/programmes/61/Screen_for_Life" target="_blank" rel="noopener noreferrer">Screen for Life</a>`
  			},
  			{
  				"msg": `Please scroll to the middle of the pages if you do not see the 3 steps. 
            			Here is the link to search for <a href="https://www.chas.sg/clinic_locator.aspx?id=90" target="_blank" rel="noopener noreferrer"> CHAS clinic </a> from the page.`
  			}
  		]
  	);
}

function ansPrevalence() {
  	return (
  		[
  			{	
  				"msg": `According to the National Population Health Survey, the prevalence of diabetes in Singapore is 8.6% in 2017. The prevalence rate is measured with Fasting Plasma Glucose test.<br>`
  			},
  			{
  				"msg": `The prevalence of diabetes has been consistently increasing in Singapore since 1992.`
  			}
  		]
  	);
}

function ansSmoke() {
  	return (
  		[
  			{
  				"msg": `Smokers are more likely to develop Type 2 diabetes. People with diabetes who smoke experience more problems with their diabetes control than those who don’t. They are also more likely to end up with diabetes complications.`
  			},
  			{
  				"msg": `What’s more, smoking damages the blood vessels and reduces blood flow to many organs. So if you have diabetes and smoke, you are at a higher risk of serious complications, such as heart disease, amputation, and stroke.`
  			},
  			{
  				"msg": `You can follow this <a href= "https://www.healthhub.sg/live-healthy/422/howtoquit" target="_blank" rel="noopener noreferrer"> Quit </a> link to learn how to quit smoking.`
  			}
  		]
  	);
}

function ansDiet() {
	return (
	  	[
	  		{
	  			"msg": `A helpful guideline is <a href="https://www.healthhub.sg/live-healthy/1332/plan-your-meals-with-my-healthy-plate" target="_blank" rel="noopener noreferrer">My Healthy Plate</a>
			             <ul>
				             <li> Fill half of your plate with fruit and vegetables </li>
				             <li> Fill a quarter of your plate with whole-grains </li>
				             <li> Fill a quarter of your plate with meat and others </li>
				             <li> Choose water</li>
				             <li> Limit alcohol intake </li>
				             <li> Use healthier oils </li>
			             </ul>`
	  		},
	  		{
	  			"msg": `You may want to learn more about:`,
	  			"hasOption": true,
	  			"options": ["Carbohydrates", "Protein", "Fruits and Vegetables"]
	  		}
	  	]
  	);
}

function ansProtein() {
  	return (
  		[
  			{
  				"msg": `Protein such as yogurt, cheese, lentils, legumes, nuts, and seeds are essential 
  						for growth and repair of damaged tissues.`
  			},
            {
                "msg": `Protein is also needed in the production of
                        hormones and enzymes. To make a healthier choice, select items lower in fat, cholesterol, and salt.`
            }
  		]
  	);
}

function ansCarbohydrate() {
  	return (
  		[
  			{
  				"msg": `<a href="https://www.healthhub.sg/live-healthy/183/whole_grains_wise_choice" target="_blank" rel="noopener noreferrer">Wholegrain foods</a> such as brown rice, wholemeal bread, and rolled oats contain nutrients such as vitamins, minerals, phytochemicals, and inulin. Not only do they protect you from heart diseases and diabetes, they also help manage your weight as they fill you up and you get hungry less easily.`
  			},
  			{
  				"msg": `On the other hand, refined grains such as white rice and white bread 
  						have gone through processing, which removes the valuable nutrients. They also cause
						a greater increase in your blood glucose levels after a meal.`
  			}
  		]
  	);
}

function ansVegFruit() {
  	return (
  		[
  			{
  				"msg": `Naturally low in fat and rich in vitamins, minerals and fibre, fruit and vegetables 
  						add colour, texture, and flavour to your diet. 
  						With so many <a href="https://www.healthhub.sg/live-healthy/514/Benefits%20of%20Fruit%20and%20Vegetables" target="_blank" rel="noopener noreferrer">fruit and vegetables</a> 
  						in the market, mix and match your choices to get maximum benefit. Remember not to overcook vegetables, 
  						and go for whole fruit rather than fruit juices.`
  			}
  		]
  	);
}
  
function ansExercise() {
	return (
		[
			{
				"msg": `To gain health benefits, it is recommended that a healthy person engage in either:
             			<ul>
             				<li> 150 minutes of moderate-intensity aerobic activity a week OR</li>
             				<li> 20 minutes of vigorous-intensity aerobic activity three or more days a week</li>
             			</ul>`
			},
			{
				"msg": `Please follow the links below to learn more about:
			            <ul>
				            <li><a href="https://www.healthhub.sg/live-healthy/829/if-you-are-active---what-you-can-gain-from-physical-activity" target="_blank" rel="noopener noreferrer">Benefits of physical activities</a></li>
				            <li><a href="https://www.healthhub.sg/live-healthy/387/TypesOfActivities" target="_blank" rel="noopener noreferrer">Types and examples of physical activities</a></li>
						</ul>`
			}
		]
	);
}

function ansType1() {
	return (
		[
			{
				"msg": `Type 1 diabetes:`
			},
			{
				"msg": `Your body does not make insulin. This is a problem because you need insulin to take the sugar (glucose) from the foods you eat and turn it into energy for your body. You need to take insulin every day to live. Usually, type 1 diabetes is inherited and cannot be prevented.`
			}
		]
	);
}

function ansType2() {
	return (
		[
			{
				"msg": `Type 2 diabetes:`
			},
			{
				"msg": `Your body does not make or use insulin well. You may need to take pills or insulin to help control your diabetes. Type 2 is the most common type of diabetes and can be prevented.`
			},
			{
				"msg": "Please learn about other types of diabetes if you are interested:",
				"hasOption": true,
				"options": ["Type 1", "Gestational diabetes"]
			}
		]
	);
}

function ansGest() {
	return (
		[
			{
				"msg": "Gestational diabetes:"
			},
			{
				"msg": "Some women get this kind of diabetes when they are pregnant. Most of the time, it goes away after the baby is born. But even if it goes away, these women and their children have a greater chance of getting diabetes later in life."
			},
			{
				"msg": "Please learn about other types of diabetes if you are interested:",
				"hasOption": true,
				"options": ["Type 1", "Type 2"]
			}
		]
	);
}

function ansPreDiabetes() {
  	return (
	  	[
	  		{
	  			"msg": `Pre-diabetes describes a condition in which blood sugar levels are higher than normal, but not high enough to be considered Type 2 diabetes. In other words, it is the precursor to Type 2 diabetes.`
	  		},
	  		{
	  			"msg": `The good news is studies have shown that a few lifestyle changes, such as adopting a healthier diet, regular exercise and maintaining a healthy weight can reverse pre-diabetes, as well as reduce the risk of Type 2 diabetes.`
	  		}
	  	]
  	);
}

function ansTypes() {
  	return (
  		[
  			{
  				"msg": `There are 3 types of diabetes`
  			},
  			{
  				"msg": `Please select one type of diabetes to learn more about it:`,
  				"hasOption": true,
  				"options": ["Type 1", "Type 2", "Gestational diabetes"]
  			}
  		]
  	)
}

function ansSigns() {
	return (
		[
			{
				"msg": `The common symptoms of diabetes are:
			            <ul>
			            	<li>Frequent thirst despite drinking lots of water</li>
			             	<li>Constant hunger</li>
			             	<li>Constant tiredness</li>
			              	<li>Itchy skin especially around the genital area</li>
			             	<li>Passing excessive urine during day and night</li>
			             	<li>Weight loss despite good appetite</li>
			             	<li>Poor healing of cuts and wounds</li>
			             </ul>`
			},
			{
				"msg": `Please visit <a href="https://www.healthhub.sg/programmes/61/Screen_for_Life" target="_blank" rel="noopener noreferrer">Screen for Life</a> to know how to screen for diabetes.`
			}
		]
	);
}

function ansLowerRisk() {
	return (
		[
			{
				"msg": `To lower the risks of diabetes, you need to:
			            <ul>
			            	<li><b>Be Aware</b><br>Know your risk and screen for diabetes.</li>
			            	<li><b>Eat Right</b><br>Eat in moderation, choose more whole grains, fruits and vegetables, and reduce intake of sugar and saturated fat.</li>
			            	<li><b>Adopt an Active lifestyle</b><br>Stay fit by engaging in at least 150 minutes of physical activity weekly.</li>
			            	<li><b>Take Control</b><br>Aim for a healthy weight and have regular check-ups with your family doctor.</li>
			            	<li><b>Do Not Smoke</b><br>Smoking worsens the narrowing of blood vessels, reducing blood flow to many organs which can lead to serious complications.</li>
			            	<li><b>Limit Alcohol Intake</b><br>Alcohol interferes with the meal plan and blood glucose control.</li>
			            </ul>`
			}
		]
	);
}

function ansComplication() {
	return (
		[
			{
				"msg": `Although diabetes is not fatal in the short term, undiagnosed diabetes or poorly-controlled diabetes can eventually lead to disabilities and diseases, compromising the quality of life of individuals and their caregivers.`
			},
			{
				"msg": `The long-term complications of diabetes include:
		            	<ul>
			             	<li>Coronary heart diseases such as angina or heart attack</li>
			             	<li>Stroke</li>
			             	<li>Eye disease</li>
			             	<li>Kidney disease</li>
			             	<li>Foot diseases such as numbness, ulcers and even gangrene</li>
			             	<li>Nerve disease which can lead to problems such as impotence and diarrhoea</li>
		             	</ul>`
			}
		]
	);
}

function ansComorbid() {
  	return (
  		[
  			{
  				"msg": `In medicine, comorbidity is the presence of one or more additional conditions 
              			co-occurring with a primary condition.`
  			},
  			{
  				"msg": `The common conditions in patients with diabetes Type 2 include: 
		             	<ul>
			             	<li><a href="https://www.healthhub.sg/a-z/diseases-and-conditions/53/highbloodpressure" target="_blank" rel="noopener noreferrer">High blood pressure</a></li>
			             	<li><a href="https://www.healthhub.sg/a-z/diseases-and-conditions/218/obesity" target="_blank" rel="noopener noreferrer">Obesity</a></li>
			             	<li><a href="https://www.healthhub.sg/a-z/diseases-and-conditions/622/hyperlipidemia" target="_blank" rel="noopener noreferrer">Hyperlipidemia</a><br>(high levels of lipids in the blood)</li>
			             	<li><a href="https://www.healthhub.sg/a-z/diseases-and-conditions/334/chronic_kidney_disease_nuh" target="_blank" rel="noopener noreferrer">Chronic Kidney Disease</a></li>
			             	<li><a href="https://www.healthhub.sg/a-z/diseases-and-conditions/107/topic_heart_attack" target="_blank" rel="noopener noreferrer">Heart Diseases</a></li>
		             	</ul>`
  			}
  		]
  	);
}

function ansRiskFactors() {
  	return (
  		[
  			{
  				"msg": `You are at an increased risk of developing Type 2 diabetes if you:
			            <ul>
				            <li>Have a parent or sibling with diabetes</li>
				            <li>Have a BMI of 23.0 kg/m<sup>2</sup> or higher </li>
				            <li>Lead an inactive (sedentary) lifestyle </li>
				            <li>Have high blood pressure</li>
				            <li>Have abnormal blood cholesterol/lipid levels</li>
				            <li>Have a history of gestational diabetes</li>
				            <li>Are 40 years old and above</li>
				            <li>Have impaired glucose tolerance or impaired fasting glucose</li>
			            </ul>`
  			}
  		]
  	);
}

function ansRisk() {
	return (
		[
			{
				"msg": `May I check that you want to know about:`,
				"hasOption": true,
				"options": ["Risk factors which give rise to diabetes? OR",
				            "Consequences of diabetes? OR",
				            "Comorbidity of diabetes? OR",
				            "Prevalence of diabetes in Singapore?"]
			}
		]
	);
}

function ansDiabetes() {
	return (
		[
			{
				"msg": "Diabetes is a medical condition in which the blood glucose levels remain persistently higher than normal."
			},
			{
				"msg": "There are 3 types of Diabetes."
			},
			{
				"msg": "You can learn more about:",
				"hasOption": true,
				"options": ["Types of Diabetes",
				            "Risks of Diabetes",
				            "Pre-Diabetes"]
			}
		]
	);
}

function ansAboutYou() {
	return (
		[
			{
				"msg": "I am Diana, the chat bot for diabetes."
			},
			{
				"msg": randN(["I am happy to answer your questions about diabetes.",
		                "Please ask me questions about diabetes.",
		                "I am glad to answer your questions about diabetes."])
			},
			{
				"msg": "",
				"hasOption": "true",
				"options": ["Example questions"]
			}
		]

	);
}

function ansHi() {
  	return (
  		[   
          { 
            "msg": randN(["Hi, I am Diana", "Hello, I am Diana"]),
            "type": "bot"
          },
          {
            "msg": "Please ask me questions about diabetes.",
            "hasOption": true,
            "options": ["Example questions"],
            "type": "bot"
          }
  		]
  	)
}

function ansSorry() {
  	return (
  		[
			{
				"msg": randN(["I am sorry to hear that.", "I am sorry.", "I am so sorry."])
			},
			{
				"msg": randN(["I am learning so that I can help you better next time.",
			                  "I am learning so that I can help you more next time."])
			}		
  		]
  	);
}

function ansBye() {
	return (
		[
			{
				"msg": randN(["Thank you for chatting with me.",
			                  "It is nice to chat with you.",
			                  "It is a great pleasure to chat with you."])
			},
			{
				"msg": randN(["Please come back when you have time.",
			                  "Please come back when you need help."])
			}
		]
	);
}

function ansThank() {
	return (
		[
			{
				"msg": randN(["Thanks. I am happy that I can help.",
			                   "Thanks. I love to help you.",
			                   "Thanks. I am happy to help you."])
			},
			{
				"msg": randN(["Please ask me more questions.",
			                   "What else do you want to know?",
			                   "What other information do you need?"])
			}
		]
	);
}

function ansOther() {
	return (
		[
			{
				"msg": randN(["I didn't understand. You can try rephrasing.",
			                  "I am sorry. Can you reword your statement? I'm not understanding.",
			                  "Sorry. I didn't get your meaning. Would you please rephrase your question?"])
			},
			{
				"msg": "You can see some example questions",
				"hasOption": true,
				"options": ["Example questions"]
			}
		]
	);
}