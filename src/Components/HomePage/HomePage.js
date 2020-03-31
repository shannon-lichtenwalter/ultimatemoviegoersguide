import React from 'react';
import GetMovieLists from '../../Services/getMovieLists';
import Movie from '../Movie/Movie';

class HomePage extends React.Component{
  state = {
    nowPlaying: true,
    data: null
  }
  componentDidMount = () => {
    if(this.props.error){
      this.props.resetError()
    }
    
    GetMovieLists.nowPlaying()
      .then((res) => {
        this.setState({
          data:res
        })
      })
      .catch(e => this.props.setError(e));
  }
  render(){
    return(
      <section>
        {this.state.nowPlaying && <h2>Now Playing In Theatres</h2>}
        {this.state.data && this.state.data.results.map((movie, index) => {
          return <Movie key={index} data={movie}/>
        })}
      </section>
    )
  }
}

export default HomePage;