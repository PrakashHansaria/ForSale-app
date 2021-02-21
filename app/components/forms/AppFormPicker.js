import { useFormikContext } from 'formik';
import React from 'react';
import { StyleSheet } from 'react-native';
import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';

const AppFormPicker = ({ items, name, numberOfColumns, placeholder, PickerItemComponent, width }) => {
  const { errors, touched, values, setFieldValue } = useFormikContext();
  return (
    <>
      <AppPicker
        itemList={items}
        placeholder={placeholder}
        setSelectedItem={(item) => setFieldValue(name, item)}
        selectedItem={values[name]}
        width={width}
        numberOfColumns = {numberOfColumns}
        PickerItemComponent={PickerItemComponent}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;

const styles = StyleSheet.create({});
