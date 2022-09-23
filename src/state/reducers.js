import {combineReducers} from 'redux';
import venuesReducer from './venues/venues.reducer';

export default combineReducers({
	venues: venuesReducer,
});
