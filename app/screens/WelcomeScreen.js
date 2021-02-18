import React from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import colors from '../config/colors';



const WelcomeScreen = () => {
  return (
    <ImageBackground blurRadius={2} source={require('../assets/background.jpg')} style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo-red.png')} style={styles.logo} />
        <AppText>Sell things you don;t need</AppText>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" onPressAction={() => console.log('tapped')} customStyle={styles.loginButton} />
        <AppButton title="Register" onPressAction={() => console.log('tapped')} customStyle={styles.registerButton} />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    padding: 16,
  },
  loginButton: {
    backgroundColor: colors.primary,
    marginVertical: 8,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  registerButton: {
    backgroundColor: colors.secondary,
    marginVertical: 8,
  },
});
