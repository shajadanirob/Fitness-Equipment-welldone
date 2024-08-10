import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar.js';
import Footer from '../shared/Footer.js';
import MobileNavbar from '../shared/MobileNavbar.js';
const MainLayout = () => {
    return (_jsxs("div", { children: [_jsx("div", { className: 'lg:block hidden', children: _jsx(Navbar, {}) }), _jsx("div", { children: _jsx(MobileNavbar, {}) }), _jsx(Outlet, {}), _jsx(Footer, {})] }));
};
export default MainLayout;
