
import { useLocation } from "react-router-dom"
import Form from "./Form";

const AuthComponent = () => {
    const location = useLocation();
    return (<Form url={location.pathname} />)
}

export default AuthComponent;