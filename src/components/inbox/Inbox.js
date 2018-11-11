import React, { Component } from 'react';
import './Inbox.css'

import Mail from '../mail';
import Login from '../login';

class Inbox extends Component {
	render() {
		var mails = [];

		for (let i = 0; i < 6; i++) {
			mails.push(
				<Mail
					isInbox={true}
				/>
			)
		}

		return (
			<div className = "inbox">
        <div id="inbox-title">Inbox</div>
				{mails}
        <Login/>
			</div>
		)
	}
}

export default Inbox;
