import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ACCOUNT, FEED, LISTINGS_EDIT } from '../constants/NavigationScreens';
import ListingEditScreen from '../screens/ListingEditScreen';
import AccountNavigator from './AccountNavigator';
import FeedNavigator from './FeedNavigator';
import NewListingButton from './NewListingButton';

const Tab = createBottomTabNavigator();
export const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={FEED}
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="home" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name={LISTINGS_EDIT}
        component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => <NewListingButton onPressAction={() => navigation.navigate(LISTINGS_EDIT)} />,
        })}
      />
      <Tab.Screen
        name={ACCOUNT}
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="account" size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
