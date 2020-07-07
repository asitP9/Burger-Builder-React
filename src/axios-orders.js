import axios from 'axios';

const instance=axios.create({
    baseURL: 'https://burger-store-5705d.firebaseio.com/'
})

export default instance;