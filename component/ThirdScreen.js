import React from "react";
import {View, Text} from "react-native";

const ThirdScreen = ({route}) => {
	const {selectedItem} = route.params;

	return (
		<View style={{padding: 16}}>
			<Text
				style={{fontSize: 28, fontWeight: "bold",  marginBottom: 8}}
			>{` ${selectedItem.name}`}</Text>
			
			<Text
				style={{fontSize: 22, fontWeight: "bold", color:"#00ab41", marginBottom: 16}}
			>{` ${selectedItem.description}`}</Text>
			<Text
				style={{fontSize: 18,fontWeight: "400", color:"#FF00FF", fontStyle:"italic",marginBottom: 16 }}
			>{` ${selectedItem.title}`}</Text>
			<Text
				style={{fontSize: 18,fontWeight: "400", color:"#FF00FF", fontStyle:"italic", }}
			>{` ${selectedItem.text}`}</Text>
		</View>
	);
};

export default ThirdScreen;
