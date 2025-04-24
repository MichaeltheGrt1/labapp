import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
import Card from './Card.js';
import bootstrap from "bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1>CS 330L</h1>
      <h2>Section - 010</h2>
      <p>WVU ID: 800422152</p>
      <p>Hi I am Michael Kaulfuss</p>
      <Card/>
    </div>
  );
}

export default App;
