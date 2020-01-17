import React, {Component} from 'react';

class Movie extends Component{
    
    render() {
        const {poster,title, year,id} = this.props;
        return (
          <div className="card Movie-Item" key={id}>
            <div className="card-image">
              <figure className="image ">
                <img src={poster} alt={title}/> 
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img  src={poster} alt={title}/>
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">{title}</p>
                  <p className="subtitle is-6">{year}</p>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default Movie;
