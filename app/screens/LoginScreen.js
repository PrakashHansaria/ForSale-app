import React from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';
import {AppForm, AppFormField, SubmitButton} from '../components/forms';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(6).label('Password'),
});

const LoginScreen = () => {
  return (
    <Screen customStyle={styles.container}>
      <Image source={require('../assets/logo-red.png')} style={styles.logo} />
      <AppForm initialValues={{ email: '', password: '' }} onSubmit={(values) => console.log(values)} validationSchema={validationSchema}>
        <AppFormField
          customStyles={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          iconName="email"
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
          name="email"
        />
        <AppFormField
          customStyles={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          iconName="lock"
          placeholder="Password"
          keyboardType="default"
          secureTextEntry={true}
          textContentType="password"
          name="password"
        />
        <SubmitButton title="Login" customStyle={styles.button} />
      </AppForm>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  logo: {
    height: 80,
    width: 80,
    alignSelf: 'center',
    marginTop: 48,
    marginBottom: 32,
  },
  input: {
    marginVertical: 8,
  },
  button: {
    marginVertical: 16,
  },
});
