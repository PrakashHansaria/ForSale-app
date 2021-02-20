import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const Screen = ({ children, customStyle}) => {
  return <SafeAreaView style={[styles.screen, customStyle]}>{children}</SafeAreaView>;
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1
  },
});
