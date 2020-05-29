import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppText from '../apptext/AppText';
import AppTextInput from '../apptextinput/AppTextInput';

export interface Time {
  hours: string,
  minutes: string
}

interface AppTimeInputProps {
  value: Time;
  onHoursChange: Function;
  onMinutesChange: Function;
}

const AppTimeInput: React.FC<AppTimeInputProps> = (props) => {
  return (
    <View style={styles.container}>
      <View style={[styles.cell, styles.hours]}>
        <AppTextInput 
          style={styles.input}
          keyboardType={"numeric"}
          maxLength={2}
          value={`${props.value.hours}`}
          onChangeText={(value) => props.onHoursChange(value)} />
        <AppText style={styles.timetext}>Часы</AppText>
      </View>
      <AppText style={styles.dots}>:</AppText>
      <View style={[styles.cell, styles.minutes]}>
        <AppTextInput
          style={styles.input}
          keyboardType={"numeric"}
          maxLength={2}
          value={`${props.value.minutes}`}
          onChangeText={(value) => props.onMinutesChange(value)} />
        <AppText style={styles.timetext}>Минуты</AppText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  cell: {
    alignItems: "center"
  },
  input: {
    width: 60,
    fontSize: 18,
    textAlign: "center"
  },
  hours: {
    marginRight: 7
  },
  minutes: {
    marginLeft: 7
  },
  dots: {
    position: "relative",
    bottom: 10,
    fontSize: 32
  },
  timetext: {
    fontSize: 12
  }
});

export default AppTimeInput;

