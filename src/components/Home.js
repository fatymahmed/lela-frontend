import React from 'react';
import axios from 'axios';
import Registration from './auth/Registration';
import Login from './auth/Login';
import ItemForm from './ItemForm';
import AddListForm from './AddListForm';
import Lists from './Lists';
import AddItemToListForm from './AddItemToListForm';
import GuestNavbar from './GuestNavbar';
import Items from './Items';
import UserNavbar from './UserNavbar';
import AdminNavbar from './AdminNavbar';

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    }
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push('/dashboard');
  }

  handleLogoutClick() {
    axios.delete("http://localhost:3001/logout", 
    { withCredentials: true })
    .then(response => { 
      this.setState({
        loggedInStatus: "NOT_LOGGED_IN",
        user: {},
      })
      // this.props.handleLogout();
     })
     .catch(error => {
       console.log("logout error", error);
     })
  }
  componentDidMount(){
      axios.get("http://localhost:3001/logged_in",
      { withCredentials: true })
      .then(response => {
        if (response.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN") {
          this.setState({
              loggedInStatus: "LOGGED_IN",
              user: response.data.user,
            })
            console.log("still loggged in");
        }
        else if ( !response.data.logged_In & this.state.loggedInStatus === "LOGGED_IN") {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
            user: {},
          })
          console.log("nooooooot loggged in");

        }
      })
      .catch(error => {
        console.log("Check login error", error);
      })
   }
  render() {
    const { loggedInStatus, user } = this.state;
    if(loggedInStatus==="LOGGED_IN" && user.admin===false)
    {
      return(
        <div>
          {/* <ItemForm/> */}
          <h1>Home</h1>
          <UserNavbar history={this.props.history} handleLogoutClick={this.handleLogoutClick}/>
          <Items/>
          <Lists/>
          {/* <AddListForm/> */}
          {/* { <AddItemToListForm/> } */}
          <h1> Status {this.props.loggedInStatus}</h1>
          <button onClick={ () =>this.handleLogoutClick()}>Logout</button>
          {/* <Registration handleSuccessfulAuth={this.handleSuccessfulAuth}/>
          <Login handleSuccessfulAuth={this.handleSuccessfulAuth}/> */}
        </div>
      )
    }
    else if(loggedInStatus==="LOGGED_IN" && user.admin===true){
      return(
        <div>
          {/* <ItemForm/> */}
          <h1>Home</h1>
          <AdminNavbar history={this.props.history} handleLogoutClick={this.handleLogoutClick}/>
          <Items/>
          <Lists/>
          {/* <AddListForm/> */}
          {/* { <AddItemToListForm/> } */}
          <h1> Status {this.props.loggedInStatus}</h1>
          <button onClick={ () =>this.handleLogoutClick()}>Logout</button>
          {/* <Registration handleSuccessfulAuth={this.handleSuccessfulAuth}/>
          <Login handleSuccessfulAuth={this.handleSuccessfulAuth}/> */}
        </div>
      )
    }
    else{
      return(
        <div>
          {/* <ItemForm/> */}
          <h1>Home</h1>
          <GuestNavbar history={this.props.history}/>
          <Items/>
          <Lists/>
          {/* <AddListForm/> */}
          {/* { <AddItemToListForm/> } */}
          <h1> Status {this.props.loggedInStatus}</h1>
          <button onClick={ () =>this.handleLogoutClick()}>Logout</button>
          {/* <Registration handleSuccessfulAuth={this.handleSuccessfulAuth}/>
          <Login handleSuccessfulAuth={this.handleSuccessfulAuth}/> */}
        </div>
      )
    }
  }
}