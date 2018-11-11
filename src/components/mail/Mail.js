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
				<div className="head">
					<div className='name'>{this.state.name}</div>
	        <div className='time'>2:30</div>
				</div>
				<div className='topic'>{this.state.topic}</div>
				{(this.props.isInbox)? <hr className="mail__divider"/>: null}
			</div>
		)
	}
}
export default Mail;
