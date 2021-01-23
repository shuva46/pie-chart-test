import {combineReducers} from 'redux';

import organizationReducer from './organizationReducer';
import projectReducer from './projectReducer';

export default combineReducers({
	organization : organizationReducer,
	project : projectReducer
})