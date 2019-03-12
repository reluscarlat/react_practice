import App from "./App";

// P1 ReactDOM & JSX
// import React from 'react'
// import ReactDom from 'react-dom'

// ReactDom.render(
// <div>
//     <h1>Hello From App</h1>
//     <p>Mesaj de intampinare</p>
// </div>, 
// document.getElementById('root'))

// ------------------------------------------------

// P2 ReactDOM & JSX Practice
// import React from 'react'
// import ReactDom from 'react-dom'

// ReactDom.render(
//     <div>
//         <ul>
//             <li>Item 1</li>
//             <li>Item 2</li>
//             <li>Item 3</li>
//         </ul>
//     </div>,
//     document.getElementById('root')
// )

// ------------------------------------------------

// P3 Functional Components

// import React from 'react'
// import ReactDom from 'react-dom'

// // Functional Component
// function MyApp() {
//     return(
//         <div>
//             <ul>
//                 <li>Item 11</li>
//                 <li>Item 12</li>
//                 <li>Item 13</li>
//             </ul>
//         </div>
//     )
// }

// ReactDom.render(
//     <MyApp />,
//     document.getElementById('root')
// )

// ------------------------------------------------

// P4 Functional Components Practice

// import React from 'react'
// import ReactDom from 'react-dom'

// function MyInfo() {
//     return (
//         <div>
//             <h1>Tarlacs Uler</h1>
//             <p>I always like to watch football.</p>
//             <ol>
//                 <li>Huston</li>
//                 <li>California</li>
//                 <li>Melbourn</li>
//             </ol>
//         </div>
//     )
// }

// ReactDom.render(
//     <MyInfo />,
//     document.getElementById('root')
// )

// --------------------------------------------------------

// P5 Move Components into Separate Files
// // MyInfo file: 
// import React from "react" // for JSX

// function MyInfo() {
//     return (
//         <div>
//             <h1>Tarlacs Uler</h1>
//             <p>I always like to watch football.</p>
//             <ol>
//                 <li>Huston</li>
//                 <li>California</li>
//                 <li>Melbourn</li>
//             </ol>
//         </div>
//     )
// }

// export default MyInfo

// // index file:
// import React from "react"
// import ReactDom from "react-dom"
// import MyInfo from "./components/MyInfo"


// ReactDom.render(
//     <MyInfo />,
//     document.getElementById('root')
// )

// ----------------------------------------------------

// P6) Parent/Child Components
// // index.js:
// import React from 'react'
// import ReactDom from 'react-dom'
// import App from './App' 

// ReactDom.render(<App />,document.getElementById('root'))


// App.js :
// import React from 'react' 
// import Footer from './components/Footer'
// import Header from './components/Header'
// import MainContent from './components/MainContent'

// function App() {
//   return (
//     <div>
//       <Header />
//       <MainContent />
//       <Footer />
//     </div>
//   )
// }

// export default App

// // Header.js
// import React from 'react'

// function Header() {
//     return( 
//         <div>
//             <h1>Hello world!</h1>
//             <ul>
//                 <li>Thing 1</li>
//                 <li>Thing 2</li>
//                 <li>Thing 2</li>
//             </ul>
//         </div>
//     )
// }

// export default Header

// // MainContent.js
// import React from 'react'
// import ReactDom from 'react-dom'

// function MainContent() {
//     return(
//         <div>
//              <main>
//                 <p>This is where most of my content will be.</p>
//             </main>
//         </div>
//     )
// }

// export default MainContent

// // Footer.js
// import React from 'react'

// function Footer() {
//     return(
//         <footer>
//             <h3>
//                 This is my footer.
//             </h3>
//         </footer>
//     )
// }

// export default Footer

// -------------------------------------------------------

// P7 Todo App - Phase 1
// // App.js
// import React from 'react'
// import TodoList from './components/TodoList';

// function App() {
//   return(
//     <div>
//       <TodoList />
//     </div>
//   )
// }

// export default App

// // TodoList.js
// import React from 'react'

// function TodoList() {
//     return(
//         <div>
//             <div><input type="checkbox" /> <span>Item 1</span></div>
//             <div><input type="checkbox" /> <span>Item 2</span></div>
//             <div><input type="checkbox" /> <span>Item 3</span></div>
//             <div><input type="checkbox" /> <span>Item 4</span></div>
//         </div>
//     )
// }

// export default TodoList
//-------------------------------------------------------------------

// // P8 JSX to JavaScript and Back
// import React from 'react';
// import Header from './components/Header';
// import MainContent from './components/MainContent';
// import Footer from './components/Footer';

// function App() {
//   const firstName = "Bob";
//   const lastName = "Zirol";
//   const date = new Date();
//   const hour = date.getHours();
//   let timeOfDay

//   if(hour<12) timeOfDay="morning"
//   else if(hour>12 && hour<17) timeOfDay="afternoon"
//   else if(hour>17) timeOfDay="night"

//   return(
//     <div>
//       <Header />
//       <MainContent />
//       <Footer />
//       <p>Hello {firstName  + " " + lastName}. The current hour is {date.getHours()+":"+date.getMinutes()}.</p>
//       <p>Good {timeOfDay}</p>
//     </div>
//   )
// }

//-------------------------------------------------------

// P9 Inline Styles with the Style Property
// // App.js
// import React from 'react';
// import Header from './components/Header';
// import MainContent from './components/MainContent';
// import Footer from './components/Footer';

// function App() {
//   const firstName = "Bob";
//   const lastName = "Zirol";
//   const date = new Date();
//   const hour = date.getHours();
//   let timeOfDay

//   const styles = {
//     color: "#FF8C00",
//     backgroundColor: "#FF2D00"
// }


//   if(hour<12) {
//     timeOfDay="morning"
//     styles.color = "#04756F"
//   }
//   else if(hour>12 && hour<17) {
//     timeOfDay="afternoon"
//     styles.color = "#2E0927"
//   } 
//   else if(hour>17) {
//     timeOfDay="night"
//     styles.color = "#D90000"
//   }

//   return(
//     <div>
//       <Header />
//       <MainContent />
//       <Footer />
//       <p>Hello {firstName  + " " + lastName}. The current hour is {date.getHours()+":"+date.getMinutes()}.</p>
//       <p style={styles} >Good {timeOfDay}</p>
//     </div>
//   )
// }

// export default App

//-------------------------------------------------------


// P10

// import React from 'react';
// import TodoItem from './components/TodoItem';

// function App() {
//     return(
//         <div>
//           <TodoItem />
//           <TodoItem />
//           <TodoItem />
//           <TodoItem /> 
//         </div>
//     )
// }

// export default App


// import React from 'react';

// function TodoItem() {
//     return(
//         <div className="todoItem">
//             <input type="checkbox" /> 
//             <p>Placeholder text here</p>
//         </div>
//     )
// }

// export default TodoItem

// ---------------------------------------------
// P11: Props in React
// PART 1)

// // App.js
// import React from "react"
// import ContactCard from "./components/ContactCard";

// function App() {
//     return (
//         <div className="contacts">

//           <ContactCard 
//             name ="Mr. Whiskerson"
//             imgUrl = "http://placekitten.com/300/200"
//             phone = "(212) 555-1234"
//             email = "mr.whiskaz@catnap.meow"
//           />

//           <ContactCard 
//             name ="Fluffykins"
//             imgUrl = "http://placekitten.com/400/200"
//             phone = "(212) 555-2345"
//             email = "fluff@me.com"
//           />

//           <ContactCard 
//             name ="Destroyer"
//             imgUrl = "http://placekitten.com/400/400"
//             phone = "(212) 555-3456"
//             email = "ofworlds@yahoo.com"
//           />

//           <ContactCard 
//             name ="Felix"
//             imgUrl = "http://placekitten.com/200/100"
//             phone = "(212) 555-4567"
//             email = "thecat@hotmail.com"
//           />
//         </div>
//     )
// }

// export default App


// // ContactCard.js
// import React from 'react'

// function ContactCard(props) {
//     console.log(props)
//     return(
//         <div>
//              <div className="contact-card">
//                 <img src={props.imgUrl}/>
//                 <h3>{props.name}</h3>
//                 <p>Phone: {props.phone}</p>
//                 <p>Email: {props.email}</p>
//             </div>
            
//         </div>
//     )
// }

// export default ContactCard

// PART 2
// // App.js:
// import React from "react"
// import ContactCard from "./components/ContactCard";

// function App() {
//     return (
//         <div className="contacts">

//           <ContactCard 
//             contact = {{
//               name:"Mr. Whiskerson", 
//             imgUrl: "http://placekitten.com/300/200", 
//             phone: "(212) 555-1234", 
//             email: "mr.whiskaz@catnap.meow"
//           }}
//           />

//           <ContactCard 
//             contact ={{
//               name: "Fluffykins",
//             imgUrl:"http://placekitten.com/400/200",
//             phone:"(212) 555-2345",
//             email:"fluff@me.com"
//           }}
//           />

//           <ContactCard 
//             contact = {{
//               name: "Destroyer",
//               imgUrl: "http://placekitten.com/400/400",
//               phone: "(212) 555-3456",
//               email: "ofworlds@yahoo.com"
//             }}
            
//           />

//           <ContactCard 
//             contact = {{
//               name: "Felix",
//               imgUrl: "http://placekitten.com/200/100",
//               phone: "(212) 555-4567",
//               email: "thecat@hotmail.com"
//             }}
//           />
//         </div>
//     )
// }

// export default App

// // ContactCard.js: 
// import React from 'react'

// function ContactCard(props) {
//     console.log(props)
//     return(
//         <div>
//              <div className="contact-card">
//                 <img src={props.contact.imgUrl}/>
//                 <h3>{props.contact.name}</h3>
//                 <p>Phone: {props.contact.phone}</p>
//                 <p>Email: {props.contact.email}</p>
//             </div>
            
//         </div>
//     )
// }

// export default ContactCard

//---------------------------------------------------------

//P12 Props and Styling Practice
// // App.js:
// import React from 'react'
// import Joke from './components/Joke'

// function App() {
//   return(
//     <div>
//       <Joke 
//         content = {{
//           question: "What is your name?",
//           punchLine: "It doesn't matter what your name is."
//         }}
//       />
//       <Joke 
//         content = {{
//           question: "Good news is, you're not under investigation anymore.",
//           punchLine: "Bad news is, you're under arrest."
//         }}
//       />
//       <Joke 
//         content = {{
//           question: "How you call a doggie with no legs?",
//           punchLine: "It doesn't matter, he ain't come."
//         }}
//       />
//     </div>
//   )
// }

// export default App

// // Joke.js :

// import React from 'react'

// function Joke(props) {
//     return(
//         <div className="joke">
//             <p>{props.content.question}</p>
//             <p>{props.content.punchLine}</p>
//         </div>
//     )
// }

// export default Joke

// --------------------------------------------------------------

// P13 Mapping Components
// // PART: 1
// // App.js
// import React from 'react'
// import Joke from './components/Joke'
// import JokeList from './components/JokeList'

// function App() {
  
//     let jokesData = [
//       {
//         question: "What is your name? AAAAA",
//         punchLine: "It doesn't matter what your name is. AAAAA"
//       },
//       {
//         question: "Good news is, you're not under investigation anymore. AAAAA",
//         punchLine: "Bad news is, you're under arrest. AAAAA"
//       },
//       {
//         question: "How you call a doggie with no legs? AAAAA",
//         punchLine: "It doesn't matter, he ain't come. AAAAA"
//       },
//     ]
    
//   const jokes = jokesData.map(joke => {
//     return(
//       <Joke content={{question:joke.question, punchLine:joke.punchLine}}/>
//     )
//   })

//   let nums= [1,2,3,4,5,6,7,8,9]
//   const doubled = nums.map(function(number){
//     return number*2;
//   })
//   console.log(doubled)

//   return(
//     <div>
//       <Joke 
//         content = {{
//           question: "What is your name?",
//           punchLine: "It doesn't matter what your name is."
//         }}
//       />
//       <Joke 
//         content = {{
//           question: "Good news is, you're not under investigation anymore.",
//           punchLine: "Bad news is, you're under arrest."
//         }}
//       />
//       <Joke 
//         content = {{
//           question: "How you call a doggie with no legs?",
//           punchLine: "It doesn't matter, he ain't come."
//         }}
//       />
//       {jokes}
      

//     </div>
//   )
// }

// export default App

// // Joke.js :

// import React from 'react'

// function Joke(props) {
//     return(
//         <div className="joke">
//             <p>{props.content.question}</p>
//             <p>{props.content.punchLine}</p>
//         </div>
//     )
// }

// export default Joke

// // PART: 2
// import React from 'react'
// import Joke from './components/Joke'
// import jokesData from './data/jokesData'

// function App() {

//   let jokes = jokesData.map(function(joke) {
//     return(<Joke key={joke.key} content={joke} />)
//   })

//   console.log(jokes)

//   return(
//     <div>
//       {jokes}
//     </div>
//   )
  

// }
// export default App

// // jokesData.js :
// let jokesData = [
//     { 
//         key : 1,
//         question: "What is your name? AAAAA",
//         punchLine: "It doesn't matter what your name is. AAAAA"
//     },
//     {
//         key : 2,
//         question: "Good news is, you're not under investigation anymore. AAAAA",
//         punchLine: "Bad news is, you're under arrest. AAAAA"
//     },
//     {
//         key : 3,
//         question: "How you call a doggie with no legs? AAAAA",
//         punchLine: "It doesn't matter, he ain't come. AAAAA"
//     },
//   ]

//   export default jokesData

// ------------------------------------------------------------------

// P14: Mapping Components Practice
// // App.js:
// import React from 'react'
// import productsData from './data/productsData'
// import Product from './components/Product'

// function App() {
//   let products = productsData.map((product)=>{
//     return(<Product key={product.key} content={product}/>)
//   })

//   return(
//     <div>
//       {products}
//     </div>
//   )
// }

// export default App

// // Product.js 1:
// import React from 'react'
// import { domainToASCII } from 'url';



// function Product(props){

//     function popUpAllert() {
//         alert(props.content.name)
//         document.getElementById(props.content.id).style.textDecoration="line-through"
//     }

//     return(
//         <div>
//             <h2 id={props.content.id} >{props.content.name}</h2>
//             <p>Price: {props.content.price}</p>
//             <p>Description: {props.content.description}</p>
//             <button onClick={popUpAllert}>Details</button>
//             <br />
//         </div>
//     )
// }

// export default Product


// // Products.js 2 :
// import React from 'react'

// function Product(props){
//     return(
//         <div>
//             <p>{props.content.name}</p>
//             <p>Price: {props.content.price}</p>
//             <p>Description: {props.content.description}</p>
//             <br />
//         </div>
//     )
// }

// export default Product

// // productsData.js :
// const products = [
//     {
//         id: "1",
//         name: "Pencil",
//         price: 1,
//         description: "Perfect for those who can't remember things! 5/5 Highly recommend."
//     },
//     {
//         id: "2",
//         name: "Housing",
//         price: 0,
//         description: "Housing provided for out-of-state students or those who can't commute"
//     },
//     {
//         id: "3",
//         name: "Computer Rental",
//         price: 300,
//         description: "Don't have a computer? No problem!"
//     },
//     {
//         id: "4",
//         name: "Coffee",
//         price: 2,
//         description: "Wake up!"
//     },
//     {
//         id: "5",
//         name: "Snacks",
//         price: 0,
//         description: "Free snacks!"
//     },
//     {
//         id: "6",
//         name: "Rubber Duckies",
//         price: 3.50,
//         description: "To help you solve your hardest coding problems."
//     },
//     {
//         id: "7",
//         name: "Fidget Spinner",
//         price: 21.99,
//         description: "Because we like to pretend we're in high school."
//     },
//     {
//         id: "8",
//         name: "Sticker Set",
//         price: 14.99,
//         description: "To prove to other devs you know a lot."
//     }
// ]

// export default products

// --------------------------------------------------------------

// P15 : Todo App - Phase 3
// // App.js
// import React from 'react'
// import TodoItem from './components/TodoItem'
// import todosData from './data/totosData'


// function App() {
//   let todoItems = todosData.map((todo)=>{
//     return(
//       <TodoItem key={todo.id} content={todo}/>
//     )
//   })

//   return(
//     <div className="todo-list">
//       {todoItems}
//     </div>
//   )
// }

// export default App


// // TodoItem.js
// import React from 'react';

// function TodoItem(props) {
//     return(
//         <div className="todoItem">
//             <input type="checkbox" checked={props.content.completed}/> 
//             <p>{props.content.text}</p>
//         </div>
//     )
// }

// export default TodoItem

//-----------------------------------------------------------------
// P16 Class-based Components
// // App.js:
// import React from "react"
// import Header from './classes/Header'
// import Greeting from './classes/Greeting'

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Header username="John Cena"/>
//         <Greeting />
//       </div>
//     )
//   }
// }

// export default App 

// // Header.js:
// import React from 'react'

// class Header extends React.Component {
//     render(){
//         return(
//             <header>
//                 <p>Wellcome {this.props.username}</p>
//             </header>
//         )
//     }
// }

// export default Header

// // Greeting.js:
// import React from 'react'

// class Greeting extends React.Component {
//     render() {
//         const date = new Date()
//         const hours = date.getHours()
//         let timeOfDay

//         if (hours < 12) {
//             timeOfDay = "morning"
//         } else if (hours >= 12 && hours < 17) {
//             timeOfDay = "afternoon"
//         } else {
//             timeOfDay = "night"
//         }

//         return(
//             <h1>Good {timeOfDay} to you, sir or madam!</h1>
//         )
//     }
// }

// export default Greeting

//------------------------------------------------------------

// P 17 : State

// //  App.js:
// import React from "react"

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       answare: "Yes"
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h1>Is this important to know?</h1>
//         <h1>{this.state.answare}</h1>
//       </div>
//     )
//   }
// }

// export default App  

// ------------------------------------------------------

// P18: State Practice 1
// // App.js:

// import React from 'react'

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       name: "John",
//       age: 32
//     }
//   }

//   render() {
//     return(
//       <div>
//         <p>Name : {this.state.name}</p>
//         <p>Age : {this.state.age}</p>
//       </div>
//     )
//   }
// }

// export default App

// -------------------------------------------------------------------

// P19: State Practice 1
// // App.js:
// import React from 'react'

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       name: "John",
//       age: 32
//     }
//   }

//   render() {
//     return(
//       <div>
//         <p>Name : {this.state.name}</p>
//         <p>Age : {this.state.age}</p>
//       </div>
//     )
//   }
// }

// export default App

// ---------------------------------------------------

// P 20: State Practice 2

// import React, {Component} from 'react'

// class App extends Component {
//     constructor() {
//       super()
//       this.state = {
//         isLoggedIn: false
//       }
//     }
  
//     render() {
//       let wordDisplay
//       if(this.state.isLoggedIn) {
//         wordDisplay = "in."
//       } else {
//         wordDisplay = "out."
//       }
//       return(
//         <div>
//           <p>You are currently logged {wordDisplay}</p>
//         </div>
//       )
//     }
//   }
  
//   export default App

// ------------------------------------------------------------

// P 21: Todo App - Phase 4
// // App.js
// import React, {Component} from 'react'
// import todosData from './data/totosData'
// import TodoItem from './classes/TodoItem'


// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       todoItems: todosData.map((item) => {
//         return (<TodoItem key={item.id} content={item}/>)
//       })
//     }
//   }

//   render() {
//     return(
//       <div>
//         {this.state.todoItems}
//       </div>
//     )
//   }
// }

// export default App

// // import React, {Component} from 'react'
// // Todo
// class TodoItem extends Component {
//     render() {
//         return(
//             <div>
//                 <input type="checkbox" checked={this.props.content.completed}/>
//                 <span>{this.props.content.text}</span>
//                 <br/>
//             </div>    
//         )
//     }
// }

// export default TodoItem

// ------------------------------------------------------------------------

// P 22:  Handling Events in React

// // App.js :
// import React, {Component} from 'react'

// function handleMouseOver() {
//   console.log("Mouse over")
// }

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       imageUrl: "https://bit.ly/2TqiiPH"
//     }
//   }

//   render() {
//     return(
//       <div>
//         <img onMouseOver={handleMouseOver} src={this.state.imageUrl}/>
//         <br/>
//         <br/>
//         <button onClick={()=>{console.log("I was clicked.")}} onChange={()=>{console.log("status changed")}>BUTTON</button>
//       </div>
//     )
//   }
// }

// export default App

// --------------------------------------------------------

// P23:  Changing State

// App.js
// import React, {Component} from 'react'

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       count: 0
//     }
//     this.changeCounter = this.changeCounter.bind(this)
//   }

//   changeCounter() {
//     this.setState({count: this.state.count + 1})
//   }

//   render() {
//     return(
//       <div>
//         <div>{this.state.count}</div>
//         <button onClick={this.changeCounter}>Change</button>
//       </div>
//     )
//   }
// }

// export default App

// -----------------------------------

// P 24: Todo App - Phase 6

// // App.js:
// import React, {Component} from 'react'
// import todosData from './data/totosData'
// import TodoItem from './classes/TodoItem'


// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       todoItems: todosData
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }

//   handleChange(id) {
//     this.setState(prevState => {
//       const newTodos = prevState.todoItems.map(item =>{
//         if(item.id === id) {
//           item.completed = !item.completed
//         }
//         return item
//       })
//       return newTodos
//     })
//   }

//   render() {
//     let items = this.state.todoItems.map( item => 
//       (<TodoItem key={item.id} change={this.handleChange} content={item}/>) )

//     return(
//       <div>
//         {items}
//       </div>
//     )
//   }
// }

// export default App

// // TodoItems.js:

// import React, {Component} from 'react'

// class TodoItem extends Component {
//     render() {
//         return(
//             <div>
//                 <input type="checkbox" checked={this.props.content.completed}
//                 onChange={()=>{this.props.change(this.props.content.id)
//                 }}/>
//                 <span>{this.props.content.text}</span>
//                 <br/>
//             </div>    
//         )
//     }
// }

// export default TodoItem

// --------------------------------------------------------------------------

// P 25: Lifecycle Methods Part 1 & Lifecycle Methods Part 2

// // App.js
// import React, {Component} from 'react'

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {}
//   }

//   static getDerivedStateFromProps(props, state) {
//     /* 
//       - return the new updated state based on the props
//       - It can be confusing to use it sometimes, so avoid it.
//     */
//   }

//   getSnapshotBeforeUpdate() {
//     /*
//       - Creates a backup of the current way things are.(Object with multiple points inside of him, called snapshot.)
//       - It's not used frequently.+
//     */
//   }

//   componentDidMount() {
//     /* 
//       - It's runned only after the component was mounted for the first time
//       - It doesn't run on every rendering 
//       - Common use: - When using an API to get data from external source 
//                     - After the data is recived it can be desplayed
//     */
//   }

//   /*
//     - UNSAFE_componentWillReceiveProps(nextProps) from React 17.0 is deprecated to use it. 
//     - It wont't be a part of React anymore.
//     */
//   componentWillReceiveProps(nextProps) {  
//     /*
//       - Every time this component receive props from parent component this method is called
//       - It runs every time a parent component pass data to an child component.
//     */ 
//    if(nextProps.whatever !== this.props.whatever) {
//      // do something
//    }
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     /*
//       - It allows to think if this component need to be updated.
//       - It returns TRUE if needs update, and FALSE if doesn't.
//       - For example : if nextProps != nextState return TRUE
//     */
//   }

//   componentWillUnmount() {
//     /*
//       - It's purpose is to :  -clean-up your code before your component disappears
//                               -(ex: remove event listener)
//     */
//   }


//   render() {
//     return(
//       <div>
//         Code goes here
//       </div>
//     )
//   }
// }

// export default App

// -------------------------------------------------------------------

// P 26: Conditional Rendering

// // App.js
// import React, {Component} from 'react'
// import Conditional from './classes/Conditional'

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       isLoading: true
//     }
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({
//         isLoading: false
//       })
//     }, 5000)
//   }

//   render() {
//     return(
//       <div>
//         <Conditional isLoading={this.state.isLoading} />
//       </div>
//     )
//   }
// // render() {
// //    return (this.state.isLoading ? <p>Loading...</p> : <Conditional />)
// // }
// }

// export default App


// // Conditional.js

// import React, {Component} from 'react'

// class Conditional extends Component {
//     render() {
//         if(this.props.isLoading) {
//             return(
//                 <div>
//                     Loading...
//                 </div>
//             )
//         } else {
//             return(
//                 <div>
//                     Some cool stuff about conditional rendering.
//                 </div>
//             )
//         }
        
//     }
// }

// export default Conditional

// ---------------------------------------------------------------

// P 27: Conditional Rendering Practice

// // App.js
// import React, {Component} from 'react'
// import Message from './classes/Message'

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       isLoggedIn: false
//     }
//     this.logIn = this.logIn.bind(this)
//     this.logOut = this.logOut.bind(this)
//   }

//   logOut() {
//     this.setState(prevState => {
//       return {
//         isLoggedIn: false
//       }
//     })
//   }

//   logIn(){
//     this.setState(prevState => {
//       return {
//         isLoggedIn: true
//       }
//     })
//   }

//   render() {
//     return(
//       <div>
//         <div>
//           <Message isLoggedIn = {this.state.isLoggedIn}/>
//         </div>
//         <div>
//           <button onClick={this.logIn}>Login</button> <span></span>
//           <button onClick={this.logOut}>Logout</button>
//         </div>
//       </div>
//     )
//   }

// }

// export default App

// // Message.js:
// import React, {Component} from 'react'

// class Message extends Component {
//     render() {
//         return(
//             <div>
//                 {
//                     this.props.isLoggedIn ? 
//                     <p>You are logged in.</p> :
//                     <p>You are logged out.</p>
//                 }
//             </div>
//         )
//     }
// }

// export default Message

// -------------------------------------------------------------------------

// P 28: Todo App - Phase 7

// // App.js
// import React, {Component} from 'react'
// import todosData from './data/totosData'
// import TodoItem from './classes/TodoItem';

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       tododItems: todosData
//     }
//     this.changeItem = this.changeItem.bind(this)
//   }

//   changeItem(id) {
//     this.setState(prevState => {
//       const newItems = prevState.tododItems.map(item => {
//         if( item.id === id) {
//           item.completed = !item.completed
//         }
//         return item
//       })
//       return newItems
//     })
//   }

//   render() {
//     let items = this.state.tododItems.map(item => {
//       return <TodoItem key={item.id} content={item} change={this.changeItem}/>
//     })

//     return(
//       <div>
//         {items}
//       </div>
//     )
//   }

// }

// export default App


// // TodoItem.js
// import React, {Component} from 'react'

// class TodoItem extends Component {
//     render() {
//         let itemStyle = null
//         if(this.props.content.completed===true) {
//             itemStyle={
//                 textDecoration: "line-through"
//             }
//         } else {
//             itemStyle={
//                 textDecoration: ""
//             }
//         }

//         return(
//             <div>
//                 <input type="checkbox" checked={this.props.content.completed}
//                 onChange={()=>{this.props.change(this.props.content.id)
//                 }}/>
//                 <span style={itemStyle}>{this.props.content.text}</span>
//                 <br/>
//             </div>    
//         )
//     }
// }

// export default TodoItem

// -----------------------------------------------------------------

// P 29:Fetching data from an API
// // App.js
// import React, {Component} from 'react'

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       loading: false,
//       character: {}
//     } 
//   }

//   componentDidMount() {
//     this.setState({loading:true})
//     fetch("https://swapi.co/api/people/1")
//       .then(response => response.json())
//       .then(data => {
//         this.setState({
//           loading:false,
//           character: data
//         })
//       }) 
//   }

//   render() {
//     let message = this.state.loading ? "Loading..." : this.state.character.name
//     return(
//       <div>
//         <p>{this.state.character.name}</p>
//       </div>
//     )
//   }
// }

// export default App

// ------------------------------------------------------------

// P 30: Forms Part 1
// // App.js
// import React, {Component} from 'react'

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       firstName: "",
//       lastName: "",
//     } 
//     this.handleChange = this.handleChange.bind(this)
//   }

//   handleChange(event) {
//     this.setState({
//       [event.target.name]: event.target.value
//     })
//   }

//   render() {
//     return(
//       <div>
//         <form>
//           <div>
//             <label>First Name: <input 
//             type="text" 
//             name="firstName" 
//             value={this.state.firstName} 
//             onChange={this.handleChange} 
//             /></label>
//           </div>
//           <div>
//             <label>Last Name: <input 
//             type="text" 
//             name="lastName" 
//             value={this.state.lastName} 
//             onChange={this.handleChange} 
//             /></label>
//           </div>
//           <div><
//             input type="submit" value="SUBMIT"/>
//           </div>
//           <div>
//             <p>{this.state.firstName +" " + this.state.lastName}</p>
//           </div>
//         </form>
//       </div>
//     )
//   }
// }

// export default App

// ---------------------------------------------------------

// P 31: Forms Part 2

// App.js
// import React, {Component} from 'react'

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       firstName: "",
//       lastName: "",
//       checker: false,
//       gender: "",
//       favoriteColor:"blue"
//     } 
//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }

//   handleChange(event) {
//     if(event.target.name === "checker") {
//       this.setState({
//         [event.target.name] : !this.state.checker
//       })
//       return 
//     }
//     this.setState({
//       [event.target.name]: event.target.value
//     })
//   }


//   handleSubmit(event) {
//     {/* Your Code... Ex: prevent default behaviour*/}
//     event.preventDefault()
//   }

//   render() {
//     return(
//       <div>




//         {/* INPUT FORM*/}
//         <form onSubmit={this.handleSubmit}>
//           <div>
//             <label>First Name: <input 
//             type="text" 
//             name="firstName" 
//             value={this.state.firstName} 
//             onChange={this.handleChange} 
//             /></label>
//           </div>
//           <div>
//             <label>Last Name: <input 
//             type="text" 
//             name="lastName" 
//             value={this.state.lastName} 
//             onChange={this.handleChange} 
//             /></label>
//           </div>
//           <div>
//             <input type="submit" value="SUBMIT"/>
//             {/**
//             - <button>SUBMIT NOW</button> is equivalent of <input type="submit" value=""SUBMIT NOW/>
//             - You can set onSubmit event on:  - form tag (ex: <form onSubmit={handleSubmit}> ... </form>)
//                                               - button/input tag
//             */}
//           </div>
//           <div>
//             <p>{this.state.firstName +" " + this.state.lastName}</p>
//           </div>
//         </form>




//         {/* CHECKBOX*/}
//         <input 
//           name="checker"
//           type="checkbox"
//           checked={this.state.checker}
//           onChange={this.handleChange}
//         />



//         {/* RADIO BUTTONS*/}
//         <br/><br/>
//         <label>
//           <input 
//             name="gender"
//             type="radio"
//             value="male"
//             checked={this.state.gender === "male"}
//             onChange={this.handleChange}
//           />
//         Male</label>
//         <label>
//           <input 
//             name="gender"
//             type="radio"
//             value="female"
//             checked={this.state.gender === "female"}
//             onChange={this.handleChange}
//           />
//         Female</label>
//         <p>You are a {this.state.gender}</p>
//         {/* Formik - Form framework */}




//         {/* SELECT OPTIONS */}
//         <select 
//           value={this.state.favoriteColor}
//           onChange={this.handleChange}
//           name="favoriteColor"
//         >
//           <option value="blue">BLUE</option>
//           <option value="red">RED</option>
//           <option value="green">GREEN</option>
//         </select>
//         {console.log(this.state.favoriteColor)}



//       </div>
//     )
//   }
// }

// export default App

// ------------------------------------------------------