import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="Login">
      <form>
        <div className="form-group">
          <label for="email">Email address</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      <Link to="/signup">
        <p>Not registered? Sign up here!</p>
      </Link>
    </div>
  );
}

export default Login;