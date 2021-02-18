import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

import colors from '../config/colors';

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.deleteButton}>
          <MaterialCommunityIcons name="close" color="white" size={35} />
        </View>
        <View style={styles.closeButton}>
          <MaterialCommunityIcons name="trash-can-outline" color="white" size={35} />
        </View>
      <Image resizeMode="contain" source={require('../assets/chair.jpg')} style={styles.image} />
    </View>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20
  },
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  deleteButton: {
    position: 'absolute',
    top: 20,
    left: 20
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
