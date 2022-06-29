import { Link } from 'react-router-dom';

const Navigation = () => (
    <>
        <Link
            to="/login"
            className="bg-orange px-4 py-2 text-white mt-6 inline-block border-2 border-transparent mr-6"
        >
            Login
        </Link>
        <Link
            to="/signup"
            className="border-2 border-orange inline-block px-4 py-2"
        >
            Signup
        </Link>
    </>
);

export default Navigation;
