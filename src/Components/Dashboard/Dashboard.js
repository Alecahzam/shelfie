import React, { Component } from "react";
import Product from "../Product/Product"
import axios from "axios"


export default class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
       inventory: this.props.list
        }
    }
    
    removeProd(id){
        axios.delete(`/api/product/:id${id}`).then(response => {
          this.setState({ inventory: response.data });
        });
        this.cancelAdd();
      }

  render() {
  
 return (<div>Dashboard
 <Product/>
 </div>
 )
  }
}
