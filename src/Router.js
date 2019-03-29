import React, { Component } from 'react';
import { 
	BrowserRouter as Router, 
	Route,
	Switch,
	Link 
} from "react-router-dom";
import HomeScreen from './Views/HomeScreen/HomeScreen';
import LoginScreen from './Views/LoginScreen/LoginScreen';

const Home = () => {
	return <h1>Esto es Root</h1>;
};

const Login = () => {
	return <h1>Esto es Login</h1>;
};

const _404 = () => {
	return <h1>ERROR 404</h1>;
};

const Profile = ({ match: { params: { name } } }) => {
	return (
		<div>
			<h1>Pefil { name }</h1>
			<Route 
			path="/profile/elias" 
			component={() => {
				return <h3>Es Elias</h3>
			}}
			/>
		</div>
	);
};

class RouterView extends Component {

	render(){
		return (
			<Router>
				<div>
					<Link to="/">Home</Link>
					<Link to="/login">Login</Link>
					<Link to="/noexiste">Error</Link>
					<Link to="/profile/elias">Elias</Link>
					<Switch>
						<Route
						exact
						path="/" 
						component={HomeScreen}
						/>
						<Route 
						path="/login" 
						component={LoginScreen}
						/>
						<Route 
						path="/profile/:name?" 
						component={Profile}
						/>
						<Route
						component={_404}
						/>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default RouterView;