import { AsyncStorage } from 'react-native';
import { create } from 'mobx-persist'

import NavigationStore from './Navigation';
import CounterStore from './Counter';
import Drawer from './Drawer';
import Account from './Account';

let hydrate = create({ storage: AsyncStorage });

let stores = {
  NavigationStore: new NavigationStore(),
  CounterStore: new CounterStore(),
  Drawer: new Drawer(),
  Account: new Account(),
}

hydrate('Account', stores.Account);

export default {
  ...stores
}