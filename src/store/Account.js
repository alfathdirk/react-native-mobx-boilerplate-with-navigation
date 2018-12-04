import { observable, action } from 'mobx';
import { persist } from 'mobx-persist';

class SchemeAccount {
  @persist @observable username = '';

  @persist @observable roles = '';
}

class Account {
  @persist('object', SchemeAccount) @observable user = new SchemeAccount();

  @persist @observable authorized = false;

  @action login = (username, password) => {
    return new Promise((resolve, reject) => {
      if (username && password) {
        this.authorized = true;
        this.user = { username: 'alfathdirk', roles: password };
        resolve({ message: 'success' });
      } else {
        const error = { error: true, message: 'error login' };
        reject(error);
      }
    });
  }

  @action logout = () => {
    return new Promise((resolve, reject) => {
      this.authorized = false;
      this.user = new SchemeAccount();
      resolve();
    });
  }
}

export default Account;
