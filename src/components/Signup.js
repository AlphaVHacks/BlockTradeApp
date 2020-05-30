import React from 'react';
import { Link, Redirect } from 'react-router-dom';
const sha256 = require('sha256');

class Signup extends React.Component {

  constructor(props) {
    super(props);
    this.state = { name: '', email: '', password: '', publicKey: '', toDashboard: false };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const formFilled = this.state.name !== '' && this.state.email !== '' && this.state.password !== '' && this.state.publicKey !== '';

    if (formFilled) {
      const name = this.state.name;
      const email = this.state.email;
      const password = sha256(this.state.password);
      const publicKey = this.state.publicKey;

      // check if email or publicKey is already in the DB
      fetch('http://localhost:5000/users')
        .then(res => {
          if (res.ok) return res.json();
          else console.log(res);
        })
        .then(data => {
          const userSameEmail = data.find(user => user.email === email);
          const userSamePublicKey = data.find(user => user.publicKey === publicKey);

          if (userSameEmail || userSamePublicKey) {
            alert('user with these credentials already exists')
          } else {
            // create a new account
            const newUser = { name, email, password, publicKey }

            fetch('http://localhost:5000/users/add', {
              method: 'POST',
              mode: 'cors',
              cache: 'no-cache',
              credentials: 'same-origin',
              headers: {
                'Content-Type': 'application/json'
              },
              redirect: 'follow',
              referrerPolicy: 'no-referrer',
              body: JSON.stringify(newUser)
            })
              .then(res => {
                if (res.status === 200) {
                  console.log('user created');
                  console.log(newUser);

                  // REDIRECT TO DASHBOARD

                } else {
                  alert('server error - failed to create user');
                  console.log(res);
                }
              })
          }
        });
    } else {
      alert('please complete the form')
    }

    // this.setState({ toDashboard: true })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    // if (this.state.toDashboard === true) {
    //   return <Redirect to='/' />
    // }

    return (
      <div className="Signup" >
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="name" className="form-control" name="name" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" name="email" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="publicKey">Public Key</label>
            <input type="publicKey" className="form-control" name="publicKey" onChange={this.handleChange} />
          </div>
          <button className="btn btn-outline-primary">Sign Up</button>
        </form>
        <Link to="/">
          <p>Already have an account? Log in here!</p>
        </Link>
      </div>
    );
  }
}

export default Signup;