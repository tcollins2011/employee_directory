import React, { Component } from "react";
import Data from "./data.json"
import Employees from "./components/Employees"

class App extends Component {

    state = {
      data: Data.data,
      search: "",
      order: "ascend"
    }

    newOrder = ()=> {
      if(this.state.order = 'ascend'){
        const sorted = [...this.state.data].sort((a, b) => a[0] > b[0] ? 1 : -1)
        this.setState({
          ...this.state,
          data: sorted,
          order:""
      })
      } else{
        const sorted = [...this.state.data].sort((a, b) => a[0] > b[0] ? -1 : 1)
        this.setState({
          ...this.state,
          data: sorted,
          order:"ascend"
        })
      }
  }

  handleInputChange = event => {
    const search = event.target.name;
    const value = event.target.value;
    this.setState({
    [search]: value
    });
  };

  render(){
    console.log(this.state.data)
    return(
      <div>
        <Employees data = {this.state.data} search = {this.state.search} order = {this.state.order} handleInputChange = {this.handleInputChange} newOrder = {this.newOrder}  />
      </div>
    )
  
  }
}

export default App;


