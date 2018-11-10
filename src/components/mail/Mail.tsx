import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

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
} from 'react-dnd';

import { XYCoord } from 'dnd-core'

const MailSource = {
	beginDrag(props: MailProps) {
		return {
			index: props.index,
			column: props.column
		}
	}
}

const MailTarget = {
	hover(props: MailProps, monitor: DropTargetMonitor, component: Mail | null) {
		if (!component) {
			return null
		}
		const dragIndex = monitor.getItem().index
		const dragColumn = monitor.getItem().column
		const hoverIndex = props.index
		const hoverColumn = props.column


		// Don't replace items with themselves
		if (dragIndex === hoverIndex && dragColumn === hoverColumn) {
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
		props.moveMail(dragColumn, dragIndex, hoverColumn, hoverIndex)

		// Note: we're mutating the monitor item here!
		// Generally it's better to avoid mutations,
		// but it's good here for the sake of performance
		// to avoid expensive index searches.
		monitor.getItem().index = hoverIndex
		monitor.getItem().column = hoverColumn
	}
}

export interface MailProps {
	id: any,
	index: number,
	column: number,
	name: string,
	moveMail: (dragColumn: number, dragIndex: number, hoverColumn: number, hoverIndex: number) => void
}

interface MailSourceCollectedProps {
	isDragging: boolean
	connectDragSource: ConnectDragSource
}

interface MailTargetCollectedProps {
	connectDropTarget: ConnectDropTarget
}

// const collect: DragSourceCollector<mailProps> = (
// 	connect: DragSourceConnector,
// 	monitor: DragSourceMonitor,
// ) => ({
// 	connectDragSource: connect.dragSource(),
// 	connectDragPreview: connect.dragPreview(),
// 	isDragging: monitor.isDragging(),
// })

class Mail extends Component<MailProps & MailSourceCollectedProps & MailTargetCollectedProps> {



	render() {
		const {
			isDragging,
			connectDragSource,
			connectDropTarget,
		} = this.props


		return (
			connectDragSource(
				connectDropTarget(
					<div className="mail">
				 		<div className ='name'>{this.props.name}</div>
				 		<div className ='topic'>test topic</div>
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

