import React from 'react';
import axios from 'axios';

export default class Login extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
      loginErrors: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    const { email, password } = this.state;

    axios.post("http://localhost:3001/sessions", {
      user: {
        email,
        password,
      }
    },
    {
      withCredentials: true  })
      .then(response => {
        console.log("e is", e);
        if (response.data.logged_in){
          console.log("data login", response.data);
          this.props.history.push('/');
          // this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch( error => {
          console.log("login error", error)
        })
    e.preventDefault();

  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
    render() {
    return(
      <div>
        <form>
          <input type= "email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required/>
          <input type= "password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required/>
          <button onClick={this.handleSubmit} type= "submit">Login</button>
        </form>
      </div>
    )
  }
}