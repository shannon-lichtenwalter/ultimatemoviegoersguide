import React from 'react';
import GetMovieLists from '../../Services/getMovieLists';
import Movie from '../Movie/Movie';

class HomePage extends React.Component{
  state = {
    display: 'now_playing',
    data: null
  }

  getList = (type) => {
    GetMovieLists.getList(type)
    .then((res) => {
      this.setState({
        data:res
      })
    })
    .catch(e => this.props.setError(e));
  }

  updateMovieList = (e) => {
    this.setState({
      display:e.target.value
    }, () => this.getList(this.state.display))
  }

  componentDidMount = () => {
    if(this.props.error){
      this.props.resetError()
    }

    this.getList(this.state.display)
  }
  render(){
    return(
      <section>
        <select onChange={(e)=>this.updateMovieList(e)}>
          <option value='now_playing'>Now Playing</option>
          <option value='popular'>Popular</option>
          <option value='top_rated'>Top Rated</option>
        </select>
        <ul className='movies'>
          {this.state.data && this.state.data.results.map((movie, index) => {
            return <Movie key={index} data={movie} showDetails={this.props.showDetails}/>
          })}
        </ul>
      </section>
    )
  }
}

export default HomePage;