import React from 'react';
import './Movie.css';


class Movie extends React.Component{
  renderMovieDetails = () => {
    this.props.showDetails(this.props.data)
  }

  render(){
    return(
      <li onClick={()=> this.renderMovieDetails()}>
        {this.props.data.poster_path 
          ? <img src={`https://image.tmdb.org/t/p/w200/${this.props.data.poster_path}`} alt='movie poster'/>
          : <div className='poster'>No Poster Data Available</div>
        }
        <h1>{this.props.data.title}</h1>
      </li>
    )
  }
}

export default Movie;