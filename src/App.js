import React, {Component} from 'react'
import todosData from './data/totosData'
import TodoItem from './classes/TodoItem'


class App extends Component {
  constructor() {
    super()
    this.state = {
      todoItems: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const newTodos = prevState.todoItems.map(item =>{
        if(item.id === id) {
          item.completed = !item.completed
        }
        return item
      })
      return newTodos
    })
  }

  render() {
    let items = this.state.todoItems.map( item => 
      (<TodoItem key={item.id} change={this.handleChange} content={item}/>) )

    return(
      <div>
        {items}
      </div>
    )
  }
}

export default App