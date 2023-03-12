import {legacy_createStore} from 'redux';
import authReducer from './Auth/authReducer';

const store=legacy_createStore(authReducer)
export default store;