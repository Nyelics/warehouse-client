import {useState} from "react";
import {useAuthContext} from "./useAuthContext";
import {login} from "../api/account";

export const useSignIn = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const {dispatch} = useAuthContext();

  const signIn = async (values) => {
    setIsLoading(true);
    setError(null);

    if (values.username === "" || values.password === "") {
      setError("Please Fill up both Username and Password");
    }

    try {
      const response = await login(values);

      if (response) {
        const {token} = await response;
        dispatch({type: "LOGIN", payload: token});
        setIsLoading(false);
        return token;
      } else {
        setIsLoading(false);
        setError("Invalid Credentials");
        throw new Error("Authentication failed");
      }
    } catch (error) {
      setError("Invalid Credentials");
      setIsLoading(false);
      console.error("Login error:", error);
      return false;
    }
  };
  return {signIn, isLoading, error};
};
