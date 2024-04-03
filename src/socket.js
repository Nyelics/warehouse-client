import {io} from "socket.io-client";
const URL = "https://bcp-warehouse-ws.netlify.app/";

export const socket = io(URL, {
  autoConnect: false,
});
