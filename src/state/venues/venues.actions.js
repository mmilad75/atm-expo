import {GET_VENUES_FAILURE, GET_VENUES_SUCCESS} from './venues.types';
import {getVenuesRequest} from '../../apis/venues.api';

export const getVenues = () => dispatch => {
	try {
		const data = getVenuesRequest();
		if (!data?.error) {
			dispatch(getVenuesSuccess(data));
		}
	} catch (error) {
		dispatch(getVenuesFailure(error));
	}
};

export const getVenuesSuccess = payload => ({
	type: GET_VENUES_SUCCESS,
	payload,
});

export const getVenuesFailure = payload => ({
	type: GET_VENUES_FAILURE,
	payload,
});
