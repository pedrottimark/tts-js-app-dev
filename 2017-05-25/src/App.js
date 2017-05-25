import React, { Component } from 'react';

import {
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import './App.css';

import Albums from './Album';
import Posts from './Posts';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1><strong>React</strong> Router App</h1>
        </header>
        <main>
        <Switch>
            <Route exact={true} path="/" render={() => (
              <div>
                <h2>Home</h2>
                <p>DO WHAT?</p>
                <p>For now, go to <Link to="/users">Users</Link></p>
              </div>
            )} />
            <Route path="/users/:id/albums" render={(props) => (
              <Albums id={props.match.params.id} />
            )} />
            <Route path="/users/:id/posts" render={(props) => (
              <Posts id={props.match.params.id} />
            )} />
            <Route path="/users/:id" render={() => (
              <div>
                <h2>User</h2>
                <p>TO DO</p>
              </div>
            )} />
            <Route path="/users" render={() => (
              <div>
                <h2>Users</h2>
                <p>TO DO</p>
              </div>
            )} />
            <Route render={(props) => (
              <div className="NoRoute">
                <h2>404</h2>
              </div>
            )}>
            </Route>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
