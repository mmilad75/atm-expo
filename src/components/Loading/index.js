import React from 'react';
import {ActivityIndicator} from 'react-native';
import colors from '../../helpers/colors';

const Loading = () => (
	<ActivityIndicator size='small' color={colors.gray} />
);

export default Loading;
