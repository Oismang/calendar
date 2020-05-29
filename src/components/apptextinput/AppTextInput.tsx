import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import { SILVER, WHITE, YELLOW } from '../../constants/colors';

interface AppTextInputProps extends TextInputProps { }

const AppTextInput: React.FC<AppTextInputProps> = (props) => {
  return <TextInput
    disableFullscreenUI
    placeholderTextColor={SILVER}
    {...props}
    style={[styles.textInput, props.style]} />;
}

const styles = StyleSheet.create({
  textInput: {
    padding: 7,
    color: WHITE,
    borderColor: YELLOW,
    borderWidth: 1,
    borderRadius: 5,
    textAlignVertical: 'top',
    fontSize: 16
  }
});

export default AppTextInput;
