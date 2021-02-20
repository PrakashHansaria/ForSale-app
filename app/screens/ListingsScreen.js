import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from '../config/colors';

const listings = [
  {
    id: 1,
    title: 'BlackStratBlues album',
    price: 50,
    image: require('../assets/blackstratblues.jpg'),
  },
  {
    id: 2,
    title: 'Blue Orange',
    price: 10,
    image: require('../assets/orange.jpg'),
  },
  {
    id: 3,
    title: 'Coffee Mug',
    price: 15,
    image: require('../assets/mug.jpg'),
  },
];

const ListingsScreen = () => {
  return (
    <Screen customStyle={styles.screen}>
      <View style={styles.container}>
        <FlatList
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => <Card image={item.image} subtitle={`$${item.price}`} title={item.title} />}
        />
      </View>
    </Screen>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container:{
    padding: 16
  }
});
