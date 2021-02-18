import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';
const ListItem = ({ avatar, title, subtitle }) => {
  return (
    <View style={styles.contianer}>
      <Image style={styles.avatar} source={avatar}/>
      <View style={styles.titleContainer}>
        <AppText customStyle={styles.title}>{title}</AppText>
        <AppText customStyle={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 50,
    height: 70,
    width: 70,
  },
  contianer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  title: {
    fontWeight: '600'
  },
  titleContainer: {
    flexDirection: 'column',
    paddingHorizontal: 8
  },
  subtitle: {
    color: colors.medium
  },
});
