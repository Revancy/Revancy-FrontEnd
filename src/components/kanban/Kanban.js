import React, { Component } from 'react';
import './Kanban.css';

import Column from './Column.js';

class Kanban extends Component {

	render() {
		var columns = [];

		for (let i = 0; i < this.props.kanban.length; i++) {
			columns.push(
				<Column 
					key={"kanban-row-" + i}
					mails={this.props.kanban[i]}
					index={i}
				/>
			)
		}


		return (
			<div className='kanban'>
				{columns}
			</div>
		)
	}
}

export default Kanban;
