import React from 'react';

const AdminNavbar = (props) => {
  function handleLogout() {
    const { history, handleLogoutClick } = props;
    handleLogoutClick();
    history.push('/');
  }
  function addItem() {
    const { history } = props;
    history.push('/addItem');
  }
  function addList() {
    const { history } = props;
    history.push('/addList');
  }
 
  return(
    <div className="navbar">
      <nav>
        <button type="submit" onClick={addItem}>Add Item</button>
        <button type="submit" onClick={addList}>Add List</button>
        <button type="submit">View Orders</button>
        <button type="submit" onClick={handleLogout}>Log Out</button>
      </nav>
    </div>
  )
};

export default AdminNavbar;