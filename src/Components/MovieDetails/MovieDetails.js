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

  naughtyWordEraser = (string) => {
    const naughtyWordBank = ['fuck', 'fucking', 'shit', 'damn', 'damnit', 'ass'];
    let array= string.split(' ');
    let badWord=false;

    let cleanArray = array.map(word => {
      if(naughtyWordBank.includes(word.toLowerCase())){
        badWord=true;
        let filteredWord = word[0];
        for(let i=1; i<word.length; i++){
          filteredWord += '*';
        }
        return filteredWord;
      } else {
        return word
      }
    })
    
    if(!badWord){
      return string;
    }

    let newString= '';
    cleanArray.map(word => newString += `${word} `);
    return newString;
  }

  listGenres = (array) => {
    let string = '';
    for (let i = 0; i < array.length; i++) {
      if(array.length === 1){
        string += array[i].name
      }

      else if (array.length === 2){
        if(i=== 0){
          string += array[i].name
        } else {
          string += ' & ' + array[i].name
        }
      }

      else if (i === array.length - 1) {
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
        {!this.state.movieData && <h3 className='loading'>Loading...</h3>}
        {this.state.movieData && <div className='the-details-page'>
          <div className='detailedPage'>
            <div className='image-holder'>
              {this.state.movieData.poster_path
                ? <img className='posterImage' src={`https://image.tmdb.org/t/p/w300/${this.state.movieData.poster_path}`} alt='movie poster' />
                : <div className='poster'>No Poster Data Available</div>
              }
            </div>
            <div className='allMovieDetails'>
              <h2>{this.state.movieData.title}</h2>
              <h3>{this.naughtyWordEraser(this.state.movieData.tagline)}</h3>
              <p><span className='category'>Release Date:</span> {new Date(this.state.movieData.release_date).toLocaleDateString()}</p>
              <p><span className='category'>Genres:</span> {this.listGenres(this.state.movieData.genres)}</p>
              <p><span className='category'>Average Votes:</span> {this.state.movieData.vote_average}/10</p>
              <p><span className='category'>Original Title:</span> {this.state.movieData.original_title}</p>
              <p><span className='category'>Runtime:</span> {this.state.movieData.runtime} minutes</p>
              <p className='overview'>{this.state.movieData.overview}</p>
            </div>
          </div>
          <button className='back-button' onClick={() => this.props.history.goBack()}>Go Back</button>
          <h2 className='similarFilms'>Similar Movies:</h2>
            <ul className='movies'>
            {!this.state.similarFilms && <li>...searching</li>}
            {this.state.similarFilms && this.state.similarFilms.results.length === 0 && <li>No Similar Films Found In Database...</li>}
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