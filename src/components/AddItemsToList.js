import React from 'react';
import axios from 'axios';
import List from './List'
import Item from './Item';

export default class AddItemsToList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    items: []
    }
    this.addItemToList = this.addItemToList.bind(this);
  }

  componentDidMount(){
    const { List_id } = this.props.location.state;
    console.log("id list", List_id);
    axios.post("http://localhost:3001/items_to_add",
    {
      id: List_id
    },{
      withCredentials: true  })
      .then(response => {
        console.log(response);
        this.setState({
            items: response.data.items
        })
      })
      .catch( error => {
          console.log("login error", error)
        })
    event.preventDefault(); 
  }
  addItemToList(id){
    const { List_id } = this.props.location.state;
    console.log("list id is", List_id);
    axios.post(`http://localhost:3001/collections`, {
        list_id: List_id,
        item_id: id
    },
    {
      withCredentials: true  })
      .then(response => {
        console.log(response);
        window.location.reload();        
      })
      .catch( error => {
          console.log("login error", error)
        })
    event.preventDefault();    
  }

render() {
  const { items } = this.state;
  return(
    <div>
      <h2>Items To Add</h2>
      {items.map( item => (
        <div>
          <Item item={item} history={this.props.history}/>
          <button type="submit" onClick={() => this.addItemToList(item.id)}>Add Item</button>
        </div>
      ))}    
  </div>
  )
}
}