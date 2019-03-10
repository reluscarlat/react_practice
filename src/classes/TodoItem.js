import React, {Component} from 'react'

class TodoItem extends Component {
    render() {
        let itemStyle = null
        if(this.props.content.completed===true) {
            itemStyle={
                textDecoration: "line-through"
            }
        } else {
            itemStyle={
                textDecoration: ""
            }
        }

        return(
            <div> 
                <input type="checkbox" checked={this.props.content.completed}
                onChange={()=>{this.props.change(this.props.content.id)
                }}/>
                <span style={itemStyle}>{this.props.content.text}</span>
                <br/>
            </div>    
        )
    }
}

export default TodoItem