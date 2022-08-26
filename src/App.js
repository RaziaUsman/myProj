import React from "react"
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,link,Route} from "react-router-dom"


function App() {
  
  return (
    <div className="App">
    <Router>
    
      <link to="./home">Home Page</link>
      <link to="./about">About Page</link>
    <Route path="./home"><Home/></Route>
    <Route path="./about"><About/></Route>
    
    </Router>
    
    </div>
  );
}
function Home() {
  
  return (
    <div>
    <h1>Routing</h1>
    <p>This is Home Page </p>
    </div>
  );
}

function About() {
  
  return (
    <div >
    <h1>Routing</h1>
    <p>Ths is About page</p> 
    
    </div>
  );
}

export default App;
