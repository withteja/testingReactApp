import React, { Component } from "react";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id:'',
          username: '',
          password: ''
        };
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChangeUsername(event) {
        this.setState({username: event.target.value});
      }
      handleChangePassword(event) {
        this.setState({password: event.target.value});
      }

      handleSubmit(event) {
        const corsHeaders = {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
          "Access-Control-Max-Age": "86400",
        }
        fetch('https://worker.chokkarapu.workers.dev/signIn', {
          method: 'POST',
          headers: { 
                    'Content-Type': 'application/json'
                  },
            body:  JSON.stringify({"email":this.state.username,"password":this.state.password})
          })
          .then(res => res.json())
          .then(x => {

            if('id' in x){
              console.log(x)
              this.setState({
                id: x.id
            });
            }
            else{
              alert()
            }
              
              
              
          
        })
      }

      


    render() {
        return (
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="email" className="form-control" placeholder="Enter username" value={this.state.username} onChange={this.handleChangeUsername} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={this.handleChangePassword} />
                </div>

                {/* <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div> */}

                <label type="submit" className="btn btn-primary btn-block" onClick={this.handleSubmit} >Submit</label>
                {/* <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p> */}
            </form>
        );
    }
}