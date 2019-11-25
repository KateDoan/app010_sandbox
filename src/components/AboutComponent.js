import React, { Component } from 'react';

class About extends Component {
	render() {
		return (
			<div class="container text-center">
				<div className="page-padding-top"></div>    
				  <div class="row">
				    <div class="col-sm-2 text-left">
				      	<p><a href="https://www.hpb.gov.sg/" target="_blank" rel="noopener noreferrer"> HPB</a></p>
				      	<p><a href="https://sph.nus.edu.sg/" target="_blank" rel="noopener noreferrer">SSHSPH</a></p>
				    </div>
				    <div class="col-sm-8 text-left"> 
					    	<div className="row">
						    	<div className="col-12">
							      <h3>About Us</h3>
							      <p>This Personalized Risk Prediction App is jointly developed by Health Promotion Board Singapore (HPB)
							      and Saw Swee Hock School of Public Health (SSHSPH) of National University of Singapore.</p>    
						      	</div>
					      	</div>
					    	<div className="row">
						    	<div className="col-12 col-md-6 text-center text-md-right">
						          <img className="about-logo" src="assets/images/hpb-logo.jpg" alt="Health Promotion Board" />
						        </div>
						    	<div class="col-12 col-md-6 text-center text-md-left">
						          <img className="about-logo" src="assets/images/NUSlogo.jpg" alt="Saw Swee Hock School of Public Health" />
						        </div>
					        </div>
					    
					        <div className="col-12"><hr /></div>
					        <div className="row">
					            <div className="col-12">
							        <h3>Acknowledgement</h3>
							        <p>We also thank{' '}<a href="https://icons8.com/icons" target="_blank" rel="noopener noreferrer">Icons8</a>{' '}  
							        for the beautiful icons that we used in this app.</p>
						        </div>
							</div>
				    </div>
				    <div class="col-sm-2"></div>
				</div>
			</div>
		);
	}
}

export default About;