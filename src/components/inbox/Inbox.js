import React, { Component } from 'react';
import './Inbox.css'

import Mail from '../mail';
import Login from '../login';

class Inbox extends Component {
	render() {
		return (
			<div className = "inbox">
        <div id="inbox-title">Inbox</div>
				<Mail/>
        <Mail/>
        <Mail/>
        <Login/>
			</div>
		)
	}
}

export default Inbox;
