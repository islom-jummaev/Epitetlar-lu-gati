import React, { useState } from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import { Appbar, Chip  } from "react-native-paper";
import { data } from "./uz";

const HomeThird = ({ navigation }) => {
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
      <Appbar.Header style={{ backgroundColor: "white",  height: 50, elevation: 2, 
            shadowColor: "#000", 
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2, 
            shadowRadius: 2,  }}>
        <Appbar.Content title="Qidirish..." />
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

export default HomeThird;
