import React, { Component } from "react";
import axios from "axios"

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageInput: "",
      nameInput: "",
      priceInput: "",
      name: this.props.name,
      price: this.props.price,
      image: this.props.image
    };
    this.urlChangeHandler = this.urlChangeHandler.bind(this)
    this.nameChangeHandler = this.nameChangeHandler.bind(this)
    this.priceChangeHandler = this.priceChangeHandler.bind(this)
    this.addProd = this.addProd.bind(this)
    this.cancelAdd= this.cancelAdd.bind(this)
    // this.addToInventory= this.addToInventory.bind(this)
  }

 urlChangeHandler(e) {
    this.setState({ urlInput: e});
  }

  priceChangeHandler(e) {
    this.setState({ priceInput: e});
  }

  nameChangeHandler(e) {
    this.setState({ nameInput: e});
  }
 
    cancelAdd() {
this.setState({ urlInput: "",
    nameInput : "", 
    priceInput: ""})
}

  addProd(e) {
      axios.post("/api/product", { name: this.state.nameInput, price: this.state.priceInput, image: this.state.imageInput }).then(response => {
        this.setState({ name: response.data.name, price: response.data.price, image: response.data.image });
      });
      this.cancelAdd();
    }

  render() {
    return (
      <div>
        <div>Form</div>
        <input
          className="urlInput"
          value={this.state.urlInput}
          placeholder="Image URL..."
          onChange={e => this.urlChangeHandler(e.target.value)}
          required
        />
        <input
          className="productInput"
          value={this.state.nameInput}
          placeholder= "Product name..."
          onChange={e => this.nameChangeHandler(e.target.value)}
          required
        />
        <input className="priceInput" 
        value={this.state.priceInput}
        placeholder= "Price..."
        onChange={e => this.priceChangeHandler(e.target.value)}
        required
        />
        <div>
          <button className="cancelButton" onClick = {(e) => this.cancelAdd(e)}>Cancel</button>
          <button className="addButton" onClick = {(e) => this.addProd(e)}>Add to inventory</button>
        </div>
      </div>
    );
  }
}
