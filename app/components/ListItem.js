import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import colors from '../config/colors';
import AppText from './AppText';

const ListItem = ({ avatar, title, subtitle, renderRightActions, IconComponent, onPressAction }) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPressAction}>
        <View style={styles.contianer}>
          {avatar && <Image style={styles.avatar} source={avatar} />}
          {!avatar && IconComponent}
          <View style={styles.titleContainer}>
            <AppText customStyle={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subtitle && (
              <AppText customStyle={styles.subtitle} numberOfLines={2}>
                {subtitle}
              </AppText>
            )}
          </View>
          <MaterialCommunityIcons name="chevron-right" color={colors.dark} size={25} />
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
    alignItems: 'center',
  },
  title: {
    fontWeight: '500',
  },
  titleContainer: {
    flexDirection: 'column',
    paddingHorizontal: 8,
    justifyContent: 'center',
    flex: 1,
  },
  subtitle: {
    color: colors.medium,
  },
});
