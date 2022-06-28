import { Routes, Route } from "react-router-dom";
import Homepage from "../components/Homepage";
import Login from "../components/Login";
import Register from "../components/Register";
const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Register />} />
  </Routes>
);
  
  export default AppRoutes;