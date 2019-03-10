import React from 'react';

function TodoItem(props) {
    return(
        <div className="todoItem">
            <input type="checkbox" checked={props.content.completed}/> 
            <p>{props.content.text}</p>
        </div>
    )
}

export default TodoItem