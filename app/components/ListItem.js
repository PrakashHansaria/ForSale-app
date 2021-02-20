import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../config/colors';
import AppText from './AppText';

const ListItem = ({ avatar, title, subtitle, renderRightActions, IconComponent }) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light}>
        <View style={styles.contianer}>
          {avatar && <Image style={styles.avatar} source={avatar} />}
          {!avatar && IconComponent}
          <View style={styles.titleContainer}>
            <AppText customStyle={styles.title}>{title}</AppText>
            {subtitle && <AppText customStyle={styles.subtitle}>{subtitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 50,
    height: 70,
    width: 70,
  },
  contianer: {
    flexDirection: 'row',
    padding: 16,
  },
  title: {
    fontWeight: '500',
  },
  titleContainer: {
    flexDirection: 'column',
    paddingHorizontal: 8,
    justifyContent: 'center',
  },
  subtitle: {
    color: colors.medium,
  },
});
