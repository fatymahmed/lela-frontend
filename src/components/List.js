import React from 'react';

const List = props => {
  function addItemRedirect() {
    console.log("list", props.list.id)
    props.history.push({
      pathname: '/addItemsToList',
      state: { List_id: props.list.id }
    })
  }
  function showList(){
    props.history.push({
      pathname: '/list',
      state: { id: props.list.id }
    })
  }
  return(
    <div>
      <div>
        <h1>{props.list.description}</h1>
      </div>
      <button type="submit" onClick={addItemRedirect}>Add Item To List</button>
      <button type="submit" onClick={showList}>Show List</button>
    </div>
  )
}
export default List;