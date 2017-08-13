import React, { Component } from 'react';
import './App.css';
import Header from './header.js'
import Main from './main.js'

class App extends Component {
	constructor(props){
		super(props);
	}
  render() {
    return (
      <div className="App">
          <Header/>
      </div>
    );
  }
}

export default App;
