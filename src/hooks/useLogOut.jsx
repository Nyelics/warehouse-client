import {useNavigate} from "react-router-dom";
import {useAuthContext} from "./useAuthContext";
import {socket} from "../socket";
import {useSessionContext} from "./useSessionContext";
export const useLogOut = () => {
  const navigate = useNavigate();
  const {dispatch} = useAuthContext();
  const {sessionData} = useSessionContext();

  function socketOffline() {
    socket.emit("offline-user", sessionData.data);
    socket.disconnect();
  }

  function logout() {
    socketOffline();
    dispatch({type: "LOGOUT"});
    navigate("/login");
  }

  return {logout};
};
