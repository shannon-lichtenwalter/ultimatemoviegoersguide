import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import HomePage from './Components/HomePage/HomePage';
import SearchPage from './Components/SearchPage/SearchPage';
import AboutPage from './Components/AboutPage/AboutPage';
import ErrorPage from './Components/ErrorPage/ErrorPage';

class App extends React.Component {
  state = {
    error: null
  }

  setError = (e) => {
    this.setState({
      error: e
    })
    this.props.history.push('/error')
  }

  resetError = () => {
    this.setState({
      error: null
    })
  }
  render() {
    return (
      <main className='App'>
        <Nav />
        <header>
          <h1>Ultimate Moviegoers Guide</h1>
        </header>
        <Switch>
          <Route
            exact
            path={'/'}
            component={() => <HomePage
              error={this.state.error}
              setError={this.setError}
              resetError={this.resetError}
            />}
          />

          <Route
            exact
            path={'/search'}
            component={() => <SearchPage
              error={this.state.error}
              resetError={this.resetError}
              />}
          />

          <Route
            exact
            path={'/about'}
            component={() => <AboutPage
              error={this.state.error}
              resetError={this.resetError}
              />}
          />

          <Route
            exact
            path={'/error'}
            component={ErrorPage}
          />
        </Switch>

      </main>
    );
  }
}

export default withRouter(App);
