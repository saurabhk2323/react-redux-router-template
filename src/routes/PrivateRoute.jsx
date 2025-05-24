import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    /**
     * Add the logic to authorize the user
     * 
     */
    const isUserAuthorized = true
    return isUserAuthorized ? children : <Navigate to="/login" />
}

export default PrivateRoute