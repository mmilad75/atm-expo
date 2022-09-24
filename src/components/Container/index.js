import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Container = ({isCentered = false, children}) => (
	<View style={[styles.container, isCentered && styles.centered]}>
		{children}
	</View>
);

Container.propTypes = {
	isCentered: PropTypes.bool,
	children: PropTypes.element,
};

export default Container;
