import React, { Component } from 'react'

class CountriesList extends Component {
  render() {
    return (
      <div>
        {
          this.props.countries.map((country, index) => {
            return (<div>{country.name.common}</div>)
          })
        }
      </div>
    )
  }
}

export default CountriesList