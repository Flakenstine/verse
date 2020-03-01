import { combineReducers } from 'redux';
import userReducer from './userReducer';

const verseApp = combineReducers({
    user: userReducer
});

export default verseApp;
