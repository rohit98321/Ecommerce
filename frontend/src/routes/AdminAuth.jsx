import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminAuth = (props) => {
    const  user  = useSelector((state) => state.user.users);
    console.log(user);

    return ( user.isAdmin) ? props.children : <Navigate to="/" />;
};

export default AdminAuth;