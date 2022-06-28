import { Link } from "react-router-dom";

const isUserLoggedIn = false;
const Homepage = () => (
    <>
        <div>Homepage</div>
        {!isUserLoggedIn && <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
        </>}

    </>
)

export default Homepage;