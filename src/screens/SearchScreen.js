import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Searchbar from "../components/Searchbar";
import RestaurantsContainer from "../components/RestaurantsContainer";
import yelp from "../api/yelp";
import Loader from "../components/Loader";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const filterResultsByPrice = (price) => {
    return results.filter(result => result.price === price);
  }

  const searchAPI = async () => {
    setLoading(true);
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term,
          location: "USA",
        },
      });
      setResults(response.data.businesses);
      setTerm("");
      setLoading(false);
    } catch (err) {
      setErrorMessage("Something went wrong ☹️");
    }
  };

  useEffect(() => {
    searchAPI("pasta");
  }, []);

  return (
    <View style={styles.background}>
      {loading && <Loader errorMessage={errorMessage} onError={setLoading} />}
      <Searchbar term={term} onTermChange={setTerm} onTermSubmit={searchAPI} />
      {/* <Text style={styles.text}>{term}</Text>
      <Text style={styles.text}>number of results {results.length}</Text> */}
      <ScrollView>
        <RestaurantsContainer key={1} title='Cheap and good' results={filterResultsByPrice("$")} />
        <RestaurantsContainer key={2} title='Bit pricier' results={filterResultsByPrice("$$")} />
        <RestaurantsContainer key={3} title='Big money' results={filterResultsByPrice("$$$")} />
      </ScrollView>
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
