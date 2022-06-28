import { Link } from 'react-router-dom';
import Restaurants from '../Restaurants/Restaurants';
import { getUserFromLocalStorage } from '../../services';
const Homepage = () => {
    const userFromLocalStorage = getUserFromLocalStorage();
    console.log(userFromLocalStorage);
    return (
        <>
            <div>Homepage</div>
            {userFromLocalStorage ? <Restaurants /> : <NavigationLinks />}
        </>
    );
};

export default Homepage;

const NavigationLinks = () => (
    <>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
    </>
);
