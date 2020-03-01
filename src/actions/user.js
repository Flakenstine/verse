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
