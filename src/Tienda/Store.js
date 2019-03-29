import { 
	combineReducers,
	createStore
} from 'redux';
import LoadingReducer from './Productos/LoadingReducer';

const CATALOGO = combineReducers({
	loading: LoadingReducer
});

export default createStore(CATALOGO);