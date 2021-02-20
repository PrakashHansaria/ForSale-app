import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import appStyles from '../config/appStyles';
import colors from '../config/colors';

const AppTextInput = ({ iconName, placeholder }) => {
  return (
    <View style={styles.container}>
      {iconName && <MaterialCommunityIcons name={iconName} color={colors.medium} size={20} />}
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 100,
    backgroundColor: colors.light,
    width: '100%',
    padding: 16,
    alignItems: 'center',
  },
  input: {
    paddingLeft: 16,
    ...appStyles.text,
  },
});
