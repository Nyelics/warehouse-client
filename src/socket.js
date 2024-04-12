import {io} from "socket.io-client";
const WEBSOCKET_URL = import.meta.env.VITE_API_WS_URL;
// const WEBSOCKET_URL = import.meta.env.VITE_API_LOCAL_WS_URL;
console.log(WEBSOCKET_URL);
export const socket = io(WEBSOCKET_URL, {
  autoConnect: false,
});
