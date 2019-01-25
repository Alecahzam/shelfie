import React, { Component } from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventoryList: []
    };
  }
  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get("/api/inventory").then(res => {
      console.log(res.data);
      this.setState({ inventoryList: res.data });
    });
  }
  render() {
    const inventory = this.state.inventoryList.map((list, i) => {
      // return <div key={i}>{char.Name}</div>;
      return (
      <Dashboard
          id={list.product_id}
          name={list.name}
          price={list.price}
          image={list.image_url}
          // key={i}
          i={i}
          get= {this.getData}
        />,
            <Form
          id={list.product_id}
          name={list.name}
          price={list.price}
          image={list.image_url}
          get={this.getData}
          i= {i} 
          inventory={list}
        />
        );
    });
      return (
          <div className="App">
        <header className="App-header">
         <Header/>
         <Form/>
         <Dashboard/>
         </header>
         {inventory}
         </div>
    );
   }
   }
    
    export default App;
