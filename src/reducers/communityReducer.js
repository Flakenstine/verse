import * as types from '../constants/types';

const INITIAL_STATE = {
  community: {},
  channels: []
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.FETCH_COMMUNITY:
      return {
        ...state,
        community: action.payload
      }
    case types.FETCH_COMMUNITY_CHANNELS:
      return {
        ...state,
        channels: action.payload
      }
    default:
      return state
  }
}
