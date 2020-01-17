import React from 'react';

const List = props => {
  function addItemRedirect() {
    props.history.push({
      pathname: '/addItemToListForm',
      state: { List_id: props.list.id }
    })
  }
  return(
    <div>
      <div>
        <h1>{props.list.description}</h1>
      </div>
      <button type="submit" onClick={addItemRedirect}>Add Item To List</button>
    </div>
  )
}
export default List;