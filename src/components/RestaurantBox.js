import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import React from "react";

const RestaurantBox = () => {
  const rating = 4.4;
  const reviews = 4490;

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/dp.png")} style={styles.image} />
      <Text style={styles.smallText}>Rating {rating}, Reviews {reviews}</Text>
      <Text style={styles.largeText}>RestaurantBox</Text>
    </View>
  );
};

export default RestaurantBox;

const styles = StyleSheet.create({
  container:{
    marginTop: 15,
  },
  smallText: {
    color: "white",
    fontSize: 10
  },
  largeText: {
    color: "white",
    fontSize: 15
  },
  image: {
    height: 200,
    width: 200,
    marginBottom: 10,
    borderRadius: 5
  },
});
