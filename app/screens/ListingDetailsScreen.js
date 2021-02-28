import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import colors from '../config/colors';

const ListingDetailsScreen = ({ route }) => {
  const listing = route.params;
  return (
    <View>
      <Image source={listing.image} style={styles.image} />
      <View style={styles.titleContainer}>
        <AppText customStyle={styles.title}>{listing.title}</AppText>
        <AppText customStyle={styles.subTitle}>{listing.price}</AppText>
      </View>
      <View style={styles.userContainer}>
        <ListItem avatar={require('../assets/namo.png')} title={'Modi Ji'} subtitle={'28 Listings'} />
      </View>
    </View>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  titleContainer: {
    padding: 16,
  },
  subTitle: {
    color: colors.secondary,
  },
  userContainer: {
    marginVertical: 24,
  },
});
