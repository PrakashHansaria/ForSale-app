import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import ListItemSeperator from '../components/ListItemSeperator';
import Screen from '../components/Screen';
import colors from '../config/colors';
import { MESSAGES } from '../constants/NavigationScreens';

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    },
    targetScreen: MESSAGES,
  },
];

const AccountScreen = ({ navigation }) => {
  return (
    <Screen customStyle={styles.screen}>
      <View style={styles.container}>
        <ListItem title="Modi Ji" subtitle="modi@india.com" avatar={require('../assets/namo.png')} />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />}
              onPressAction={() => navigation.navigate(item.targetScreen)}
            />
          )}
          ItemSeparatorComponent={ListItemSeperator}
        />
      </View>
      <View style={styles.container}>
        <ListItem title="Logout" IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />} />
      </View>
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    backgroundColor: colors.white,
  },
  screen: {
    backgroundColor: colors.light,
  },
});
