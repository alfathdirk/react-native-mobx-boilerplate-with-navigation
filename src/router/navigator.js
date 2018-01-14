import { StackNavigator } from 'react-navigation';
import Home from '../screen/home';
import Search from '../screen/search';

const stackNavigatorConfig = {}

export default AppNavigator = StackNavigator({
    Home: { screen: Home },
    Search: { screen: Search },
    NewScreen: { screen: Search },
  }, stackNavigatorConfig);