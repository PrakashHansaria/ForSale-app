import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import AppText from './AppText'

const PickerItem = ({label, onPressAction}) => {
  return (
    <TouchableOpacity onPress={onPressAction}>
      <AppText customStyle={styles.text}>{label}</AppText>
    </TouchableOpacity>
  )
}

export default PickerItem

const styles = StyleSheet.create({
  text:{
    padding: 16
  }
})
