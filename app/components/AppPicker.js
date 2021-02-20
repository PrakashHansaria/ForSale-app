import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Button, FlatList, Modal, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';
import PickerItem from './PickerItem';
import Screen from './Screen';

const AppPicker = ({ iconName, itemList, placeholder, selectedItem, setSelectedItem }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleItemSelection = (item) => {
    setModalIsOpen(false)
    setSelectedItem(item)
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalIsOpen(true)}>
        <View style={styles.container}>
          {iconName && <MaterialCommunityIcons name={iconName} color={colors.medium} size={20} />}
          <AppText customStyle={styles.text}>{selectedItem? selectedItem.label : placeholder}</AppText>
          <MaterialCommunityIcons name="chevron-down" color={colors.medium} size={20} />
        </View>
      </TouchableWithoutFeedback>
      {modalIsOpen && (
        <Modal visible={modalIsOpen} animationType="slide">
          <Screen>
            <FlatList
              data={itemList}
              keyExtractor={(item) => item.key.toString()}
              renderItem={({ item }) => <PickerItem label={item.label} onPressAction={() => handleItemSelection(item)} />}
            />
            <Button title="Close" onPress={() => setModalIsOpen(false)} />
          </Screen>
        </Modal>
      )}
    </>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 100,
    backgroundColor: colors.light,
    width: '100%',
    padding: 16,
    alignItems: 'center',
  },
  text: {
    marginHorizontal: 16,
    flex: 1,
  },
});