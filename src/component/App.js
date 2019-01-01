import React, { Component } from 'react';
//import logo from './logo.svg';
import '../styles/App.css';
import user from './user';
import AddNewUser from './addnewuser'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
class App extends Component {
  render() {
    
    return (
      <Router>
      <div className="App">
        <Link to='./add new user'>ADD NEW USER</Link><br/>
        <Link to='./users'>USER DETAILS</Link>
        <Switch>
          <Route path='/add new user' component={AddNewUser}/>
          <Route path='/users' component={user}></Route>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
