import React, { Component } from 'react';
import './Inbox.css'

import Mail from '../mail';

class Inbox extends Component {
	render() {
		var mails = [];

		for (let i = 0; i < this.props.mails[0].length; i++) {
			mails.push(
				<Mail
					key={"inbox-mail-" + i}
					index={i}
					column={0}
					name={this.props.mails[0][i]}
					moveMail={this.props.moveMail}
				/>
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
