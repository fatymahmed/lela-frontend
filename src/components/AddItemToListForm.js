import React from 'react';
import axios from 'axios';

export default class AddItemToListForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    name: '',
    price: 0,
    category: '',
    description: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { name, price, description, category } = this.state;
    const { List_id } = this.props.location;
    axios.post(`http://localhost:3001/lists/{List_id}/items`, {
        item: {
          name,
          price,
          description,
          category
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
      <div className="form-group">
          <label for="name">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Name" onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label for="price">Price</label>
          <input type="number" className="form-control" id="price" placeholder="Price" onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label for="Category">Category</label>
          <input type="text" className="form-control" id="category" placeholder="Category" onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label for="Description">Description</label>
          <input type="text" className="form-control" id="description" placeholder="Description" onChange={this.handleChange}/>
        </div>
      </form>
      <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Create List</button>
  </div>
  )
}
}