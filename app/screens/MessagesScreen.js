import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeperator from '../components/ListItemSeperator';
import Screen from '../components/Screen';

let initialMessageData = [
  {
    id: 1,
    title: '2014 Forest Hills drive',
    description: '2014 Forest Hills drive original Album Limited Edition',
    avatar: require('../assets/jcole.jpg'),
  },
  {
    id: 2,
    title: 'Old Monitor for sale',
    description: '2014 Forest Hills drive',
    avatar: require('../assets/prakash.jpg'),
  },
];

const MessagesScreen = () => {
  const [messageData, setMessageData] = useState(initialMessageData);
  const [refreshing, setRefreshing] = useState(false);

  const handleMessageDelete = (item) => {
    let newMessageData = messageData.filter((message) => message.id != item.id);
    setMessageData(newMessageData);
  };

  return (
    <Screen>
      <FlatList
        data={messageData}
        keyExtractor={(messageData) => messageData.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            avatar={item.avatar}
            title={item.title}
            subtitle={item.description}
            renderRightActions={() => <ListItemDeleteAction onPressAction={() => handleMessageDelete(item)} />}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessageData([
            {
              id: 2,
              title: 'Old Monitor for sale',
              description: '2014 Forest Hills drive',
              avatar: require('../assets/prakash.jpg'),
            },
          ]);
        }}
      />
    </Screen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
