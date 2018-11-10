import React, { Component } from 'react';
import './Kanban.css';

import Column from './Column.js';

class Kanban extends Component {
	render() {
		return (
			<div className='kanban'>
				<Column/>
				<Column/>
			</div>
		)
	}
}

export default Kanban;
