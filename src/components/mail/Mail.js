import React, { Component } from 'react';
import './Mail.css'

class Mail extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			name: "Alexandr Boesci",
			topic: "Lorem ipsum dolor sit amet"
		}	
	}

	render() {
		return (
			<div className="mail" >
				<div className ='name'>{this.state.name}</div>
				<div className ='topic'>{this.state.topic}</div>
			</div>
		)
	}
}

export default Mail;
