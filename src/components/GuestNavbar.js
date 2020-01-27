import React from 'react';

const GuestNavbar = (props) => {
  function handleLogin() {
    const { history } = props;
    history.push('/login');
  }
  function handleSignin() {
    const { history } = props;
    history.push('/signup');
  }
  return(
    <div className="navbar">
      <nav>
        <button type="submit" onClick={handleLogin}>Log In</button>
        <button type="submit" onClick={handleSignin}>Sign up</button>
      </nav>
    </div>
  )
};

export default GuestNavbar;