// App.js

import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import LanguageScreen from "./component/LanguageScreen";
import HomeScreen from "./component/HomeScreen"; 
import HomeThird from "./component/uz/HomeThird";
import SecondScreen from "./component/SecondScreen"; 
import ThirdScreen from "./component/ThirdScreen";

const Stack = createStackNavigator();

const App = () => {
	return (
		<SafeAreaProvider>
			<SafeAreaView style={{flex: 1}}>
				<NavigationContainer>
				
					<Stack.Navigator initialRouteName="Home">
					<Stack.Screen name="Home" component={LanguageScreen} />
						<Stack.Screen name="HomeScreen" component={HomeScreen} />
						<Stack.Screen name="HomeThird" component={HomeThird} />
						<Stack.Screen name="SecondScreen" component={SecondScreen} />
						<Stack.Screen name="ThirdScreen" component={ThirdScreen} />
					</Stack.Navigator>
				</NavigationContainer>
			</SafeAreaView>
		</SafeAreaProvider>
	);
};

export default App;
