import {
	ABRIR,
	CERRAR
} from '../Acciones/LoadingActions';

export default (state = "Cerrado", action) => {
	switch(action.type){
		case ABRIR:
			return "Abierto";
		break;
		case CERRAR:
			return "Cerrado";
		break;
		default:
			return state;
		break;
	}
};