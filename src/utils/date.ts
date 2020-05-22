import { MonthCalendar, MonthDate } from "./types";

export const getDaysInMonth = (month: number, year: number): number => {
  return new Date(year, month + 1, 0).getDate();
};

export const getFirstDayOfMonth = (month: number, year: number): number => {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1;
}

export const getMonthCalendar = ({month, year}: MonthDate): MonthCalendar[] => {
  const currentMonthDays = getDaysInMonth(month, year);
  const previousMonthDays = getDaysInMonth(month - 1, year);
  const firstDayOfMonth = getFirstDayOfMonth(month, year);

  let currentDaysCounter = 1;
  let lastDaysCounter = 1;

  const days: MonthCalendar[] = Array.from(new Array(42), (_, i) => {
    if (i < firstDayOfMonth) {
      return {
        dayNumber: previousMonthDays - firstDayOfMonth + i + 1,
        isCurrentMonthDay: false
      }
    } else if (i >= firstDayOfMonth && currentDaysCounter <= currentMonthDays) {
      return {
        dayNumber: currentDaysCounter++,
        isCurrentMonthDay: true
      }
    } else {
      return {
        dayNumber: lastDaysCounter++,
        isCurrentMonthDay: false
      }
    }
  });

  return days;
}

export const calcNewDate = (currentDate: MonthDate, monthOffset: number): MonthDate => {
  const { month, year } = currentDate;
  let newMonth;
  let newYear;
  if (month + monthOffset > 11) {
    newMonth = 0;
    newYear = year + 1;
  } else if (month + monthOffset < 0) {
    newMonth = 11;
    newYear = year - 1;
  } else {
    newMonth = month + monthOffset;
    newYear = year;
  }
  return { month: newMonth, year: newYear }
}