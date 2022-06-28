import { Routes, Route } from 'react-router-dom';
import Homepage from '../components/Homepage/Homepage';
import AuthComponent from '../components/AuthComponent/AuthComponent';
const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<AuthComponent />} />
        <Route path="/signup" element={<AuthComponent />} />
    </Routes>
);

export default AppRoutes;
