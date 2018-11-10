import React, { Component } from 'react';
import './Inbox.css'

import Mail from '../mail';

class Inbox extends Component {
	render() {
		return (
			<div className = "inbox">
				<Mail/>
			</div>
		)
	}
}

export default Inbox;
