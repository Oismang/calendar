import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppText from '../../components/apptext/AppText';
import { GRAY, DARK, YELLOW } from '../../constants/colors';
import { MonthCalendar } from '../../utils/types';

interface DayCellProps extends MonthCalendar {
  isCurrentDay: boolean
}

const DayCell: React.FC<DayCellProps> = (props) => {
  const grayDayStyle = props.isCurrentMonthDay ? {} : styles.grayDay;
  const currentDayStyle = props.isCurrentDay ? styles.currentDay : {}

  return (
    <View style={[styles.calendarCell, currentDayStyle]}>
      <AppText style={{...grayDayStyle, ...currentDayStyle}}>{props.dayNumber}</AppText>
    </View>
  )
}

const styles = StyleSheet.create({
  calendarCell: {
    flex: 1,
    flexBasis: `${100 / 7}%`,
    height: `${100 / 6}%`,
    justifyContent: "center",
    alignItems: "center",
    borderColor: GRAY,
    borderWidth: 1,
    borderStyle: "solid"
  },
  grayDay: {
    color: DARK
  },
  currentDay: {
    backgroundColor: YELLOW,
    color: DARK
  }
});

export default DayCell;
