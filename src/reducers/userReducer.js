import * as types from '../constants/types';

const INITIAL_STATE = {
	user: {},
	servers: []
}

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case types.FETCH_USER:
			return {
				...state,
				user: action.payload
			}
		case types.ADD_SERVER:
			return {
				...state,
				servers: action.payload
			}
		case types.FETCH_SERVERS:
			return {
				...state,
				servers: action.payload
			}
		default:
			return state;
	}
}
