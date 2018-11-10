import React, { Component } from 'react';
import './Inbox.css'

import Mail from '../mail';

class Inbox extends Component {
	render() {
		var mails = [];

		for (let i = 0; i < this.props.mails.length; i++) {
			mails.push(
				<Mail key={"inbox-mail-" + i}/>
			);
		}


		return (
			<div className = "inbox">
				{mails}
			</div>
		)
	}
}

export default Inbox;
