import {Route, Navigate} from "react-router-dom";
import {useAuthContext} from "./useAuthContext";
import PropTypes from "prop-types"; // Import PropTypes

const PrivateRoute = ({element, ...props}) => {
  const {...authState} = useAuthContext();

  return (
    <Route
      {...props}
      element={
        authState.isLoggedIn ? element : <Navigate to="/login" replace />
      }
    />
  );
};
PrivateRoute.propTypes = {
  element: PropTypes.func.isRequired,
};
export default PrivateRoute;
