import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as IamgePicker from 'expo-image-picker';
import React, { useEffect } from 'react';
import { Alert, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import colors from '../config/colors';

const AppImageInput = ({ imageUri, onChangeImage }) => {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await IamgePicker.requestCameraPermissionsAsync();
    if (!granted) alert('Need permission to use the app');
  };

  const handleTouch = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert('Delete', 'Are you sure that you want to delete this image?', [
        { text: 'Yes', onPress: () => onChangeImage(null) },
        { text: 'No' },
      ]);
  };

  const selectImage = async () => {
    try {
      const result = await IamgePicker.launchImageLibraryAsync({
        mediaTypes: IamgePicker.MediaTypeOptions.Images, //allow users to olny select images and not video
        quality: 0.5,
      });
      if (!result.cancelled) {
        onChangeImage(result.uri);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <TouchableOpacity onPress={handleTouch}>
      <View style={styles.container}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <MaterialCommunityIcons name="camera" size={35} color={colors.medium} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default AppImageInput;

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    backgroundColor: colors.light,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    height: 100,
    width: 100,
  },
});
