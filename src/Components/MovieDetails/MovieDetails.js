import React from 'react';
import { withRouter } from 'react-router-dom';

class MovieDetails extends React.Component{
  componentDidMount = () => {
    if(!this.props.movieDetails){
      this.props.history.push('/');
    };
  }

  returnHome = () => {
    this.props.history.push('/')
  }

  render(){
    return(
      <section>
        {!this.props.movieDetails 
        ? this.returnHome()
        : <div>
          <button onClick={()=>this.props.history.goBack()}>back</button>
            {this.props.movieDetails.poster_path 
              ? <img src={`https://image.tmdb.org/t/p/w200/${this.props.movieDetails.poster_path}`} alt='movie poster'/>
              : <div className='poster'>No Poster Data Available</div>
            }
            <h2>{this.props.movieDetails.title}</h2>
            <h3>Release Date: {new Date(this.props.movieDetails.release_date).toLocaleDateString()}</h3>
            <h4>Average Votes: {this.props.movieDetails.vote_average}/10</h4>
            <p>{this.props.movieDetails.overview}</p>
          </div>
        }
      </section>
    )
  }
}

export default withRouter(MovieDetails);