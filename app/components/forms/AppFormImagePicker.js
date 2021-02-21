import { useFormikContext } from 'formik';
import React from 'react';
import AppImageInputList from '../AppImageInputList';
import ErrorMessage from './ErrorMessage'

const AppFormImagePicker = ({ name }) => {
  const { errors, touched, values, setFieldValue } = useFormikContext();
  const imageUris = values[name];

  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri) => uri !== imageUri)
    );
  };

  return (
    <>
      <AppImageInputList imageUris={imageUris} onAddImage={handleAdd} onDeleteImage={handleRemove} />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormImagePicker;
