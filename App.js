import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {Provider} from 'react-redux';
import {store} from './src/state/store';
import HomeScreen from './src/screens/Home';
import {SafeAreaView} from 'react-native';
import globalStyles from './src/helpers/styles';

export default function App() {
	return (
		<Provider store={store}>
			<SafeAreaView style={globalStyles.fullFlex}>
				<HomeScreen />
				<StatusBar style='auto' />
			</SafeAreaView>
		</Provider>
	);
}
