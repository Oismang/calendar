import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';
import { YELLOW } from '../../constants/colors';

interface AppHeaderTextProps {
  style?: TextStyle
}

const AppHeaderText: React.FC<AppHeaderTextProps> = (props) =>
  <Text style={[styles.text, props.style]}>{props.children}</Text>

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    fontFamily: "Comfortaa-VariableFont_wght",
    color: YELLOW
  }
});

export default AppHeaderText;
