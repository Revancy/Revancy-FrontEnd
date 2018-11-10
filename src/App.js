import React, { Component } from 'react';
import './App.css';

import Inbox from './components/inbox';
import Kanban from './components/kanban';

class App extends Component {
	render() {
		return (
			<div className='app'>
				<Inbox/>
				<Kanban/>
			</div>
		)
	}
}

export default App;
