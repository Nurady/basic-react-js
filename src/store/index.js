import axios from 'axios';
import {selector, atom} from 'recoil';

const Theme = atom({
    key: 'switch-theme',
    default: 'dark'
})

const Authenticated =  atom({
    key: 'authenticated',
    default: {
        check: false,
        user: {name: 'adis'}
    }
})


const AuthUser = selector({
    key: 'auth-user',
    get: async () => {
        let user = null;

        try {
            let {data} = await axios.get('https://jsonplaceholder.typicode.com/users/1')
            user = {user: data}
        } catch (error) {
            user = {user: error.message}
        }

        return user;
    }
})

export {
    AuthUser,
    Theme,
    Authenticated
}