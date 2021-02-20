import React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../../config/colors';
import AppText from '../AppText';

const ErrorMessage = ({ error, visible }) => {
  if (!visible || !error) return null;
  return <AppText customStyle={styles.text}>{error}</AppText>;
};

export default ErrorMessage;

const styles = StyleSheet.create({
  text: {
    color: colors.danger,
    fontSize: 14
  },
});
