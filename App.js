import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/state/store';

export default function App() {
	return (
		<Provider store={store}>
			<Text>here</Text>
			<StatusBar style='auto' />
		</Provider>
	);
}
