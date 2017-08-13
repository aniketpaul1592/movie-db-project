import React, {Component} from 'react';
import Card from './myCard';
class Main extends Component{
	constructor(props){
		super(props);
		this.state= {
			result: null,
		};
		this.setSearchTopstories = this.setSearchTopstories.bind(this);
	}
	setSearchTopstories(result) {
		this.setState({ result });
	}
	componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=784269b0ba4570888b9d1299897c4846&language=en-US')
		.then(response => response.json())
		.then(result => this.setSearchTopstories(result))
		.catch(e => e);
    }
 
	render(){
		if (!this.state.result) { return null; }
		return(
		<div>
			<Card data={this.state.result.results} searchTerm = {this.props.searchTerm}/>	
			<p className="App-intro">
	          It will fetch data from api url and send the data as props to card.js which will show the required cards.
	        </p>
        </div>
		);
	}
}

export default Main;