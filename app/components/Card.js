import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

const Card = ({ image, title, subtitle }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image}></Image>
      <View style={styles.titleContainer}>
        <AppText customStyle={styles.title} numberOfLines={1}>{title}</AppText>
        <AppText customStyle={styles.subTitle} numberOfLines={2}>{subtitle}</AppText>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 16,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  subTitle: {
    color: colors.secondary,
    fontSize: 15,
  },
  title: {
    paddingVertical: 8,
    fontWeight: 'bold',
    fontSize: 15,
  },
  titleContainer: {
    padding: 8,
  },
});
