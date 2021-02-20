import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';

const Icon = ({ name, size = 40, iconColor = '#fff', backgroundColor = '#000' }) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: backgroundColor,
      }}
    >
      <MaterialCommunityIcons name={name} size={size*0.5} color={iconColor}/>
    </View>
  );
};

export default Icon;
