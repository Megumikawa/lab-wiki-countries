import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


class CountriesList extends Component {

  state = {
    countries: []
  }
  componentDidMount() {
    axios.get('https://restcountries.eu/rest/v2/all')
    .then((response) => {
      this.setState({
        countries: response.data
      })
    })
    .catch(() => {
      console.log('Error while getting countries')
    })
  }

  render() {
    const{countries} = this.state
    return (
      <div className="columns">
        <div className="column">
          {
            countries.map((country, index) => {
              return <div key={index}><Link to={`/${country.cca3}`}>{country.name}</Link></div>
            })
          }
        </div>
      </div>
    )
  }
}

export default CountriesList