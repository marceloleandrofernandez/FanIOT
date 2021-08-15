import axios from 'axios';
export const CREATE_SENSOR = 'CREATE_SENSOR';
export const GET_SENSORS = 'GET_SENSORS';
export const GET_SENSOR_BY_ID = 'GET_SENSOR_BY_ID';
export const DELETE_SENSOR_BY_ID = 'DELETE_SENSOR_BY_ID'

export function createSensor(sensor) {
    return async function (dispatch) {
        const {data} = await axios.post(`http://localhost:3001/sensors/`,sensor);
        dispatch({type: CREATE_SENSOR, payload: data});
    };
}

/* export function createApartment(apartment) {
	return function (dispatch) {
		return axios.post(`http://localhost:3001/apartments/`,apartment).then(
			res => {
				console.log('respuesta exitosa', res);
				dispatch({type: CREATE_APARTMENT, payload: res.data});
			},
			err => {
				return new Error(err);
			}
		);
	};
} */


/* export function getApartmentById(id) {
	return async function (dispatch) {
		const {data} = await axios.get(`http://localhost:3001/apartments/${id}`);
		dispatch({type: GET_APARTMENT_BY_ID, payload: data});
	};
}
export function deleteApartmentById(id) {
	return async function (dispatch) {
		const {data} = await axios.delete(`http://localhost:3001/apartments/delete/${id}`);
		dispatch({type: DELETE_APARTMENT_BY_ID, payload: data});
	};
}

export function getAllApartments(buildingId) {
	return async function (dispatch) {
		const {data} = await axios.get(`http://localhost:3001/apartments/all/${buildingId}`);
		dispatch({type: ALL_APARTMENTS, payload: data});
	
	};
}
 */