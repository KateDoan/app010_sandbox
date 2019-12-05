import React, { Component } from 'react';
import { FormGroup, Label, Row, Col, Input } from 'reactstrap';
import NextBtn from './NextButton';

class BMIForm extends Component {
  render() {
    if (this.props.currentStep !== this.props.order) { 
      return null
    }
    
    return(
        <div className="container">
            <div className="page-padding-top"></div>
            <FormGroup>
                <Row>
                    <Label htmlFor="ageNow" md={{size: 6, offset: 3}} className={"question"}> How old are you? </Label>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}} className={"error"}>{this.props.errors.ageNow}</Col>
                </Row>
                <Row className="no-gutters">
                    <Col xs={{size: 8, offset: 2}} md={{size: 2, offset: 5}}>
                        <Input type="text" id="ageNow" name="ageNow"
                            placeholder="Enter your age"
                            value={this.props.ageNow}
                            onBlur={this.props.handleBlur('ageNow')}
                            onChange={(event) => this.props.handleState(event.target.name, event.target.value)} />
                    </Col>
                    <Col className={'text-left pt-6'}>&nbsp;years</Col>
                </Row>
            </FormGroup>
            <div className="page-padding-middle"></div>
            <FormGroup>
                <Row>
                    <Label htmlFor="height" md={{size: 6, offset: 3}} className={"question"}> What is your height (cm)? </Label>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}} className={"error"}>{this.props.errors.height}</Col>
                </Row>
                <Row className="no-gutters">
                    <Col xs={{size: 8, offset: 2}} md={{size: 2, offset: 5}}>
                        <Input type="text" id="height" name="height"
                            placeholder="Enter your height"
                            value={this.props.height}
                            onBlur={this.props.handleBlur('height')}
                            onChange={(event) => this.props.handleState(event.target.name, event.target.value)} />
                    </Col>
                    <Col className={'text-left pt-6'}>&nbsp;cm</Col>
                </Row>
            </FormGroup>
            <div className="page-padding-middle"></div>
            <FormGroup>
                <Row>
                    <Label htmlFor="weight" md={{size: 6, offset: 3}} className={"question"}> What is your weight (kg)? </Label>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}} className={"error"}>{this.props.errors.weight}</Col>
                </Row>
                <Row className="no-gutters">
                    <Col xs={{size: 8, offset: 2}} md={{size: 2, offset: 5}}>
                        <Input type="text" id="weight" name="weight"
                            placeholder="Enter your weight"
                            value={this.props.weight}
                            onBlur={this.props.handleBlur('weight')}
                            onChange={(event) => this.props.handleState(event.target.name, event.target.value)} />
                    </Col>
                    <Col className={'text-left pt-6'}>&nbsp;kg</Col>
                </Row>
            </FormGroup>
            <div className="row error">
                <div className="col-12 text-center">
                    <div> {this.props.errors.bmi} </div>
                </div>
            </div>
            <NextBtn next={() => {}} />
        </div>
    )
  }
}

export default BMIForm;