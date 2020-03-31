import React from 'react';
import GetMovieLists from '../../Services/getMovieLists';
import Movie from '../Movie/Movie';

class SearchPage extends React.Component {
  state = {
    searchField: null,
    data: null
  }

  handleSearch = (e) => {
    this.setState({ 
      searchField: e.target.value 
    }, this.searchMovies())
  }

  searchMovies = () => {
    console.log(this.state.searchField)
    if (this.state.searchField) {
      GetMovieLists.searchFilms(this.state.searchField)
      .then((res) => {
        this.setState({
          data:res
        })
      })
      .catch(e => this.props.setError(e));
    }
  }

  componentDidMount = () => {
    if (this.props.error) {
      this.props.resetError()
    }
  }

  render() {
    return (
      <section>
        <form onSubmit={(e)=>e.preventDefault()}>
          <fieldset>
            <label htmlFor='search'>Search For A Movie</label>
            <input type='text' id='search' name='search' onChange={(e) => this.handleSearch(e)}></input>
          </fieldset>
        </form>
        <ul>
          {this.state.data && this.state.data.results.map((movie, index) => {
            return <Movie key={index} data={movie} showDetails={this.props.showDetails}/>
          })}
        </ul>
      </section>
    )
  }
}

export default SearchPage;