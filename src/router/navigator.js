import { StackNavigator } from 'react-navigation';
import Home from '../screen/home';
import Search from '../screen/search';
import Login from '../screen/login';
import SplashScreen from '../screen/splashScreen';

const stackNavigatorConfig = {
  navigationOptions: ({ navigation }) => ({
    header: null,
  })
}

export default AppNavigator = StackNavigator({
    SplashScreen: { screen: SplashScreen },
    Login: { screen: Login },
    Home: { screen: Home },
    Search: { screen: Search },
    NewScreen: { screen: Search },
  }, stackNavigatorConfig);


