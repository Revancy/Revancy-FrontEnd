import React, { Component } from 'react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import './App.css';

import Inbox from './components/inbox';
import Kanban from './components/kanban';

class App extends Component {
	constructor (props) {
		super(props);

		this.state = {
			inbox: [1, 1, 1, 1, 1],
			kanban: [
				[1, 1, 1, 1, 1],
				[1, 1, 1,],
				[1, 1, 1, 1]
			]
		}
	}

	render() {


		return (
			<DragDropContextProvider backend={HTML5Backend}>
			    <div className='app'>
			    	<Inbox mails={this.state.inbox}/>
			    	<Kanban kanban={this.state.kanban}/>
			    </div>
		    </DragDropContextProvider>
		)
	}
}

export default App;
