import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Searchbar from "../components/Searchbar";
import RestaurantsContainer from "../components/RestaurantsContainer";
import yelp from "../api/yelp";
import Loader from "../components/Loader";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const searchAPI = async () => {
    setLoading(true);
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 10,
          term,
          location: "New York City",
        },
      });
      setResults(response.data.businesses);
      setTerm("");
      // console.log(results);
      setLoading(false);
    } catch (err) {
      setErrorMessage("Something went wrong ☹️");
    }
  };

  useEffect(() => {
    searchAPI('pasta')
  }, []);
  

  return (
    <View style={styles.background}>
      {loading && <Loader errorMessage={errorMessage} onError={setLoading} />}
      <Searchbar term={term} onTermChange={setTerm} onTermSubmit={searchAPI} />
      <Text style={styles.text}>{term}</Text>
      <Text style={styles.text}>number of results {results.length}</Text>
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
