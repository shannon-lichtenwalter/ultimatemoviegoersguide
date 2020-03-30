import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import HomePage from './Components/HomePage/HomePage';
import SearchPage from './Components/SearchPage/SearchPage';
import AboutPage from './Components/AboutPage/AboutPage';
import ErrorPage from './Components/ErrorPage/ErrorPage';

function App() {
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
              component={HomePage}
            />

            <Route
              exact
              path={'/search'}
              component={SearchPage}
            />

            <Route
              exact
              path={'/about'}
              component={AboutPage}
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

export default App;
