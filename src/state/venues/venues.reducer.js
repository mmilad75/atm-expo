import {GET_VENUES_FAILURE, GET_VENUES_SUCCESS, SET_LOADING} from './venues.types';

const initState = {
	data: [],
	error: null,
	loading: false,
};

const state = (state = initState, action) => {
	const {payload, type} = action;
	switch (type) {
		case GET_VENUES_FAILURE:
			return {data: [], error: payload, loading: false};

		case GET_VENUES_SUCCESS:
			return {data: payload, error: null, loading: false};

		case SET_LOADING:
			return {...state, loading: payload};

		default:
			return state;
	}
};

export default state;
