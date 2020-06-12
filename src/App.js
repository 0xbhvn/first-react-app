import React from 'react';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'

function App() {
  return (
    <div className="App">
      <Greet name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Tony" heroName="Ironman">
        <button>Action</button>
      </Greet>
      <Greet name="Bhaven" heroName="Awesoman" />
      <Welcome name="Bruce" heroName="Batman" />
      <Welcome name="Tony" heroName="Ironman" />
      <Welcome name="Bhaven" heroName="Awesoman" />
    </div>
  );
}

export default App;
