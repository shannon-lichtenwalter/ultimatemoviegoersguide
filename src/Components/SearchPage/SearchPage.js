import React from 'react';

class SearchPage extends React.Component{
  componentDidMount = () => {
    if(this.props.error){
      this.props.resetError()
    }
  }
  
  render(){
    return(
      <h1>Search page here</h1>
    )
  }
}

export default SearchPage;