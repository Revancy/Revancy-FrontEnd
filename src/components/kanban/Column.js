import React, { Component } from 'react';
import './Column.css';

import Mail from '../mail';

class Column extends Component {
	render() {
		return (
			<div className='column'>
				<span className='title'></span>
				<Mail/>
				<Mail/>
				<Mail/>
				<Mail/>
			</div>
		)
	}
}

export default Column;
