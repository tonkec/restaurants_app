import Restaurants from '../Restaurants/Restaurants';
import { getUserFromLocalStorage } from '../../services';
import Navigation from '../Navigation/Navigation';
import Sidebar from './../Sidebar/Sidebar';
const Homepage = () => {
    const userFromLocalStorage = getUserFromLocalStorage();
    return (
        <>
            <h1 className="text-5xl font-bold mb-6">
                Welcome to the Restaurants app!
            </h1>
            {userFromLocalStorage ? (
                <>
                    <Sidebar />
                    <Restaurants />
                </>
            ) : (
                <Navigation />
            )}
        </>
    );
};

export default Homepage;
