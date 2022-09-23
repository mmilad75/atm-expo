import {GET_VENUES_FAILURE, GET_VENUES_SUCCESS} from './venues.types';

const initState = {
	data: [],
	error: null,
};

const state = (state = initState, action) => {
	const {payload, type} = action;
	switch (type) {
		case GET_VENUES_FAILURE:
			return {data: [], error: payload};

		case GET_VENUES_SUCCESS:
			return {data: payload, error: null};

		default:
			return state;
	}
};

export default state;
