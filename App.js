import React, { Component } from 'react';
import './App.css';
import Header from './header.js'
import Main from './main.js'

class App extends Component {
	constructor(props){
		super(props);
    this.state = {
      searchTerm: ''
    }
    this.updateSearch = this.updateSearch.bind(this)
	}

  updateSearch(event){
    this.setState({
      searchTerm:event.target.value
    });
  }

  render() {
    return (
      <div className="App">
          <Header updateSearch={this.updateSearch}/>
          <Main searchTerm={this.state.searchTerm}/>
      </div>
    );
  }
}

export default App;
