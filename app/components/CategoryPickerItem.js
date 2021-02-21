import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import AppText from './AppText';
import Icon from './Icon';

const CategoryPickerItem = ({ item, onPressAction }) => {
  return (
    <TouchableOpacity onPress={onPressAction} style={styles.container}>
      <Icon name={item?.icon} backgroundColor={item?.backgroundColor} iconColor={item?.color} size={80} />
      <AppText customStyle={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

export default CategoryPickerItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
    width: '33%'
  },
  text:{
    marginTop: 4,
    textAlign: 'center'
  }
});
