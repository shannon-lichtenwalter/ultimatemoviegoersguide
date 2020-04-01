import React from 'react';
import { withRouter } from 'react-router-dom';
import GetMovieLists from '../../Services/getMovieLists'
import Movie from '../Movie/Movie';
import './MovieDetails.css';

class MovieDetails extends React.Component {
  state = {
    movieData: null,
    similarFilms: null
  }

  listGenres = (array) => {
    let string = '';
    for (let i = 0; i < array.length; i++) {
      if (i === array.length - 1) {
        string += '& ' + array[i].name
      } else {
        string += array[i].name + ', '
      }
    }
    return string;
  }

  componentDidMount = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    GetMovieLists.getMovie(this.props.match.params.id)
      .then((res) => {
        this.setState({
          movieData: res
        })
      }).catch(e => this.props.setError(e))

    GetMovieLists.getSimilarFilms(this.props.match.params.id)
      .then((res) => {
        this.setState({
          similarFilms: res
        })
      }).catch(e => this.props.setError(e))
  }

  render() {
    return (
      <section>
        {this.state.movieData && <div>
          <div className='detailedPage'>
            <div>
              <button onClick={() => this.props.history.goBack()}>back</button>
              {this.state.movieData.poster_path
                ? <img className='posterImage' src={`https://image.tmdb.org/t/p/w300/${this.state.movieData.poster_path}`} alt='movie poster' />
                : <div className='poster'>No Poster Data Available</div>
              }
            </div>
            <div>
              <h2>{this.state.movieData.title}</h2>
              <h3>Release Date: {new Date(this.state.movieData.release_date).toLocaleDateString()}</h3>
              <h4>Genres: {this.listGenres(this.state.movieData.genres)}</h4>
              <h4>Average Votes: {this.state.movieData.vote_average}/10</h4>
              <h4>Original Title: {this.state.movieData.original_title}</h4>
              <p>{this.state.movieData.overview}</p>
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