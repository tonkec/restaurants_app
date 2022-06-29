import Restaurants from '../Restaurants/Restaurants';
import Sidebar from './../Sidebar/Sidebar';
const Homepage = () => {
    return (
        <>
            <h1 className="text-5xl font-bold mb-6">
                Welcome to the Restaurants app!
            </h1>
            <Sidebar />
            <Restaurants />
        </>
    );
};

export default Homepage;
