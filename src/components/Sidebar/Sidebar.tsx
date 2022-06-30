import useMediaQuery from '../../hooks/useMediaQuery';
import LogoutButton from './LogoutButton';

const Sidebar = () => {
    const isDesktop = useMediaQuery('(min-width: 960px)');

    return isDesktop ? (
        <aside className="fixed flex flex-wrap items-end left-0 top-0 bottom-0 bg-brown px-4 py-6">
            <LogoutButton />
        </aside>
    ) : (
        <LogoutButton />
    );
};

export default Sidebar;
