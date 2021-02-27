
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {  Switch, Route, Link } from "react-router-dom";


import Login from "./login.component";
import SignUp from "./signup.component";
import Customer from "./Customer.js";
import Admin from "./Admin.js";
import Staff from "./Staff.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      id:'GTLY4yLA8EFVbHBZ6NX9',
      state_var: 'start',
    };
  }

  handleLogIn(username_temp,pwd_temp, state_temp){
    // this.setState({username: username_temp,password:pwd_temp, state_var:state_temp})
    alert('A name was submitted: '+ username_temp );
  }
  // const [state, setState] = useState('start')
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')

  // const handleLogIn = (username,password,state) => {
  //   alert('A name was submitted: ' + username+' , '+ password);
  // }

render(){
  return (
    <>
      {this.state.state_var === 'start' && (<>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={"/sign-in"}>Badger Bytes</Link>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-in"}>Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                <Route exact path='/' render={()=> <Login xyz={(username_temp,pwd_temp, state_temp) => this.handleLogIn(username_temp,pwd_temp, state_temp)}/>} />
                <Route exact path='/sign-in' render={()=> <Login xyz={(username_temp,pwd_temp, state_temp) => this.handleLogIn(username_temp,pwd_temp, state_temp)}/>} />
                <Route path="/sign-up" component={SignUp} />
              </Switch>
            </div>
          </div>
        </div>
        </>
        )}

      {this.state.state_var === 'customer' && (
        <Customer id={this.state.id}/>
      )}
      {this.state.state_var === 'admin' && (
        <Admin id={this.state.id}/>
      )}
      {this.state.state_var === 'staff' && (
        <Staff id={this.state.id}/>
      )}
    </>
  );
  }
}

export default App;
