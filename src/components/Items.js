import React from 'react';
import axios from 'axios';
import List from './List'
import Item from './Item';

export default class Items extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    items: []
    }
  }

  componentDidMount(){
    axios.get("http://localhost:3001/items",
    {
      withCredentials: true  })
      .then(response => {
        console.log(response);
        this.setState({
            items: response.data
        })
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
      <h2>Items</h2>
      {items.map( item => (
        <Item item={item}/>
      ))}    
  </div>
  )
}
}