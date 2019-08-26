import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';


const grid = 8;
const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle
});



class TaskDone extends Component {
  render() {
    return (
      <div className="box--done">
        <h1>Done</h1>
        {this.props.taskSelected.map((item, index) => (
          <Draggable
            key={item.id}
            draggableId={item.id}
            index={index}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                style={getItemStyle(
                  snapshot.isDragging,
                  provided.draggableProps.style
                )}>
                {item.content} {item.task}
              </div>
            )}
          </Draggable>
        ))}
      </div>
    )
  }
}



export default TaskDone;