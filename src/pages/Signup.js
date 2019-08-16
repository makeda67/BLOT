import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from '../components/withAuth';


class Signup extends Component {

  state = {
    name: '',
    username: '',
    password: '',
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const name = this.state.name;
    const username = this.state.username;
    const password = this.state.password;

    this.props.signup({ name, username, password })
      .then( (user) => {
        console.log(user)
        this.setState({
            name: '',
            username: '',
            password: '',
        });
      })
      .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { name, username, password } = this.state;
    return (
      <>
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor='name'>Name:</label>
          <input id='name' type='text' name='name' value={name} placeholder='Name and Surname (or feudal title)' onChange={this.handleChange}/>
          
          <label htmlFor='username'>Username:</label>
          <input id='username' type='text' name='username' value={username} placeholder='Username to log in' onChange={this.handleChange}/>
          
          <label htmlFor='password'>Password:</label>
          <input id='password' type='password' name='password' value={password} placeholder='Password to log in' onChange={this.handleChange} />
          
          <input type='submit' value='Signup' />
        </form>

        <p>Already have account? 
          <Link to={'/login'}> Login</Link>
        </p>

      </>
    )
  }
}

export default withAuth(Signup);