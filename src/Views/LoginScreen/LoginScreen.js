import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	CERRAR_ACTION
} from '../../Tienda/Acciones/LoadingActions';

class LoginScreen extends Component {

	render(){
		return (
			<div>
				<h1>{ this.props.myLoading }</h1>
				<button
					onClick={this.props.closeLoading}
				>Cerrar</button>
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
		closeLoading: () => {
			dispatch(CERRAR_ACTION());
		}
	};
};

export default connect(
	mapReducersToProps, 
	mapActionsToProps
)(LoginScreen);