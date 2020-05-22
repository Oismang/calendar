import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, Button, ScrollView, Dimensions, Animated, PanResponder } from 'react-native';
import AppHeaderText from '../../components/appheadertext/AppHeaderText';
import AppText from '../../components/apptext/AppText';
import { GRAY, GRAY_LIGHT, YELLOW } from '../../constants/colors';
import { DAYS_OF_WEEK, MONTH, MONTH_CALENDAR_HEIGHT } from '../../constants/common';
import { getMonthCalendar, calcNewDate } from '../../utils/date';
import DayCell from './DayCell';
import { MonthCalendar, MonthDate } from '../../utils/types';
import IconButton, { IconTypes } from '../../components/iconbutton/IconButton';

const SCREEN_WIDTH = Dimensions.get("window").width;

const MonthScreen = () => {
  const date = useRef(new Date()).current;
  const [displayDate, setDisplayDate] = React.useState<MonthDate>({
    month: date.getMonth(),
    year: date.getFullYear(),
  });

  const calendarPan = useRef(new Animated.Value(0)).current;

  const panResponderCalendar = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (e, state) => true,
      onMoveShouldSetPanResponder: (e, state) => true,
      onPanResponderMove: Animated.event([null, { dx: calendarPan }], { useNativeDriver: false }),
      onPanResponderRelease: (e, { vx, dx }) => {
        if (Math.abs(vx) >= 0.5 || Math.abs(dx) >= 0.5 * SCREEN_WIDTH) {
          Animated.timing(calendarPan, {
            toValue: dx > 0 ? SCREEN_WIDTH : -SCREEN_WIDTH,
            duration: 150,
            useNativeDriver: true
          }).start(() => moveMonth(dx > 0 ? -1 : 1));
        } else {
          Animated.spring(calendarPan, {
            toValue: 0,
            bounciness: 10,
            useNativeDriver: true
          }).start();
        }
      }
    })
  ).current;

  const moveMonth = (monthOffset: number) => {
    calendarPan.setValue(0);
    setDisplayDate(prevDisplayDate => calcNewDate(prevDisplayDate, monthOffset));
  }

  const renderHeader = () =>
    <View style={styles.headerYear}>
      <IconButton onPress={() => moveMonth(-1)} iconName={IconTypes.LEFT} color={YELLOW} />
      <AppHeaderText>
        {`${MONTH[displayDate.month]} ${displayDate.year} г.`}
      </AppHeaderText>
      <IconButton onPress={() => moveMonth(1)} iconName={IconTypes.RIGHT} color={YELLOW} />
    </View>


  const renderDaysOfWeek = () =>
    <View style={styles.headerDays}>
      {DAYS_OF_WEEK.map((day, i) =>
        <View style={[styles.dayOfWeek, i === DAYS_OF_WEEK.length - 1 ? {} : styles.borderRight]} key={i}>
          <AppText>
            {day}
          </AppText>
        </View>
      )}
    </View>

  const renderCalendar = () => {
    const days: MonthCalendar[] = getMonthCalendar(displayDate);
    return days.map((day, i) => <DayCell key={i}
      {...day}
      isCurrentDay={day.isCurrentMonthDay && date.getDate() === day.dayNumber && date.getMonth() === displayDate.month}
    />);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {renderHeader()}
        {renderDaysOfWeek()}
      </View>
      <Animated.View
        style={{ transform: [{ translateX: calendarPan }] }}
        {...panResponderCalendar.panHandlers}>
        <View style={styles.calendarContainer}>
          {renderCalendar()}
        </View>
      </Animated.View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GRAY
  },
  header: {
    width: "90%",
    display: "flex",
    alignItems: "center",
    marginBottom: 5
  },
  headerYear: {
    marginBottom: 5,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  headerDays: {
    width: "100%",
    display: "flex",
    flexDirection: "row"
  },
  dayOfWeek: {
    flex: 1,
    alignItems: "center"
  },
  borderRight: {
    borderRightColor: YELLOW,
    borderRightWidth: 1,
    borderStyle: "solid"
  },
  calendarContainer: {
    backgroundColor: GRAY_LIGHT,
    width: "90%",
    height: MONTH_CALENDAR_HEIGHT,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  }
});

export default MonthScreen;


