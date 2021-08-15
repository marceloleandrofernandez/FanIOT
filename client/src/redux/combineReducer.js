import {combineReducers} from 'redux';

import sensorsReducer from './sensors/sensorsReducer';
//import measurementsReducer from './measurements/measurementsReducer';


export const reducers = combineReducers({
	
	sensorsReducer: sensorsReducer,
	//apartmentReducer: apartmentReducer,
});

export default reducers;
