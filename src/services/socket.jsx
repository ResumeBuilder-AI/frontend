import io from 'socket.io-client';
import Session from "supertokens-web-js/recipe/session"
import { API_URL } from '../config/config';

const socket = io(API_URL, {
    query: {
        token: await Session.getAccessToken()
    }
});

socket.on('connect', () => {
  console.log('Connected to server');
});

export default socket;

Session.getAccessToken().then(e => console.log({token : e}))