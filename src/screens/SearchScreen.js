import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Searchbar from "../components/Searchbar";
import RestaurantsContainer from "../components/RestaurantsContainer";

const SearchScreen = () => {
  const [term, setTerm] = useState("");

  return (
    <View style={styles.background}>
      <Searchbar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={(submittedTerm) => {
          console.log(submittedTerm.nativeEvent.text);
          setTerm('');
        }}
      />
      <Text style={styles.text}>{term}</Text>
      <RestaurantsContainer />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#444444",
    flex: 1,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});
