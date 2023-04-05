import React, { useState } from 'react';
import './Login.css'; // Import the CSS file for styling

function Login(props) {
  const {username, password, setUsername, setPassword} = props;


  const { tryLogIn } = props;
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login form submitted');
    console.log('Username:', username);
    console.log('Password:', password);
    // You can add your own login logic here
    tryLogIn(username, password);
  }

  return (
    <div className="login-container">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} style={{marginLeft:"5%"}}/>
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{marginLeft:"5%"}}/>
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
