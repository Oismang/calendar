import { DropdownData } from "../components/appdropdown/AppDropdown";

export const DAYS_OF_WEEK = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
export const MONTH = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

export const MONTH_CALENDAR_HEIGHT = 350;

export enum Repeat {
  NOT = "0",
  DAY = "1",
  THREE_DAYS = "3",
  WEEK = "7",
  MONTH = "month",
  YEAR = "year"
}

export const REPEAT_DATA: DropdownData[] = [
  {
    label: "Без повтора",
    value: Repeat.NOT
  },
  {
    label: "День",
    value: Repeat.DAY
  },
  {
    label: "3 дня",
    value: Repeat.THREE_DAYS
  },
  {
    label: "Неделя",
    value: Repeat.WEEK
  },
  {
    label: "Месяц",
    value: Repeat.MONTH
  },
  {
    label: "Год",
    value: Repeat.YEAR
  },
];
