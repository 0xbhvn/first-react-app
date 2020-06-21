import React, { Component } from 'react'
import './App.css' 
import User from './components/User'
import CounterProp from './components/CounterProp'
import ClickCounterTwo from './components/ClickCounterTwo'
import HoverCounterTwo from './components/HoverCounterTwo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterProp render={ (count, incrementCount) => <ClickCounterTwo count={ count } incrementCount={ incrementCount } /> } />
        <CounterProp render={ (count, incrementCount) => <HoverCounterTwo count={ count } incrementCount={ incrementCount } /> } />
        <User render={ (isLoggedIn) => isLoggedIn ? 'Bhaven' : 'Guest' } />
      </div>
    )
  }
}

export default App