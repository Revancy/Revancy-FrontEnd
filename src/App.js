import React, { Component } from 'react';
import './App.css';

import Inbox from './components/inbox';
import Kanban from './components/kanban';
import Menu from './components/menu';

class App extends Component {
	render() {
		return (
			<div className='app'>
        <Menu/>
				<Inbox/>
				<Kanban/>
			</div>
		)
	}
}

export default App;
