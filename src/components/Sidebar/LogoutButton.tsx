import { clearLocalStorage } from '../../services';
const LogoutButton = () => (
    <button
        onClick={clearLocalStorage}
        className="bg-orange px-4 py-2 text-white mt-6 inline-block border-2 border-transparent mr-6"
    >
        Log out
    </button>
);

export default LogoutButton;
