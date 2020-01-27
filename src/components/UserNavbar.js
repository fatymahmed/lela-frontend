import React from 'react';

const UserNavbar = (props) => {
  function handleLogout() {
    const { history, handleLogoutClick } = props;
    handleLogoutClick();
    history.push('/');
  }
  return(
    <div className="navbar">
      <nav>
          <p>Logout</p>
        <button type="submit" onClick={handleLogout}>Log Out</button>
        <button type="submit">My Cart</button>
      </nav>
    </div>
  )
};

export default UserNavbar;