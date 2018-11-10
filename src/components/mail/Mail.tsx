import React, { Component } from 'react';
import './Mail.css'

import ItemTypes from '../../globals.js';

import {
	DragSource,
	DropTarget,
	ConnectDropTarget,
	ConnectDragSource,
	DropTargetMonitor,
	DropTargetConnector,
	DragSourceConnector,
	DragSourceMonitor,
} from 'react-dnd'

const MailSource = {
	beginDrag(props: MailProps) {
		return {}
	}
}

const MailTarget = {
	hover(props: MailProps, monitor: DropTargetMonitor, component: Mail | null) {
		if (!component) {
			return null
		}
		const dragIndex = monitor.getItem().index
		const hoverIndex = props.index

		// Don't replace items with themselves
		if (dragIndex === hoverIndex) {
			return
		}

		// Determine rectangle on screen
		const hoverBoundingRect = (findDOMNode(
			component,
		) as Element).getBoundingClientRect()

		// Get vertical middle
		const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

		// Determine mouse position
		const clientOffset = monitor.getClientOffset()

		// Get pixels to the top
		const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

		// Only perform the move when the mouse has crossed half of the items height
		// When dragging downwards, only move when the cursor is below 50%
		// When dragging upwards, only move when the cursor is above 50%

		// Dragging downwards
		if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
			return
		}

		// Dragging upwards
		if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
			return
		}

		// Time to actually perform the action
		// props.moveMail(dragIndex, hoverIndex)

		// Note: we're mutating the monitor item here!
		// Generally it's better to avoid mutations,
		// but it's good here for the sake of performance
		// to avoid expensive index searches.
		monitor.getItem().index = hoverIndex
	}
}

export interface MailProps {
	moveMail: (dragIndex: number, hoverIndex: number) => void
}

interface MailSourceCollectedProps {
	isDragging: boolean
	connectDragSource: ConnectDragSource
}

interface MailTargetCollectedProps {
	connectDropTarget: ConnectDropTarget
}

const collect: DragSourceCollector<mailProps> = (
	connect: DragSourceConnector,
	monitor: DragSourceMonitor,
) => ({
	connectDragSource: connect.dragSource(),
	connectDragPreview: connect.dragPreview(),
	isDragging: monitor.isDragging(),
})

class Mail extends Component<MailProps & MailSourceCollectedProps & MailTargetCollectedProps> {

	constructor(props) {
		super(props);
		
		this.state = {
			name: "Alexandr Boesci",
			topic: "Lorem ipsum dolor sit amet"
		}	
	}

	render() {
		const {
			text,
			isDragging,
			connectDragSource,
			connectDropTarget,
		} = this.props

		return (
			connectDragSource(
				connectDropTarget(
					<div className="mail">
				 		<div className ='name'>{this.state.name}</div>
				 		<div className ='topic'>{this.state.topic}</div>
				 	</div>
				)
			)
		)
	}
}


export default DropTarget<MailProps, MailTargetCollectedProps>(
	ItemTypes.MAIL,
	MailTarget,
	(connect: DropTargetConnector) => ({
		connectDropTarget: connect.dropTarget(),
	}),
)(
	DragSource<MailProps, MailSourceCollectedProps>(
		ItemTypes.MAIL,
		MailSource,
		(connect: DragSourceConnector, monitor: DragSourceMonitor) => ({
			connectDragSource: connect.dragSource(),
			isDragging: monitor.isDragging(),
		}),
	)(Mail),
)

