import React from 'react';
import axios from 'axios';
import List from './List'
import Item from './Item';

export default class ShowList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    list: {},
    items: []
    }
  }

  removeItemFromList(item_id){
    const { id } = this.props.location.state;
    axios.delete(`http://localhost:3001/collection/`, {
      data: {
        list_id: id,
        item_id
      }
    },
    { withCredentials: true })
    .then(response => { 
      window.location.reload();        
    })
        .catch(error => {
        console.log("logout error", error);
        })
  }
  componentDidMount(){
    const { id } = this.props.location.state;

    axios.get(`http://localhost:3001/lists/${id}`,
    {
      withCredentials: true  })
      .then(response => {
        console.log(response);
        this.setState({
            list: response.data.list,
            items: response.data.items
        })
      })
      .catch( error => {
          console.log("login error", error)
        })
    event.preventDefault(); 
  }

render() {
  const { list,items } = this.state;
  return(
    <div>
      <h1>{list.description}</h1>
      <div>
        {items.map ( item =>(
        <div>
          <Item item={item}/>
          <button type="submit" onClick={() => this.removeItemFromList(item.id)}>Remove Item From List</button>
        </div>
         )

        ) }
      </div>
    </div>
  )
  }
}