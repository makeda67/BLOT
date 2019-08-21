import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './components/Navbar.js';
import AnonRoute from './components/AnonRoute.js';
import PrivateRoute from './components/PrivateRoute.js';
import Footer from './components/Footer.js';
import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AuthProvider from './contexts/auth-context.js';
import CreateArmy from './pages/CreateArmy.js';
import UserPage from './pages/UserPage.js';
import EditUser from './pages/EditUser.js';
import ModifyArmy from './pages/ModifyArmy';
import NotFound from './pages/NotFound.js';

import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <AuthProvider>
          <div className="container">
            <Navbar />
            <div className="background">
              <Switch>
                <AnonRoute path="/signup" component={Signup} />
                <AnonRoute path="/login" component={Login} />
                <PrivateRoute path="/private" exact component={Private} />
                <PrivateRoute path='/private/:id' exact component={CreateArmy} />
                <PrivateRoute path='/private/modify' exact component={ModifyArmy} />
                <PrivateRoute path='/user/edit' exact component={EditUser} />
                <PrivateRoute path='/user' component={UserPage} />
                <Route component={NotFound} />
              </Switch>
            </div>
        </div>
        </AuthProvider>
      </Router>
    )
  }
}

export default App;
