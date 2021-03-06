import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Button, FlatList, Modal, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';
import PickerItem from './PickerItem';
import Screen from './Screen';

const AppPicker = ({
  iconName,
  itemList,
  numberOfColumns = 1,
  placeholder,
  PickerItemComponent = PickerItem,
  selectedItem,
  setSelectedItem,
  width = '100%',
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleItemSelection = (item) => {
    setModalIsOpen(false);
    setSelectedItem(item);
  };
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalIsOpen(true)}>
        <View style={[styles.container, { width }]}>
          {iconName && <MaterialCommunityIcons name={iconName} color={colors.medium} size={20} />}
          {selectedItem ? (
            <AppText customStyle={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText customStyle={styles.placeholder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons name="chevron-down" color={colors.medium} size={20} />
        </View>
      </TouchableWithoutFeedback>
      {modalIsOpen && (
        <Modal visible={modalIsOpen} animationType="slide">
          <Screen>
            <FlatList
              data={itemList}
              numColumns={numberOfColumns}
              keyExtractor={(item) => item.key.toString()}
              renderItem={({ item }) => <PickerItemComponent item={item} onPressAction={() => handleItemSelection(item)} />}
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
    borderRadius: 25,
    backgroundColor: colors.light,
    padding: 16,
    marginVertical: 8,
  },
  placeholder: {
    flex: 1,
    marginHorizontal: 16,
    color: colors.medium,
  },
  text: {
    marginHorizontal: 16,
    flex: 1,
    color: colors.dark,
  },
});
