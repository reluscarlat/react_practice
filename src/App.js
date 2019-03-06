import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  const firstName = "Bob";
  const lastName = "Zirol";
  const date = new Date();
  const hour = date.getHours();
  let timeOfDay

  const styles = {
    color: "#FF8C00",
    backgroundColor: "#FF2D00"
}


  if(hour<12) {
    timeOfDay="morning"
    styles.color = "#04756F"
  }
  else if(hour>12 && hour<17) {
    timeOfDay="afternoon"
    styles.color = "#2E0927"
  } 
  else if(hour>17) {
    timeOfDay="night"
    styles.color = "#D90000"
  }

  return(
    <div>
      <Header />
      <MainContent />
      <Footer />
      <p>Hello {firstName  + " " + lastName}. The current hour is {date.getHours()+":"+date.getMinutes()}.</p>
      <p style={styles} >Good {timeOfDay}</p>
    </div>
  )
}

export default App