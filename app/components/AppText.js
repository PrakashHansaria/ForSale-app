import React from 'react';
import { StyleSheet, Text } from 'react-native';
import colors from '../config/colors';

const AppText = ({ children, customStyle }) => {
  return <Text style={[styles.text, customStyle]}>{children}</Text>;
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: colors.black,
  },
});
