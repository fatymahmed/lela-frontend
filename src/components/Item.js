import React from 'react';
import axios from 'axios';

const Item = props => {
  function deleteItem() {
    const { id } = props.item;
    axios.delete(`http://localhost:3001/items/${id}`, 
    { withCredentials: true })
    .then(response => { 
      window.location.reload();        
    })
        .catch(error => {
        console.log("logout error", error);
        })
    }

  return(
    <div>
      <div>
        <h1>{props.item.name}</h1>
      </div>
      <button type="submit" onClick={deleteItem}>Delete item</button>
    </div>
  )
}
export default Item;