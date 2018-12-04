import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from '../screen/home';
import Search from '../screen/search';
import Login from '../screen/login';
import SplashScreen from '../screen/splashScreen';

const stackNavigatorConfig = {
  headerMode: 'none',
}

const Navigators = createStackNavigator({
  SplashScreen: { screen: SplashScreen },
  Login: { screen: Login },
  Home: { screen: Home },
  Search: { screen: Search }
}, stackNavigatorConfig);

const AppNavigator = createAppContainer(Navigators);

export default AppNavigator;
