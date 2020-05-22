import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, GestureResponderEvent, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export enum IconTypes {
  LEFT = "left",
  RIGHT = "right"
}

export interface IconButtonProps {
  iconName: IconTypes;
  color?: string;
  style?: ViewStyle;
  size?: number,
  onPress(): any;
}

const IconButton: React.FC<IconButtonProps> = (props) => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress} style={props.style}>
      <Icon name={props.iconName} size={props.size ? props.size : 20} color={props.color}/>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({});

export default IconButton;
