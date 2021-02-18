import React from 'react';
import { View } from 'react-native';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  // return <WelcomeScreen />;
  return <ViewImageScreen />;
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
}
