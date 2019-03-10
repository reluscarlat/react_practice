import React, {Component} from 'react'

class TodoItem extends Component {
    render() {
        return(
            <div>
                <input type="checkbox" checked={this.props.content.completed}
                onChange={()=>{this.props.change(this.props.content.id)
                }}/>
                <span>{this.props.content.text}</span>
                <br/>
            </div>    
        )
    }
}

export default TodoItem