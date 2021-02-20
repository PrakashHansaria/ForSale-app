import React, { useState } from 'react';
import { View } from 'react-native';
import AppPicker from './app/components/AppPicker';
import AppTextInput from './app/components/AppTextInput';
import Card from './app/components/Card';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import Screen from './app/components/Screen';
import AccountScreen from './app/screens/AccountScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

const items = [
  { label: 'Music', key: 1 },
  { label: 'Abstract', key: 2 },
  { label: 'Utensil', key: 3 },
  { label: 'Furniture', key: 4 },
];
export default function App() {
  const [selected, setSelected] = useState(items[2]);

  // return <WelcomeScreen />;
  // return <ViewImageScreen />;
  // return (
  //   <View style={{
  //     backgroundColor:"#f8f4f4",
  //     paddingTop: 64,
  //     padding: 16
  //   }}>
  //     <Card image={require('./app/assets/blackstratblues.jpg')} title="Latest Album" subtitle="$50"></Card>
  //   </View>
  // );
  // return <ListingDetailsScreen />
  // return <MessagesScreen />
  // return <AccountScreen />
  // return <ListingsScreen />
  return (
    <Screen>
      <AppTextInput iconName="email" placeholder="name" />
      <AppPicker
        iconName="apps"
        placeholder="Categories"
        itemList={items}
        selectedItem={selected}
        setSelectedItem={(selected) => setSelected(selected)}
      />
    </Screen>
  );
}
