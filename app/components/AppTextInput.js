import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import appStyles from '../config/appStyles';
import colors from '../config/colors';

const AppTextInput = ({ customStyles, iconName, placeholder, ...otherProps }) => {
  return (
    <View style={[styles.container, customStyles]}>
      {iconName && <MaterialCommunityIcons name={iconName} color={colors.medium} size={20} />}
      <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor={colors.dark} {...otherProps}/>
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 35,
    backgroundColor: colors.light,
    width: '100%',
    padding: 16,
    alignItems: 'center',
    marginVertical: 8
  },
  input: {
    width: '100%',
    paddingHorizontal: 16,
    ...appStyles.text,
  },
});
