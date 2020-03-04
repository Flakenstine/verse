import * as types from '../constants/types';
import axios from 'axios';

import { apiURL } from '../utils/apiUtil';
import { getAuthHeaders } from '../utils/apiUtil';
import { getAuthStore } from '../utils/authUtil';

export const fetchUser = () => async dispatch => {
	try {
		let authToken = getAuthStore().get("authToken");
		const response = await axios
			.get(`${apiURL}users/me/profile`, {
				headers: getAuthHeaders(authToken)
			});
		return dispatch({
			type: types.FETCH_USER,
			payload: response.data
		});
	}
	catch (error) {
		console.log('An error occured while attempting to fetch authed user from Verse API!');
	}
}

export const createServer = ({serverName}) => {
	let authToken = getAuthStore().get("authToken");
	return axios
		.post(`${apiURL}/server/create`, {serverName}, {
			headers: getAuthHeaders(authToken)
		})
		.then((response) => {
			return dispatch({
				type: types.ADD_SERVER,
				payload: console.log(response.data);
			})
		});
}

// export const createServer = ({serverName}) => async dispatch => {
// 	try {
// 		let authToken = getAuthStore().get("authToken");
// 		const response = await axios
// 			.post(`${apiURL}/server/create`, {serverName}, {
// 				headers: getAuthHeaders(authToken)
// 			});
// 		return dispatch(fetchServers())
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

export const fetchServers = () => async dispatch => {
	try {
		let authToken = getAuthStore().get("authToken");
		const response = await axios
			.get(`${apiURL}/users/me/servers`, {
				headers: getAuthHeaders(authToken)
			});
		return dispatch({
			type: types.FETCH_SERVERS,
			payload: response.data.servers
		});
	}
	catch (error) {
		console.log('An error occured when attempting to fetch friends from Verse API!');
	}
}
