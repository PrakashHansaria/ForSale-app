import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import colors from '../config/colors';
const ListItemDeleteAction = ({onPressAction}) => {
  return (
    <TouchableWithoutFeedback onPress={onPressAction} style={styles.container}>
        <MaterialCommunityIcons name="trash-can" color="white" size={30} />
    </TouchableWithoutFeedback>
  );
};

export default ListItemDeleteAction;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
