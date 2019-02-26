import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
  const sessionLinks = () => {
    return(
      <nav className="login-signup">
        <Link to="/login">Log In</Link>
        <br/>
        <br/>
        <Link to="/signup">Sign Up</Link>
      </nav>
    )
  }

  const personalGreeting = () => {
    return(
      <hgroup className="header-group">
        <h1 className="header-name">Hello {currentUser.username}</h1>
        <button className="header-button" onClick={logout}>Log Out</button>
      </hgroup>
    )
  }

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;