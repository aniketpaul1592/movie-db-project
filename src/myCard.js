import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
var count =0;

function isSearchTerm(searchItem){
 	return function(item){
   		return !searchItem || item.title.toLowerCase().includes(searchItem.toLowerCase());
	}
}

class Card extends Component{
	constructor(props){
		super(props);
	}
	
	render(){
		return(
			<div className="container">
			{this.props.data.filter(isSearchTerm(this.props.searchTerm)).map(item=>
				<div key={item.id}>
					<div className="poster"><img src = {"https://image.tmdb.org/t/p/w300/"+item.poster_path} /></div>
					<span>{item.title}</span>
					<FontAwesome name='facebook-official'/>
					<FontAwesome name='whatsapp'/>
					<FontAwesome name='twitter-square'/>
					<FontAwesome name='heart-o'/>
				</div>
			)}
			</div>
		);
	}
}

export default Card;