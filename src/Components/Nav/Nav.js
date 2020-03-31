import React from 'react';
import { withRouter } from 'react-router-dom';
import './Nav.css';

class Nav extends React.Component{
  render(){
    return(
      <nav>
        <button onClick={() => this.props.history.push('/')}>Home</button>
        <button onClick={() => this.props.history.push('/search')}>Search</button>
        <button onClick={() => this.props.history.push('/about')}>About</button>
      </nav>
    )
  }
}

export default withRouter(Nav);