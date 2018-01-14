import { observable, action } from 'mobx';

class NavigationStore {
    @observable headerTitle = "Home"
    @observable.ref navigationState = {
      index: 0,
      routes: [
        { key: "homeRoute", routeName: "Home" },
      ],
    }

    // NOTE: the second param, is to avoid stacking and reset the nav state
    @action dispatch = (action, stackNavState = true) => {
      const previousNavState = stackNavState ? this.navigationState : null;
      return this.navigationState = AppNavigator
          .router
          .getStateForAction(action, previousNavState);
    }
  }

export default NavigationStore;