import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../config/colors';

const AppButton = ({ title, onPressAction, customStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, customStyle]} onPress={onPressAction}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    borderRadius: 25,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    textTransform: 'capitalize',
    fontSize: 16,
  },
});
