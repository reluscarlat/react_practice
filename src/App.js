
// App.js
import React, {Component} from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      checker: false,
      gender: "",
      favoriteColor:"blue"
    } 
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    if(event.target.name === "checker") {
      this.setState({
        [event.target.name] : !this.state.checker
      })
      return 
    }
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  handleSubmit(event) {
    event.preventDefault()
  }

  render() {
    return(
      <div>




        {/* INPUT FORM*/}
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>First Name: <input 
            type="text" 
            name="firstName" 
            value={this.state.firstName} 
            onChange={this.handleChange} 
            /></label>
          </div>
          <div>
            <label>Last Name: <input 
            type="text" 
            name="lastName" 
            value={this.state.lastName} 
            onChange={this.handleChange} 
            /></label>
          </div>
          <div>
            <input type="submit" value="SUBMIT"/>
            {/**
            - <button>SUBMIT NOW</button> is equivalent of <input type="submit" value=""SUBMIT NOW/>
            - You can set onSubmit event on:  - form tag (ex: <form onSubmit={handleSubmit}> ... </form>)
                                              - button/input tag
            */}
          </div>
          <div>
            <p>{this.state.firstName +" " + this.state.lastName}</p>
          </div>
        </form>




        {/* CHECKBOX*/}
        <input 
          name="checker"
          type="checkbox"
          checked={this.state.checker}
          onChange={this.handleChange}
        />



        {/* RADIO BUTTONS*/}
        <br/><br/>
        <label>
          <input 
            name="gender"
            type="radio"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          />
        Male</label>
        <label>
          <input 
            name="gender"
            type="radio"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          />
        Female</label>
        <p>You are a {this.state.gender}</p>
        {/* Formik - Form framework */}




        {/* SELECT OPTIONS */}
        <select 
          value={this.state.favoriteColor}
          onChange={this.handleChange}
          name="favoriteColor"
        >
          <option value="blue">BLUE</option>
          <option value="red">RED</option>
          <option value="green">GREEN</option>
        </select>
        {console.log(this.state.favoriteColor)}



      </div>
    )
  }
}

export default App
