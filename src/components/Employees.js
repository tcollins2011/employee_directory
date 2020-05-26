import React, { Component } from 'react';
import ListRender from './ListRender';
import SearchBar from './searchbar'

class Employees extends Component { 
    render() {
        return (
            <div>
                <SearchBar search = {this.props.search} handleInputChange ={this.props.handleInputChange} />
                <ListRender data = {this.props.data} search = {this.props.search} newOrder = {this.props.newOrder}/>
            </div>
        )
    }
}

export default Employees;