import React, { useState } from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import { Appbar, Chip  } from "react-native-paper";
import { data } from "./data";

const HomeScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [trending] = useState(data);
  const [filteredMovies, setFilteredMovies] = useState(trending);
  const [additionalInfo, setAdditionalInfo] = useState("");

  const handleSearch = (text) => {
    setSearch(text);
    const filtered = trending.filter((movie) =>
      movie.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  const renderChips = (items) => {
    return items.map((item, index) => (
      <Chip
        key={`home_${item.id}_${index}`}
        onPress={() => handleChipPress(item)}
        style={{ margin: 5 }}
      >
        {item.name}
      </Chip>
    ));
  };

  const handleChipPress = (word) => {
    navigation.navigate("SecondScreen", { word });
  };



  return (
    <>
      <Appbar.Header style={{ backgroundColor: "white",  height: 50, elevation: 2, // Add this line for the shadow
            shadowColor: "#000", // Customize shadow color if needed
            shadowOffset: { width: 0, height: 2 }, // Customize shadow offset if needed
            shadowOpacity: 0.2, // Customize shadow opacity if needed
            shadowRadius: 2,  }}>
        <Appbar.Content title="Search..." />
        <TextInput
          value={search}
          onChangeText={handleSearch}
          style={{
            backgroundColor: "white",
            width: 280,
            borderColor: "red",
            fontSize: 20,
            
          }}
        />
      </Appbar.Header>
      <ScrollView>
        <View style={{ padding: 10 }}>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {renderChips(filteredMovies)}
          </View>
        </View>
        <View style={{ padding: 10 }}></View>
      </ScrollView>
     
    </>
  );
};

export default HomeScreen;
