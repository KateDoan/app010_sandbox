import React, { Component } from "react";
import { generateAnswer } from './ChatboxUtil'
import ReactHtmlParser from 'react-html-parser'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Chatbox extends Component {
	componentDidUpdate () {
	    var el = this.refs.msgs;
	    el.scrollTop = el.scrollHeight;
	}

	constructor(props) {
		super(props);

		this.state = {
			messages: [ 
						{	
							"msg": "Hi, I am Diana",
							"type": "bot"
						},
						{
							"msg": "Please ask me questions about diabetes.",
							"hasOption": true,
							"options": ["Example questions"],
							"type": "bot"
						},
					  ],
			userMsg: '',
			isInputDisabled: false
		};

		this.handleUserInput = this.handleUserInput.bind(this);
		this.addMsgUser = this.addMsgUser.bind(this);
		this.addMsgBot = this.addMsgBot.bind(this);
		this.handleSend = this.handleSend.bind(this);
	}

	handleUserInput(input) {
		var strippedInput = input.replace(/[^a-zA-Z.,?'0-9 ]*$/g, '');

        this.setState ({
            userMsg : strippedInput
        });
    }

    addMsgUser (message) {
		const newMsg = {
			"msg": message,
			"type": "user"
		}

		this.setState({
			messages: this.state.messages.concat(newMsg)
		})
	}

	addMsgBot (answers) {
		answers.forEach((el) => {
			el.type = "bot";
		})

		this.setState({
			messages: this.state.messages.concat(answers)
		})
	}

    async handleSend(userMsg) {
    	this.setState ({
        	isInputDisabled: true
        })

        this.addMsgUser(userMsg);

        const { ageNow, race, gender, bmiClass } = this.props;

        const answers = await generateAnswer(userMsg, ageNow, race, gender, bmiClass);

    	await this.addMsgBot(answers);

        await this.setState ({
        	userMsg : '',
        	isInputDisabled: false
        })
    }

	render() {
		const RenderMessages = () => {
			if (this.state.messages) {
				return (
					<div>
					{this.state.messages.map((message, index) => {
						const msgCssClass = message.type === "bot" ? "bubble left-chat" : "bubble right-chat"; 
						if (message.hasOption) {
							return (
								<div key={index} className={msgCssClass}>
									<p>{ message.type==="bot" ? ReactHtmlParser(message.msg) : message.msg }</p>
									<div>
										{message.options.map((option, optIndex) => {
											return(
												<p key={optIndex} 
												   onClick={() => {this.handleSend(option)}}
												   className={"chat-option"}>{option}</p> 
											);
										})}
									</div>
								</div>
							); 
						} else { 
							return (
								<div key={index} className={msgCssClass}>
									<div>{ message.type==="bot" ? ReactHtmlParser(message.msg) : message.msg }</div>
								</div>
							);
						}
						
					})}
					</div>
				);
			}

			return null;
		}

		return (
			<div className="chat-wrapper">
				<div className="chat-box">
			        <div className="chat-close" onClick={() => this.props.toggleChat()}>&times;</div>
			          
			        <div className="chat-header">
			            <span>Ask Diana about diabetes</span><br/>
			            <span>  </span>
			        </div>
					
					<div className="chat-msgs" ref="msgs">
				       	<RenderMessages />
			        </div>
			       
			        <textarea 
			        	id="userMsg" 
			        	name="userMsg"
			        	className="chat-textarea" 
			        	maxLength="100" 
                        value={this.state.userMsg}
                        onChange={(event) => { this.handleUserInput(event.target.value) }}
                        disabled = {(this.state.isInputDisabled)? "disabled" : ""}
			        	autoFocus>
			        </textarea>

				    <button 
				    	className="chat-send-btn"
				    	onClick={() => { if(this.state.userMsg) {this.handleSend(this.state.userMsg)} } }
				    ><FontAwesomeIcon icon={['fas', 'paper-plane']} size="2x" /></button>
				    
				</div>
			</div>
			
		);
	}
}

export default Chatbox;

