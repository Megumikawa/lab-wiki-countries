import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
// import countries from './countries.json'


class App extends Component {

  // state= {
  //   countries: countries
  // }

  render() {
    
    return (
      <div>
        <Navbar />
        <CountriesList />
      </div>
    )
  }
}

export default App;
