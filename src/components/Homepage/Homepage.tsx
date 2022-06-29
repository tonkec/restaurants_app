import Restaurants from '../Restaurants/Restaurants';
import { getUserFromLocalStorage } from '../../services';
import Navigation from '../Navigation/Navigation';
const Homepage = () => {
    const userFromLocalStorage = getUserFromLocalStorage();
    return (
        <>
            <h1 className="text-5xl font-bold mb-6">
                Welcome to the Restaurants app!
            </h1>
            {userFromLocalStorage ? <Restaurants /> : <Navigation />}
        </>
    );
};

export default Homepage;
