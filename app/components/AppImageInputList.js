import React, { useRef } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import AppImageInput from './AppImageInput';

const AppImageInputList = ({ imageUris = [], onAddImage, onDeleteImage }) => {
  const scrollView = useRef();
  return (
    <View>
      <ScrollView horizontal ref={scrollView} onContentSizeChange={() => scrollView.current.scrollToEnd()}>
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <View style={styles.image} key={uri}>
              <AppImageInput imageUri={uri} onChangeImage={() => onDeleteImage(uri)} />
            </View>
          ))}
          <AppImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
};

export default AppImageInputList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    marginRight: 8,
  },
});
