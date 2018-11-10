import React, { Component } from 'react';
import './Column.css';

import Mail from '../mail';

class Column extends Component {
	render() {
    let style = {
      backgroundColor: this.props.colorProp
    }

		return (
			<div className='column'>
				<span className='title' style={style}>{this.props.titleProp}</span>
				<Mail/>
				<Mail/>
				<Mail/>
				<Mail/>
			</div>
		)
	}
}

export default Column;
