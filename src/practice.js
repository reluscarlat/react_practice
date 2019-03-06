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