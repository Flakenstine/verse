import * as types from '../constants/types';

const INITIAL_STATE = {
	user: {},
	communities: [],
	modalToggled: false
}

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case types.FETCH_USER:
			return {
				...state,
				user: action.payload
			}
		case types.FETCH_COMMUNITIES:
			return {
				...state,
				communities: action.payload
			}
		case types.OPEN_JCMODAL:
			return {
				...state,
				modalToggled: action.payload
			}
		case types.CLOSE_JCMODAL:
			return {
				...state,
				modalToggled: action.payload
			}
		default:
			return state;
	}
}
