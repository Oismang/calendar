import { Navigation } from 'react-native-navigation';
import { APP_SCREEN, DAY_SCREEN, THREE_DAYS_SCREEN, WEEK_SCREEN, MONTH_SCREEN } from '../constants/screens';
import App from '../App';
import DayScreen from './day/DayScreen';
import ThreeDaysScreen from './threedays/ThreeDaysScreen';
import WeekScreen from './week/WeekScreen';
import MonthScreen from './month/MonthScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DARK, WHITE, YELLOW } from '../constants/colors';

Navigation.setDefaultOptions({
  topBar: {
    visible: false,
    drawBehind: true,
    animate: false,
  },
  bottomTabs: {
    currentTabIndex: 3,
    backgroundColor: DARK
  },
  bottomTab: {
    iconColor: WHITE,
    selectedIconColor: YELLOW,
    selectedTextColor: YELLOW
  }
});

export const registerScreens = () => {
  Navigation.registerComponent(APP_SCREEN, () => App);
  Navigation.registerComponent(DAY_SCREEN, () => DayScreen);
  Navigation.registerComponent(THREE_DAYS_SCREEN, () => ThreeDaysScreen);
  Navigation.registerComponent(WEEK_SCREEN, () => WeekScreen);
  Navigation.registerComponent(MONTH_SCREEN, () => MonthScreen);
}

export const createBottomTabs = async () => {
  const icons = await Promise.all([
    Icon.getImageSource("calendar-today", 30),
    Icon.getImageSource("calendar-range", 30),
    Icon.getImageSource("calendar-week", 30),
    Icon.getImageSource("calendar-month", 30)
  ]);

  return {
    children: [
      {
        stack: {
          children: [
            {
              component: {
                name: DAY_SCREEN
              }
            },
          ],
          options: {
            bottomTab: {
              text: 'день',
              icon: icons[0]
            }
          }
        }
      },
      {
        stack: {
          children: [
            {
              component: {
                name: THREE_DAYS_SCREEN
              }
            }
          ],
          options: {
            bottomTab: {
              text: '3 дня',
              icon: icons[1]
            }
          }
        }
      },
      {
        stack: {
          children: [
            {
              component: {
                name: WEEK_SCREEN
              }
            }
          ],
          options: {
            bottomTab: {
              text: 'неделя',
              icon: icons[2]
            }
          }
        }
      },
      {
        stack: {
          children: [
            {
              component: {
                name: MONTH_SCREEN
              }
            }
          ],
          options: {
            bottomTab: {
              text: 'месяц',
              icon: icons[3]
            }
          }
        }
      }
    ]
  }
}