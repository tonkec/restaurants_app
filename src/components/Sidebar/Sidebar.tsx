import { clearLocalStorage } from '../../services';
import useMediaQuery from '../../hooks/useMediaQuery';

const Sidebar = () => {
    const isDesktop = useMediaQuery('(min-width: 960px)');

    return isDesktop ? (
        <aside className="fixed flex flex-wrap items-end left-0 top-0 bottom-0 bg-brown px-4 py-6">
            <button
                onClick={clearLocalStorage}
                className="bg-orange px-4 py-2 text-white mt-6 inline-block border-2 border-transparent mr-6"
            >
                Log out
            </button>
        </aside>
    ) : (
        <button
            onClick={clearLocalStorage}
            className="absolute top-0 left-2 bg-orange px-4 py-2 text-white mt-6 inline-block border-2 border-transparent mr-6"
        >
            Log out
        </button>
    );
};

export default Sidebar;
