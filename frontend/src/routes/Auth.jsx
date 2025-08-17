import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Auth = (props) => {
    const  user  = useSelector((state) => state.user.users);
    console.log(user);

    return user ? props.children : <Navigate to="/login" />;
};

export default Auth;