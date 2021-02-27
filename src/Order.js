import React, { Component } from "react";

export default class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
          payment:"",
          PTime:"",
          Time: (new Date).getTime(),
          car: ""
        };
        this.handleChangePayment = this.handleChangePayment.bind(this);
        this.handleChangePTime = this.handleChangePTime.bind(this);
        this.handleChangeCar = this.handleChangeCar.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChangePayment(event) {
        this.setState({payment: event.target.value});
      }
      handleChangePTime(event) {
        this.setState({PTime: event.target.value});
      }
      handleChangeCar(event) {
        this.setState({car: event.target.value});
      }

      async handleSubmit(event) {



      }

      getOrder(){
        console.log(this.props.data)
        // let orderItem=[];
        // for(let x in this.props.data){
          
        //   orderItem.push(<orderItem data={this.props.data[x]}/>)
        //   // console.log(this.props.data[x])
        // }
      }


    render() {
        return (
            <form>
                {this.getOrder()}
                <label>Payment</label><input  className="form-control" placeholder=" Strpieor Paypal"  onChange={this.handleChangePayment} />
                <label>PickupTime</label><input  className="form-control" placeholder=" Enter Pickup Time"  onChange={this.handleChangePTime} />
                <label>Car Description</label><input  className="form-control" placeholder=" Enter Car details"  onChange={this.handleChangeCar} />
                <label onChange={this.handleSubmit}>Submit</label>
            </form>
        );
    }
}