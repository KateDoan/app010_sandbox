import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import * as d3 from 'd3';
import {Loading} from './LoadingComponent';
import NextBtn from './NextButton';

class Plota extends Component {

	constructor(props){
      	super(props)

      	this.state = {
      		isLargerText: false,
      		showChat: false
      	};

      	this.drawChart = this.drawChart.bind(this);
      	this.toggleLargerText = this.toggleLargerText.bind(this);
   	}

	componentDidMount() {
        this.drawChart(this.props.ageNow, this.props.ages.expectedAge, this.props.ages.healthyAge)
    }

    drawChart(ageNow, ageExp, ageHthy) {
    	const canvasWidth = '100%';
    	const canvasHeight = 400;
    	const margin = 20;

    	var xscale = d3.scaleLinear()
    		.domain([-1, 1])
    		.range([0, canvasWidth])

    	var xPos = xscale(0);

    	var yscale = d3.scaleLinear()
            .domain([ageNow, ageHthy])
            .range([canvasHeight - margin, margin]);

        var Tooltip = d3.select(this.refs.canvas)
					    .append("div")
					    .style("opacity", 0)
					    .attr("class", "tooltip")
					    .style("background-color", "white")
					    .style("border", "solid")
					    .style("border-width", "2px")
					    .style("border-radius", "5px")
					    .style("padding", "5px")
					    .style("text-align", "center")
					    .style("pointer-events", "none")
					    .style("font-size", "16px")

		var mouseoverNow = function(d) {
		    Tooltip
		    .transition()		
            .duration(200)		
            .style("opacity", .9);	

            Tooltip
            .html("Age now: " + ageNow + " years old")
            .style("left", d3.mouse(this)[0] + "px")			
            .style("top", d3.mouse(this)[1] + "px");

            d3.select(this)
              .attr("r", 10);				
		}

		var mouseoverExpected = function(d) {
		    Tooltip
		    .transition()		
            .duration(200)		
            .style("opacity", .9);	

            Tooltip
            .html("Age expected getting diabetes: <br>" + ageExp + " years old")
            .style("left", d3.mouse(this)[0] + "px")		
            .style("top",  d3.mouse(this)[1] + "px");

            d3.select(this)
              .attr("r", 10);				
		}  

		var mouseoverHthy = function(d) {
		    Tooltip
		    .transition()		
            .duration(200)		
            .style("opacity", .9);	

            Tooltip
            .html("Age expected getting diabetetes <br> if changing to a healthy lifestyle: <br>" + ageHthy + " years old")
            .style("left", d3.mouse(this)[0] + "px")		
            .style("top", d3.mouse(this)[1] + "px");

            d3.select(this)
              .attr("r", 10);				
		}


		var mouseleave = function(d) {
		    Tooltip
		      .transition()		
              .duration(500)	
		      .style("opacity", 0)

		    d3.select(this)
              .attr("r", 8);
		}


    	const svgCanvas = d3.select(this.refs.canvas)
						    .append("svg")
						    .attr("width", canvasWidth)
						    .attr("height", canvasHeight)
						    .style("border", "0");

		svgCanvas.append("line")
				 .attr("x1", xPos)
				 .attr("y1", yscale(ageNow))
				 .attr("x2", xPos)
				 .attr("y2", yscale(ageExp))
				 .attr("stroke", "black")
				 .attr("stroke-width", "5");

		svgCanvas.append("line")
				 .attr("x1", xPos)
				 .attr("y1", yscale(ageExp))
				 .attr("x2", xPos)
				 .attr("y2", yscale(ageHthy))
				 .attr("stroke", "red")
				 .attr("stroke-width", "5");

		svgCanvas.append("circle")
				 .attr("cx", xPos)
				 .attr("cy", yscale(ageNow))
				 .attr("r", 8)
				 .attr("fill", "black")
				 .on("mouseover", mouseoverNow)
			    .on("mouseleave", mouseleave);

		svgCanvas.append("circle")
				 .attr("cx", xPos)
				 .attr("cy", yscale(ageExp))
				 .attr("r", 8)
				 .attr("fill", "black")
				 .on("mouseover", mouseoverExpected)
			    .on("mouseleave", mouseleave);

		svgCanvas.append("circle")
				 .attr("cx", xPos)
				 .attr("cy", yscale(ageHthy))
				 .attr("r", 8)
				 .attr("fill", "red")
				 .on("mouseover", mouseoverHthy)
			    .on("mouseleave", mouseleave);

		var ticks = (((ageExp - ageNow) < 0.05 * (ageHthy - ageNow)) || ((ageHthy - ageExp) < 0.05 * (ageHthy - ageNow))) ? 
						[Math.round(ageNow), Math.round(ageHthy)] : [Math.round(ageNow), Math.round(ageExp), Math.round(ageHthy)]

		var y_axis = d3.axisLeft()
				       .scale(yscale)
				       .tickValues(ticks);

	    svgCanvas.append("g")
	       .attr("class", "axis")
	       .attr("transform", "translate(100, 0)")
	       .call(y_axis);
    }

    toggleLargerText() {
    	this.setState ({
    		isLargerText: !this.state.isLargerText
    	})
    }

	render(){
		const next = () => {
			this.props._next();
		};

		const yearsGained = this.props.ages.healthyAge - this.props.ages.expectedAge;

		return(
			<div className="container">
				<div className="page-padding-top"></div>
				<div className="row">
					<div className="col-12 msg-title">
						Diabetes risk prediction
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
						<p>
							From all the information you have provided,
	                        we have predicted that if you do get diabetes,
	                        it could take place when you are about&nbsp;
	                        {this.props.ages.expectedAge} years old.
	                    </p>
	                    <div> 
	                    { yearsGained < 1 ?
	                    	null : 
	                    	(
	                    		<span>
			                    	However, if you take our advice and make adjustments
			                        to your current lifestyle, you can expect to enjoy&nbsp; 
			                        {yearsGained}
			                        &nbsp;more healthy years.
			                    </span>
	                    	)
	                    }
	                    </div>
	                </div>
				</div>
				<div className="page-padding-middle"></div>
				<div className="row">
					<div className="col-12 col-md-6 offset-md-3 bold">
						<p>Please click the circles to see the legend</p>
					</div>
				</div>
				<div className="row">
					<div ref="canvas" className="col-12 col-md-6 offset-md-3">
					</div>
				</div>
				<NextBtn next={next} />
			</div>
		);
	}
};

class Plot extends Component {
	render(){
		if(this.props.currentStep !== this.props.order){
			return null;
		}

		if(this.props.isLoading){
			return(
                <div className="container">
                	<div className="page-padding-top"></div>
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        } else if (this.props.errMess) {
        	return null;
        } else if (!this.props.ages || !this.props.ages.expectedAge || !this.props.ages.healthyAge
        			|| this.props.ageNow > this.props.ages.expectedAge
        			|| this.props.ages.expectedAge > this.props.ages.healthyAge) {
        	return null;
		} else {
			return (
				<Plota 
                    currentStep={this.props.currentStep} 
                    ageNow = {this.props.ageNow}
                    ages={this.props.ages} 
                    _next={this.props._next}
                    _prev={this.props._prev}
                />
			);
		}
	}
};

export default Plot;