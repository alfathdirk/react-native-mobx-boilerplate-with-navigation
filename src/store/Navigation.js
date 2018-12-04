import { observable, action } from 'mobx';
import AppNavigator from '../router/router';

class NavigationStore {
  @observable headerTitle = 'Home';

  @observable rootScene = 'SplashScreen';

  @observable.ref navigationState = {
    index: 0,
    routes: [
      { key: 'homeRoute', routeName: this.rootScene }
    ],
  }

  @action dispatch = (actions, stackNavState = true) => {
    const previousNavState = stackNavState ? this.navigationState : null;
    this.navigationState = AppNavigator.router.getStateForAction(actions, previousNavState);
    return this.navigationState;
  }
}

export default NavigationStore;
