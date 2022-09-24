import React, {useEffect, useState} from 'react';
import {Marker as RNMarker} from 'react-native-maps';
import PropTypes from 'prop-types';
import {Image} from 'react-native';
import styles from './styles';

const MapMarker = ({type, ...props}) => {
	const [markerImage, setMarkerImage] = useState(null);

	useEffect(() => {
		switch (type) {
			case 'food':
				return setMarkerImage(require('./images/food.png'));
			case 'attraction':
				return setMarkerImage(require('./images/attraction.png'));
			case 'cafe':
				return setMarkerImage(require('./images/cafe.png'));
			case 'atm':
				return setMarkerImage(require('./images/atm.png'));
			case 'lodging':
				return setMarkerImage(require('./images/lodging.png'));
			case 'shopping':
				return setMarkerImage(require('./images/shopping.png'));
			case 'transportation':
				return setMarkerImage(require('./images/transportation.png'));
			case 'default':
			default:
				return setMarkerImage(require('./images/marker.png'));
		}
	}, []);

	return (
		<RNMarker {...props} >
			<Image style={styles.marker} resizeMode='center' source={markerImage} />
		</RNMarker>
	);
};

MapMarker.propTypes = {
	type: PropTypes.string,
};

export default React.memo(MapMarker);
