import { observable, action } from 'mobx';

class Drawer {
    @observable _drawer = null;
  
    @action open() {
      this._drawer.open();
    }
    
    @action close() {
      this._drawer.close();
    }
  
  }
export default Drawer;
