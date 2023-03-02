import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import RestaurantBox from './RestaurantBox'

const RestaurantsContainer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Cheap and good</Text>
      <RestaurantBox />
    </View>
  )
}

export default RestaurantsContainer;

const styles = StyleSheet.create({
  heading: {
    color: 'white',
    fontSize: 20,
    fontWeight: 500
  },
  container: {
    marginLeft: 20
  }
})