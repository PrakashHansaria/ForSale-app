import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import appStyles from '../config/appStyles';
import colors from '../config/colors';

const AppTextInput = ({ customStyles, iconName, placeholder, width = '100%', ...otherProps }) => {
  return (
    <View style={[styles.container, { width }, customStyles]}>
      {iconName && <MaterialCommunityIcons name={iconName} color={colors.medium} size={20} />}
      <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor={colors.medium} {...otherProps} />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 25,
    backgroundColor: colors.light,
    padding: 16,
    alignItems: 'center',
    marginVertical: 8,
  },
  input: {
    width: '100%',
    paddingHorizontal: 16,
    ...appStyles.text,
  },
});
