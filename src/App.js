import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import countries from './countries.json'


class App extends Component {

  state= {
    countries: countries
  }


  render() {
    const {countries} = this.state
    return (
      <div>
        <Navbar />
        <CountriesList countries={countries}/>
      </div>
    )
  }
}



export default App;
