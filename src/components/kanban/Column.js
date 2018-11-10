import React, { Component } from 'react';
import './Column.css';

import Mail from '../mail';

class Column extends Component {
	render() {
		var mails = [];

		for (var i = 0; i < this.props.mails.length; i++) {
			mails.push(
				<Mail/>
			);
		}

		return (
			<div className='column'>
				<span className='title'></span>
				{mails}
			</div>
		)
	}
}

export default Column;
