import { combineReducers } from 'redux';
import userReducer from './userReducer';
import communityReducer from './communityReducer';

const verseApp = combineReducers({
    user: userReducer,
    community: communityReducer
});

export default verseApp;
