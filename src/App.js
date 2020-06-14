import React from 'react';
import './App.css';
import Counter from './components/Counter'
import Welcome from './components/Welcome'
import Greet from './components/Greet'

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <Welcome name = 'Bruce' heroName = 'Batman' />
      <Greet name = 'Bhaven' heroName = 'Awesoman' />
    </div>
  );
}

export default App;