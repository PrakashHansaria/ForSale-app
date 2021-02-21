import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';
import CategoryPickerItem from '../components/CategoryPickerItem';
import { AppForm, AppFormField, AppFormPicker, SubmitButton } from '../components/forms';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(4).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
});

const categories = [
  {
    backgroundColor: '#fc5c65',
    icon: 'floor-lamp',
    label: 'Furniture',
    key: 1,
  },
  {
    backgroundColor: '#fd9644',
    icon: 'car',
    label: 'Cars',
    key: 2,
  },
  {
    backgroundColor: '#fed330',
    icon: 'camera',
    label: 'Cameras',
    key: 3,
  },
  {
    backgroundColor: '#26de81',
    icon: 'cards',
    label: 'Games',
    key: 4,
  },
  {
    backgroundColor: '#2bcbba',
    icon: 'shoe-heel',
    label: 'Clothing',
    key: 5,
  },
  {
    backgroundColor: '#45aaf2',
    icon: 'basketball',
    label: 'Sports',
    key: 6,
  },
  {
    backgroundColor: '#4b7bec',
    icon: 'headphones',
    label: 'Movies & Music',
    key: 7,
  },
  {
    backgroundColor: '#a55eea',
    icon: 'book-open-variant',
    label: 'Books',
    key: 8,
  },
  {
    backgroundColor: '#778ca3',
    icon: 'application',
    label: 'Other',
    key: 9,
  },
];

const ListingEditScreen = () => {
  return (
    <Screen customStyle={styles.container}>
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
        <AppFormField name="price" maxLength={8} keyboardType="numeric" placeholder="Price" width={'50%'} />
        <AppFormPicker
          items={categories}
          placeholder="Category"
          name="category"
          width={'50%'}
          PickerItemComponent={CategoryPickerItem}
          numberOfColumns={3}
        />
        <AppFormField name="description" multiline maxLength={255} numberOfLines={4} placeholder="Description" />
        <SubmitButton title="Save" />
      </AppForm>
    </Screen>
  );
};

export default ListingEditScreen;

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
});
