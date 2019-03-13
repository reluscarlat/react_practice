import React, {Component} from 'react'

class App extends Component {
  constructor() {
    super()
    this.state={
      firstName: "",
      lastName: "",
      age: 0,
      gender: "",
      destination: "Barcelona",
      vegetarian: false,
      lactoseFree: true,
      kosher: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit() {
    
  }

  handleChange(event) {
    if(event.target.type === "checkbox") {
      this.setState({
        [event.target.name] : !this.state[event.target.name]
      })
    } else {
      this.setState({
        [event.target.name] : event.target.value
      })
    }
  }
  render() {
    console.log(this.state.firstName + " - " + this.state.lastName + " - AGe:" 
    + this.state.age + " - " + this.state.gender + " - " + this.state.destination)
    return(
      <div>
        <form>
          <div>
            <label>
              First name: 
              <input 
                name="firstName" 
                type="text" 
                value={this.state.firstName} 
                onChange={this.handleChange}
              />
            </label>
          </div>
          <br/>

          <div>
            <label>
              Last name: 
              <input 
                name="lastName" 
                type="text" 
                value={this.state.lastName} 
                onChange={this.handleChange}
              />
            </label>
          </div>
          <br/>

          <div>
            <label>
              Age: 
              <input 
                name="age" 
                type="number" 
                value={this.state.age} 
                onChange={this.handleChange}
              />
            </label>
          </div>
          <br/>

          <div>
            <p>Gender:</p>
            <label>
              Male
              <input 
                name="gender"
                type="radio"
                value="male"
                checked={this.state.gender === 'male'}
                onChange={this.handleChange}
              />
            </label>
          
            <label>
              Female
              <input 
                name="gender"
                type="radio"
                value="female"
                checked={this.state.gender === 'female'}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <br/><br/>

          <div>
            <label>
              Destination:
              <select 
                name="destination" 
                type="text"
                value={this.state.destination} 
                onChange={this.handleChange}
              >
                <option value="Barcelona">Barcelona</option>
                <option value="Paris">Paris</option>
                <option value="London">London</option>
              </select>
            </label>
          </div>
          <br/>

          <div>
            <label>
              Dietary Restrictions: <br/>
              <input 
                name="vegetarian" 
                type="checkbox"
                checked={this.state.vegetarian} 
                onChange={this.handleChange}
              />Vegetarian<br/> 
              <input 
                name="lactoseFree" 
                type="checkbox" 
                checked={this.state.lactoseFree} 
                onChange={this.handleChange}
              />Lactose Free<br/>
              <input 
                name="kosher" 
                type="checkbox" 
                checked={this.state.kosher} 
                onChange={this.handleChange}
              />Kosher<br/>
            </label>
          </div>
          <br/>

          <button onSubmit={(event)=>{}}>Submit</button>
        </form>
        
      </div>
    )
  }


}

export default App