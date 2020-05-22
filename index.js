import { Navigation } from 'react-native-navigation';
import { createBottomTabs, registerScreens } from './src/screens/navigationConfig';

registerScreens();

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      bottomTabs: await createBottomTabs()
    }
  });
});
