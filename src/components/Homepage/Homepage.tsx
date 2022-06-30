import Restaurants from '../Restaurants/Restaurants';
import Sidebar from '../Sidebar/Sidebar';
const Homepage = () => (
    <div className="py-24">
        <h1 className="text-5xl font-bold mb-6">
            Welcome to the Restaurants app!
        </h1>
        <Sidebar />
        <Restaurants />
    </div>
);

export default Homepage;
