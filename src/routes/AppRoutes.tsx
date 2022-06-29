import { Routes, Route } from 'react-router-dom';
import Homepage from '../components/Homepage/Homepage';
import Login from '../components/AuthComponent/Login';
import Register from '../components/AuthComponent/Register';

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
    </Routes>
);

export default AppRoutes;
