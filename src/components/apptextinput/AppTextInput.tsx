import React from 'react'
import { StyleSheet, Text, View, TextInput, TextInputProps } from 'react-native'
import { WHITE, GRAY_LIGHT } from '../../constants/colors';

interface AppTextInputProps extends TextInputProps {}

const AppTextInput: React.FC<AppTextInputProps> = (props) => {
  return <TextInput style={styles.textInput} placeholderTextColor={GRAY_LIGHT} {...props} />;
}

const styles = StyleSheet.create({
  textInput: {
    padding: 7,
    color: WHITE,
    borderColor: WHITE,
    borderWidth: 1,
    borderRadius: 5
  }
});

export default AppTextInput;
