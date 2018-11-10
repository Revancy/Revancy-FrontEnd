import React, { Component } from 'react';
import './Kanban.css';

import Column from './Column.js';

class Kanban extends Component {

	render() {
		var columns = [];

		for (let i = 1; i < this.props.mails.length; i++) {
			columns.push(
				<Column 
					key={"kanban-row-" + i}
					mails={this.props.mails[i]}
					index={i}
					moveMail={this.props.moveMail}
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
