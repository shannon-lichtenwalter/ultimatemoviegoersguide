import React from 'react';

class Movie extends React.Component{
  render(){
    return(
      <section>
        <h1>{this.props.data.title}</h1>
      </section>
    )
  }
}

export default Movie;