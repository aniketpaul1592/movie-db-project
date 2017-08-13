import React, { Component } from 'react';
import logo from './logo.png';
import {Link} from 'react-router-dom';
import Main from './main.js';

const marginSpace = {
	marginRight: 15,

}

class Header extends Component{
	constructor(props){
		super(props);
		this.state={
			searchTerm:"",
		}
		this.searchEngine = this.searchEngine.bind(this);
	}

	searchEngine(event){
		this.setState({searchTerm : event.target.value});
	}

	render(){
		return(
		<div className="headerLayoutApp">
          <img src={logo} className="logo" align="left"/>
          <div className = "shiftRight">
          	<Link to="/" style = {marginSpace}>Popular</Link>
          	<Link to="/favorite" style = {marginSpace}>Favourites</Link>
          	<input type = "text" value = {this.state.searchTerm} onChange={this.searchEngine}/>
          	<Main searchTerm = {this.state.searchTerm}/>
          </div>
        </div>
		);
	}
}

export default Header;