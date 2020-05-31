import React from 'react';
import { Link, Redirect } from 'react-router-dom';
const sha256 = require('sha256');

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = { email: '', password: '', toDashboard: false, isAuthenticating: false };
  }

  onSubmit = (e) => {
    this.setState({ isAuthenticating: true });

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
              this.setState({ toDashboard: true });

            } else {
              // prompt wrong password
              alert('incorrect password');
              this.setState({ isAuthenticating: false });
            }
          } else {
            // prompt no such user
            alert('user doesnt exist');
            this.setState({ isAuthenticating: false });
          }
        })
    } else {
      // prompt to fill form
      alert('please fill the form')
      this.setState({ isAuthenticating: false });
    }
  }

  onEmailInput = (e) => {
    this.setState({ email: e.target.value });
  }

  onPasswordInput = (e) => {
    this.setState({ password: e.target.value });
  }

  render() {
    if (this.state.toDashboard) {
      return <Redirect to="/dashboard" />
    }

    let showAuth;
    if (this.state.isAuthenticating) {
      showAuth = <p style={{ marginTop: "15px" }}>Authenticating...</p>
    }

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
        {showAuth}
        <Link to="/signup">
          <p style={{ marginTop: "10px" }}>Not registered? Sign up here!</p>
        </Link>
      </div>
    );
  }
}

export default Login;