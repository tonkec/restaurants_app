import { Routes, Route } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import Homepage from '../components/Homepage/Homepage';
import Login from '../components/AuthComponent/Login';
import Register from '../components/AuthComponent/Register';

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<PrivateRoutes />}>
            <Route path="/" element={<Homepage />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
    </Routes>
);

export default AppRoutes;
