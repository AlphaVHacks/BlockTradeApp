import React from 'react';
import { Link } from 'react-router-dom';
const sha256 = require('sha256');

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }

  onSubmit = (e) => {
    e.preventDefault();
    const formFilled = this.state.email !== '' && this.state.password !== '';

    if (formFilled) {
      const email = this.state.email;
      const hashedPassword = sha256(this.state.password);

      fetch('https://blocktrade-api.herokuapp.com/users')
        .then(res => {
          if (res.ok) return res.json();
          else console.log(res);
        })
        .then(data => {
          const user = data.find(user => user.email === email);

          if (user) {
            // check password
            if (hashedPassword === user.password) {
              console.log('authenticated!');
              console.log(user);

              // REDIRECT TO DASHBOARD

            } else {
              // prompt wrong password
              alert('incorrect password')
            }
          } else {
            // prompt no such user
            alert('user doesnt exist');
          }
        })
    } else {
      // prompt to fill form
      alert('please fill the form')
    }
  }

  onEmailInput = (e) => {
    this.setState({ email: e.target.value });
  }

  onPasswordInput = (e) => {
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" onChange={this.onEmailInput} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" onChange={this.onPasswordInput} />
          </div>
          <button className="btn btn-outline-primary">Login</button>
        </form>
        <Link to="/signup">
          <p>Not registered? Sign up here!</p>
        </Link>
      </div>
    );
  }
}

export default Login;