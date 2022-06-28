import { Link } from "react-router-dom";
import { getUserFromLocalStorage } from "../services";
const Homepage = () => {
    const userFromLocalStorage = getUserFromLocalStorage();
    return (
        <>
            <div>Homepage</div>
            {!userFromLocalStorage && <>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
            </>}
    
        </>
    )
}

export default Homepage;