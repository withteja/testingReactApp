import React, { Component } from "react";

export default class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
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

        this.props.xyz(this.state.username,this.state.password, "add-trip")
        // alert('A name was submitted: ' + this.state.username+' , '+ this.state.password);
        // event.preventDefault();
      }


    render() {
        return (
            <div>
                <h3>Admin view</h3>
            </div>
        );
    }
}