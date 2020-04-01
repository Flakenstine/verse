import * as types from '../constants/types';
import axios from 'axios';

import { apiURL } from '../utils/apiUtil';
import { getAuthHeaders } from '../utils/apiUtil';
import { getAuthStore } from '../utils/authUtil';

export const fetchCommunity = (id) => async dispatch => {
  try {
    let authToken = getAuthStore().get("authToken");
    const response = await axios
      .get(`${apiURL}/communities/${id}/info`, {
        headers: getAuthHeaders(authToken)
      });
    return dispatch({
      type: types.FETCH_COMMUNITY,
      payload: response.data
    });
  } catch (error) {
    console.log("There was an issue fetching community data");
  }
}

export const fetchCommunityChannels = (id) => async dispatch => {
  try {
    let authToken = getAuthStore().get("authToken");
    const response = await axios
      .get(`${apiURL}/communities/${id}/info`, {
        headers: getAuthHeaders(authToken)
      });
    return dispatch({
      type: types.FETCH_COMMUNITY_CHANNELS,
      payload: response.data.channels
    });
  } catch (error) {
    console.log("There was an issue fetching channel data");
  }
}
