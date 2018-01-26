import { observable, action } from 'mobx';
import { persist } from 'mobx-persist';

class schemeAccount {
    @persist @observable username = '';
    @persist @observable roles = '';
}

class Account {
    @persist('object', schemeAccount) @observable user = new schemeAccount;
    @persist @observable authorized = false;

    @action login = (username: string, password: string) => {
        return new Promise((resolve, reject) => {
        if (username && password) {
            this.authorized = true;
            this.user = { username: 'alfathdirk', roles: password };
            resolve({ message: 'success' });
        } else {
            reject({ message: 'Something is wrong with input data :(' });
        }
        });
    }

    @action logout = () => {
        return new Promise((resolve, reject) => {
        this.authorized = false;
        this.user = new schemeAccount;
        resolve();
        });
    }
}

export default Account;
