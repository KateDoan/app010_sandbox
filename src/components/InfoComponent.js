import React, { Component } from 'react';

class Info extends Component {
	render() {
		return (
			<div className="container text-center">
				<div className="page-padding-top"></div>
			  	<div className="row content">
				    <div className="col-sm-2 text-left">
				        <p>
				         	<a href="https://www.healthhub.sg/" target="_blank" rel="noopener noreferrer">HealthHub</a>
				         	<ul className="healthhub-ul">
					         	<li><a href="https://www.healthhub.sg/a-z/diseases-and-conditions/626/diabetes#8" 
					         		   target="_blank" rel="noopener noreferrer">Diabetes Info</a></li>
					          	<li><a href="https://www.healthhub.sg/programmes/87/diabetes-mellitus" 
					          	       target="_blank" rel="noopener noreferrer">BEAT</a></li>
					            <li><a href="https://www.healthhub.sg/programmes/61/Screen_for_Life" 
					                   target="_blank" rel="noopener noreferrer">Screen for Life</a></li>
					            <li><a href="https://www.healthhub.sg/search?k=quit%2520smoke" 
					                   target="_blank" rel="noopener noreferrer">Quit Smoking</a></li>
					            <li><a href="https://www.healthhub.sg/programmes" 
					                   target="_blank" rel="noopener noreferrer">Health Programmes</a></li>
				        	</ul>
				      	</p>
				      	<p><a href="https://www.niddk.nih.gov/health-information/diabetes/overview/managing-diabetes/4-steps" 
				      	      target="_blank" rel="noopener noreferrer">
				              ABC of Diabetes</a>
				        </p>
				    </div>
				    <div className="col-sm-8 text-left"> 
				      	<h3>What is diabetes?</h3>
				          	<p>Diabetes is a medical condition in which the blood glucose levels remain persistently higher than normal.</p>
				          	<p>There are three main types of diabetes:</p>
				        <ul>
				            <li><strong>Type 1 diabetes</strong> Your body does not make insulin. This is a problem because you need insulin to take the sugar (glucose) from the foods you eat and turn it into energy for your body. You need to take insulin every day to live. Usually, type 1 diabetes is inherited and cannot be prevented.</li>
				            <br/>
				            <li><strong>Type 2 diabetes</strong> Your body does not make or use insulin well. You may need to take pills or insulin to help control your diabetes. Type 2 is the most common type of diabetes and can be prevented.</li>
				            <br/>
				            <li><strong>Gestational diabetes</strong> Some women get this kind of diabetes when they are pregnant. Most of the time, it goes away after the baby is born. But even if it goes away, these women and their children have a greater chance of getting diabetes later in life.</li>
				        </ul>
				        <p>Sources:</p>
				          	<p><a 
				                href="https://www.niddk.nih.gov/health-information/diabetes/overview/managing-diabetes/4-steps"
				                target="_blank"
				                rel="noopener noreferrer">
				                National Institute of Diabetes and Digestive and Kidney Diseases, USA</a>
				            </p>
				          	<p><a 
				                href="https://www.healthhub.sg/a-z/diseases-and-conditions/626/diabetes#8" 
				                target="_blank"
				                rel="noopener noreferrer">
				                HealthHub, Singapore</a>
				            </p>
				          
				      	<hr />
				      
				      	<h3>Useful links to learn about diabetes</h3>
				      	<p>Below are some good resources to learn more about Diabetes:</p>
				      	<ul>
					        <li><strong>HealthHub</strong> provides{' '} 
						        <a href="https://www.healthhub.sg/a-z/diseases-and-conditions/626/diabetes#8" target="_blank" rel="noopener noreferrer">
						          comprehensive information</a>{' '} 
						          about Diabetes including{' '}  
						        <a href="https://www.healthhub.sg/programmes/87/diabetes-mellitus" target="_blank" rel="noopener noreferrer">
						          symptoms, foods, and physical activities to fight diabetes</a>.
					        </li><br />
					        <li><strong>National Institute of Diabetes and Digestive and Kidney Diseases, USA</strong> shows you{' '}
						        <a href="https://www.niddk.nih.gov/health-information/diabetes/overview/managing-diabetes/4-steps" 
						        target="_blank"
						        rel="noopener noreferrer">
						          4 practical effective steps</a> to live with diabetes in a very succint and easy-to-understand way.
					        </li><br />     
					        <li><strong>Google</strong> Search can point you to{' '}
						        <a href="https://www.google.com/search?ei=i72jXPitNcrk_Abs2oeACQ&q=diabetes+food+exercise+cheat+sheet" 
						        target="_blank"
						        rel="noopener noreferrer"> 
						        helpful cheat sheets and information</a> about diabetes.
					        </li><br />     
				     	 </ul>
				    </div>
				    <div className="col-sm-2"></div>
				</div>
			</div>
		);
	}
}

export default Info;