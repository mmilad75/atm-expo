import axios from './axios';

export const getVenuesRequest = async () => {
	try {
		const {data} = await axios.get('');
		return data;
	} catch (error) {
		return {error: error.response?.data?.message};
	}
};
