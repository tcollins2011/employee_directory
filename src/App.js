import React, { Component } from "react";
import Data from "./data.json"
import Employees from "./components/Employees"

class App extends Component {

    state = {
      data: Data.data,
      search: "",
      order: "descend"
    }

    newOrder = ()=> {
      if(this.state.order = 'ascend'){
        const sorted = [...this.state.data].sort((a, b) => a.name > b.name ? 1 : -1)
        this.setState({
          ...this.state,
          data: sorted
      })
      } else{
        const sorted = [...this.state.data].sort((a, b) => a.name > b.name ? 1 : -1)
        this.setState({
          ...this.state,
          data: sorted
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















// function App() {

// //   const [employeeState, setEmployeeState] = useState({
// //     search: "",
// //     results: [],
// //     order: 'descend'
// //   });

// //   function changeOrder(order) {
// //     if(order === "ascend") {
// //       employeeState.results.sort((a,b) => a.name.first > b.name.first ? 1: -1);
// //     }
// //     else {
// //       employeeState.results.sort((a,b) => a.name.first > b.name.first ? -1: -1);
// //     }
// //     setEmployeeState({
// //       ...employeeState,
// //       order
// //     });
// //   }

// //   function handleInputChange = event => {
// //     const search = event.target.name;
// //     const value = event.target.value;
// //     this.setState({
// //     [search]: value
// //     });
// // };


//   return (
//   <h1></h1>
//   );
// }


export default App;


