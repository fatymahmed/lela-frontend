import React from 'react';
import axios from 'axios';

export default class AddListForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    listDesc: '',
    name: '',
    price: 0,
    category: '',
    description: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { listDesc, name, price, description, category } = this.state;
    axios.post("http://localhost:3001/lists", {
      list: { 
        description: listDesc
        // ,
        // items_attributes: [{
        //   name,
        //   price,
        //   description,
        //   category
        // }]
      }
    },
    {
      withCredentials: true  })
      .then(response => {
        console.log(response);
      })
      .catch( error => {
          console.log("login error", error)
        })
    event.preventDefault();    this.resetStates();
  }

  resetStates() {
    this.setState({
      listDesc: '',
      name: '',
      price: 0,
      description: '',
      category: ''
    });
  }

  handleChange(event) {
    const { id, value } = event.target;
    console.log("id", id);
    console.log("val", value);
    this.setState({
      [id]: value,
    });
  }

render() {
  return(
    <div>
      <h2>Add List</h2>
      <form>
      <div className="form-group">
          <label for="List-Description">List Description</label>
          <input type="text" className="form-control" id="listDesc" placeholder="List Description" onChange={this.handleChange}/>
      </div>
    </form>
    <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Create List</button>
  </div>
  )
}
}