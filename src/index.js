import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Fav from './fav';
import registerServiceWorker from './registerServiceWorker';
import {Switch,Route,BrowserRouter} from 'react-router-dom';

ReactDOM.render(
	<BrowserRouter>
		<Switch>
		<Route exact path="/" component = {App}/>
		<Route exact path ="/favorite" component = {Fav}/>
		</Switch>
	</BrowserRouter>, 
document.getElementById('root')
);
registerServiceWorker();
