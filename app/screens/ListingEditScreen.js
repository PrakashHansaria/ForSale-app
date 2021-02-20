import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';
import { AppForm, AppFormField, AppFormPicker, SubmitButton } from '../components/forms';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(4).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
});

const categories = [
  { key: 1, label: 'Music' },
  { key: 2, label: 'Utility' },
  { key: 3, label: 'Furniture' },
];

const ListingEditScreen = () => {
  return (
    <Screen>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField name="title" maxLength={255} placeholder="Title" />
        <AppFormField name="price" maxLength={8} keyboardType="numeric" placeholder="Price" />
        <AppFormPicker items={categories} placeholder="Category" name="category" />
        <AppFormField name="description" multiline maxLength={255} numberOfLines={4} placeholder="Description" />
        <SubmitButton title="Save" />
      </AppForm>
    </Screen>
  );
};

export default ListingEditScreen;

const styles = StyleSheet.create({});
