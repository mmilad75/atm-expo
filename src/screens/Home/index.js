import React from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getVenues} from '../../state/venues/venues.actions';
import {Container, Loading, MapMarker} from '../../components';
import MapView from 'react-native-maps';
import globalStyles from '../../helpers/styles';
import {INIT_MAP_REGION} from '../../helpers/constants';

const HomeScreen = () => {
	const dispatch = useDispatch();
	const {loading, data: venues} = useSelector(state => state.venues);

	useEffect(() => {
		dispatch(getVenues());
	}, []);

	const renderMarkers = () => venues.map((marker, index) => (
		<MapMarker
			key={index}
			coordinate={{latitude: marker.lat, longitude: marker.lon}}
			title={marker.name}
			type={marker.category}
		/>
	));

	if (loading) {
		return (
			<Container isCentered>
				<Loading />
			</Container>
		);
	}

	return (
		<MapView style={globalStyles.fullFlex} initialRegion={INIT_MAP_REGION}>
			{renderMarkers()}
		</MapView>
	);
};

export default HomeScreen;
