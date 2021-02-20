import { useFormikContext } from 'formik';
import React from 'react';
import AppButton from '../AppButton';

const SubmitButton = ({ title, customStyle }) => {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} onPressAction={handleSubmit} customStyle={customStyle} />;
};

export default SubmitButton;
