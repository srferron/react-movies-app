import React, { Component } from 'react';
import Title from './components/Title'
import SearchForm from './components/SearchForm'
import MoviesList from './components/MoviesList'

import './App.css';
//Hemos instalado bulma para los webcomponents  'npm install bulma'
//Lo chulo es maquetar usando Flex Box https://css-tricks.com/snippets/css/a-guide-to-flexbox/
import 'bulma/css/bulma.css';
//Importamos globales

//Utilizamos un servicio gratuito http://www.omdbapi.com/apikey.aspx para obtener las peliculas

class App extends Component {

  state = {
    moviesResults: []
  }

  handleMoviesResults = (moviesResults) => {
    this.setState({
      moviesResults
    })
  }

  renderMoviesResults = () => {
    return <MoviesList movies={this.state.moviesResults} />
  }

  render() {
    return (
      <div className="App">
        <Title> Search for movies</Title>

        <div className="SearchForm-wrapper">
          <SearchForm onMoviesResults={this.handleMoviesResults} inputTitle='Write a movie name' buttonTitle='Search' />
        </div>
        {
          this.state.moviesResults.length === 0 ?
            <p>No movies</p> :
            this.renderMoviesResults()
        }
      </div>
    )
  };
}

export default App;
