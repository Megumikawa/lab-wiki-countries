import React, { Component } from 'react'
import axios from 'axios'

class CountryDetails extends Component {
  
  state = {
    countries: []
  }
  getCountry = () => {
    let id = this.props.match.params.countryId
    axios.get(`https://restcountries.eu/rest/v2/all`)
      .then((response)=> {
        this.setState({
          countries: response.data
        })
      })
      .catch(() => {
        console.log('Error while getting countries')
      })
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

export default CountryDetails

getPokemon = () => {
  let id = this.props.match.params.pokemonId
  axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
          let pokemon = {
              id: id,
              height: response.data.height,
              weight: response.data.weight,
              image: response.data.sprites.other.dream_world.front_default
          }

          this.setState({
              pokemon: pokemon
          })
      })
}