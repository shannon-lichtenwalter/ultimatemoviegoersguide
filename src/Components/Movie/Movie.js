import React from 'react';
import './Movie.css';


class Movie extends React.Component{
  renderMovieDetails = () => {
    this.props.showDetails(this.props.data.id)
  }

  render(){
    return(
      <li className='movieListItem'>
        <button className='movieButton' onClick={()=> this.renderMovieDetails()}>
          {this.props.data.poster_path 
          ? <img className='posterImage' src={`https://image.tmdb.org/t/p/w200/${this.props.data.poster_path}`} alt='movie poster'/>
          : <div className='poster'>No Poster Data Available</div>
        }
        <h1>{this.props.data.title}</h1>
        </button>
      </li>
    )
  }
}

export default Movie;