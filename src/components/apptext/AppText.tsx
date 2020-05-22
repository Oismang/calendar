import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';
import { WHITE } from '../../constants/colors';

interface AppTextProps {
  style?: TextStyle
}

const AppText: React.FC<AppTextProps> = (props) =>
  <Text style={[styles.text, props.style]}>{props.children}</Text>

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontFamily: "Comfortaa-VariableFont_wght",
    color: WHITE,
  }
});

export default AppText;
