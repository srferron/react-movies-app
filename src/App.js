import React from 'react';
import Title from './components/Title'
import SearchForm from './components/SearchForm'
import './App.css';
//Hemos instalado bulma para los webcomponents  'npm install bulma'
//Lo chulo es maquetar usando Flex Box https://css-tricks.com/snippets/css/a-guide-to-flexbox/
import 'bulma/css/bulma.css';
//Importamos globales
import * as GLOBAL from '../global/Constants';

//Utilizamos un servicio gratuito http://www.omdbapi.com/apikey.aspx para obtener las peliculas

function App() {
  return (
    <div className="App">
      <Title> Search for movies</Title>

      <div className="columns is-mobile is-centered">
        <div className="column is-half">
          <div className="bd-notification is-primary">
            <SearchForm inputTitle='Write a movie name' buttonTitle='Search' />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
