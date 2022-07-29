import axios from 'axios';
import store from '@/store/store';

const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {
        Authorization: store.state.token,
    },
});

// 로그인 함수
function loginUser(userData) {
    return instance.post('', userData);
}

export {
    loginUser
};
