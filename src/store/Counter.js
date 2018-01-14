import { observable, action } from 'mobx';

class CounterStore {
    @observable count = 0;
  
    @action onPlus() {
      this.count += 1;
    }
  
    @action onMinus() {
      this.count -= 1;
    }
  
  }
export default CounterStore;
