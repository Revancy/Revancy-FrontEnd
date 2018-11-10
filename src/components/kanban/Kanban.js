import React, { Component } from 'react';
import './Kanban.css';

import Column from './Column.js';

class Kanban extends Component {
	render() {
		return (
			<div className='kanban'>
				<Column titleProp={'Personal'} colorProp={'#7EFDD1'}/>
				<Column titleProp={'Work'} colorProp={'#FDCD7F'}/>
        <Column titleProp={'Due 13.11.2018'} colorProp={'#D2FD7E'}/>
			</div>
		)
	}
}

export default Kanban;
