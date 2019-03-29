import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	ABRIR_ACTION
} from '../../Tienda/Acciones/LoadingActions';


class HomeScreen extends Component {

	render(){
		return (
			<div>
				<h1>{ this.props.myLoading }</h1>
				<button
					onClick={this.props.openLoading}
				>Abrir</button>
			</div>
		);
	}
}

const mapReducersToProps = (CATALOGO) => {
	return {
		myLoading: CATALOGO.loading
	};
};

const mapActionsToProps = (dispatch) => {
	return {
		openLoading: () => {
			dispatch(ABRIR_ACTION());
		}
	};
};

export default connect(
	mapReducersToProps, 
	mapActionsToProps
)(HomeScreen);