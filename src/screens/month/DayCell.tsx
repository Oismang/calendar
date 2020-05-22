import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import AppText from '../../components/apptext/AppText';
import { DARK, GRAY, YELLOW } from '../../constants/colors';
import { CREATE_NOTIFICATION_SCREEN, MONTH_SCREEN_ID } from '../../constants/screens';
import { MonthCalendar, MonthDate } from '../../utils/types';
import { calcNewDate } from '../../utils/date';

interface DayCellProps extends MonthCalendar {
  isCurrentDay: boolean;
  displayDate: MonthDate;
}

const DayCell: React.FC<DayCellProps> = (props) => {
  const grayDayStyle = props.monthOffset === 0 ? {} : styles.grayDay;
  const currentDayStyle = props.isCurrentDay ? styles.currentDay : {}

  const goTo = () => {
    const date: MonthDate = {
      ...calcNewDate(props.displayDate, props.monthOffset),
      day: props.dayNumber
    };
    Navigation.push(MONTH_SCREEN_ID, {
      component: {
        name: CREATE_NOTIFICATION_SCREEN,
        passProps: {
          date
        }
      }
    });
  }

  return (
    <TouchableWithoutFeedback onPress={goTo}>
      <View style={[styles.calendarCell, currentDayStyle]}>
        <AppText style={{ ...grayDayStyle, ...currentDayStyle }}>{props.dayNumber}</AppText>
      </View>
    </TouchableWithoutFeedback>
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
