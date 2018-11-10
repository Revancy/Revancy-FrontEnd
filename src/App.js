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
			mails: [
				['test1', 'test2', 1, 1, 1],//The first array shows the general inbox
				['what?', 1, 1, 1, 1],
				[1, 1, 1,],
				[1, 1, 1, 1]
			]
		}
	}

	moveMail(dragCol, dragMail, hoverCol, hoverMail) {
		let state = this.state;

		let mail = state.mails[dragCol][dragMail];
		this.state.mails[dragCol].splice(dragMail, 1);
		this.state.mails[hoverCol].splice(hoverMail, 0, mail);

		this.setState(state);
	}

	render() {


		return (
			<DragDropContextProvider backend={HTML5Backend}>
			    <div className='app'>
			    	<Inbox 
			    		mails={this.state.mails}
			    		moveMail={this.moveMail.bind(this)}
			    	/>
			    	<Kanban 
			    		mails={this.state.mails}
			    		moveMail={this.moveMail.bind(this)}
			    	/>
			    </div>
		    </DragDropContextProvider>
		)
	}
}

export default App;
