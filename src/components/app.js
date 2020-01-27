import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import Dashboard from './Dashboard';
import Home from './Home';
import Items from './Items';
import Lists from './Lists';
import AddItemToListForm from './AddItemToListForm';
import AddItemsToList from './AddItemsToList';
import ShowList from './ShowList';
import Login from './auth/Login';
import Registration from './auth/Registration';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  
  checkLoginStatus() {
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
       }
     })
     .catch(error => {
       console.log("Check login error", error);
     })
  }
 
  componentDidMount(){
    this.checkLoginStatus();
  }
 
  handleLogout() {
    this.setState({
     loggedInStatus: "NOT_LOGGED_IN",
     user: {},
    })
  }
 
  handleLogin(data) {
    const { user } = data;
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user,
    })
  }
  render() {
    return(
     <div>
     <BrowserRouter>
       <Switch>
         <Route 
           exact 
           path={"/"} 
           render={props => (
             <Home { ...props} handleLogin={this.handleLogin} handleLogout={this.handleLogout} loggedInStatus={this.state.loggedInStatus}/>
           )} 
         />
         <Route exact path={"/login"}
         render={props => (<Login { ...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus}/>)} />
         <Route exact path={"/signup"}
         render={props => (<Registration { ...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus}/>)} />
         <Route exact path={"/lists"}
         render={props => (<Lists { ...props} loggedInStatus={this.state.loggedInStatus}/>)} />
         <Route exact path={"/items"}
         render={props => (<Items { ...props} loggedInStatus={this.state.loggedInStatus}/>)} />
         <Route exact path={"/addItemToListForm"}
         render={props => (<AddItemToListForm { ...props} loggedInStatus={this.state.loggedInStatus}/>)} />
        <Route exact path={"/addItemsToList"}
         render={props => (<AddItemsToList { ...props} loggedInStatus={this.state.loggedInStatus}/>)} />
         <Route exact path={"/list"}
         render={props => (<ShowList { ...props} loggedInStatus={this.state.loggedInStatus}/>)} />
         </Switch>
     </BrowserRouter>
   </div>
    )
  }
 
 }