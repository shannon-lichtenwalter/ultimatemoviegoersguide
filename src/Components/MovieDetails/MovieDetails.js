import React from 'react';
import { withRouter } from 'react-router-dom';
import GetMovieLists from '../../Services/getMovieLists'
import Movie from '../Movie/Movie';
import './MovieDetails.css';

class MovieDetails extends React.Component {
  state = {
    similarFilms: null
  }

  componentDidMount = () => {
    if (!this.props.movieDetails) {
      this.props.history.push('/');
    };
  }

  returnHome = () => {
    this.props.history.push('/')
  }

  componentDidMount = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    if (this.props.movieDetails) {
      GetMovieLists.getSimilarFilms(this.props.movieDetails.id)
        .then(res => {
          this.setState({
            similarFilms: res
          })
        }).catch(e => this.props.setError(e))
    }
  }

  render() {
    return (
      <section>
        {!this.props.movieDetails
          ? this.returnHome()
          : <div>
              <div className='detailedPage'>
                <div>
                  <button onClick={() => this.props.history.goBack()}>back</button>
                  {this.props.movieDetails.poster_path
                    ? <img className='posterImage' src={`https://image.tmdb.org/t/p/w300/${this.props.movieDetails.poster_path}`} alt='movie poster' />
                    : <div className='poster'>No Poster Data Available</div>
                  }
                </div>
                <div>
                  <h2>{this.props.movieDetails.title}</h2>
                  <h3>Release Date: {new Date(this.props.movieDetails.release_date).toLocaleDateString()}</h3>
                  <h4>Average Votes: {this.props.movieDetails.vote_average}/10</h4>
                  <h4>Original Title: {this.props.movieDetails.original_title}</h4>
                  <p>{this.props.movieDetails.overview}</p>
                </div>
              </div>
            Similar Movies:
            <ul className='movies'>
              {this.state.similarFilms && this.state.similarFilms.results.map((movie, index) => {
                return <Movie key={index} data={movie} showDetails={this.props.showDetails} />
              })}
            </ul>
          </div>
        }
      </section>
    )
  }
}

export default withRouter(MovieDetails);