import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="Signup">
      <form>
        <div className="form-group">
          <label for="name">Name</label>
          <input type="name" className="form-control" id="name" />
        </div>
        <div className="form-group">
          <label for="email">Email address</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">Signup</button>
      </form>
      <Link to="/">
        <p>Already have an account? Log in here!</p>
      </Link>
    </div>
  );
}

export default Login;