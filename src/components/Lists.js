import React from 'react';
import axios from 'axios';
import List from './List'

export default class Lists extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    lists: []
    }
  }

  componentDidMount(){
    axios.get("http://localhost:3001/lists",
    {
      withCredentials: true  })
      .then(response => {
        console.log(response);
        this.setState({
            lists: response.data
        })
      })
      .catch( error => {
          console.log("login error", error)
        })
    event.preventDefault(); 
  }

render() {
  const { lists } = this.state;
  return(
    <div>
      <h2>Lists</h2>
      {lists.map( list => (
        <List list={list}/>
      ))}    
  </div>
  )
}
}