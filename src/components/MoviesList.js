import React, {Component} from 'react';
import Movie from './Movie'

class MoviesList extends Component{
    
    render() {
      const {movies} = this.props;
      return (
        <div className='MoviesList'>
        {
          movies.map(movie =>{
            return <Movie className='Movie-Item' key={movie.imdbID} poster={movie.Poster} title={movie.Title} year={movie.Year} />
          })
        }
        </div>

        )
    }
}

export default MoviesList;
