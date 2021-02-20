import React from 'react';
import { StyleSheet, Text } from 'react-native';
import appStyles from '../config/appStyles';

const AppText = ({ children, customStyle }) => {
  return <Text style={[styles.text, customStyle]}>{children}</Text>;
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    ...appStyles.text
  },
});
