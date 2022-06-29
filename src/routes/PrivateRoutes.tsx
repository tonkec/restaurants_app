import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { getUserFromLocalStorage } from '../services';
const PrivateRoutes = () => {
    const location = useLocation();
    const authLogin = getUserFromLocalStorage();

    return authLogin ? (
        <Outlet />
    ) : (
        <Navigate to="/login" replace state={{ from: location }} />
    );
};

export default PrivateRoutes;
