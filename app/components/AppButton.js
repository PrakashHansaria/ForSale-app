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
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.danger,
    marginVertical: 8
  },
  text: {
    color: colors.white,
    textTransform: 'capitalize',
    fontSize: 16,
  },
});
