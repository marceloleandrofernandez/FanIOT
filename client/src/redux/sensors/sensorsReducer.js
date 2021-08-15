import {
	CREATE_SENSOR,
	GET_SENSORS,
	GET_SENSOR_BY_ID,
	DELETE_SENSOR_BY_ID,
} from './sensorsActions';

const initialState = {
	sensorCreated: [],
	sensortDetail: [],
	allSensors: [],
	sensorDeleted: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_SENSOR:
			return {
				...state,
				sensorCreated: [...state.sensorCreated, action.payload],
			};
		case GET_SENSORS:
			return {
				...state,
				allSensors: action.payload,
			};
		case GET_SENSOR_BY_ID:
			return {
				...state,
				sensortDetail: action.payload,
			};
		case DELETE_SENSOR_BY_ID:
			return {
				...state,
				sensorDeleted: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
