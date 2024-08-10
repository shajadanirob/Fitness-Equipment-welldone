import { jsx as _jsx } from "react/jsx-runtime";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from '../pages/Home/HomePage.js';
import Products from '../components/Ui/ProductPage.js';
import ProductsDetails from '../components/Ui/ProductsDetails.js';
import MyCart from '../pages/MyCart/MyCart.js';
import ProductManagement from "../pages/ProductManagement/ProductManagement.js";
import UpdatedProduct from "../components/Ui/UpdatedProduct.js";
import SuccessPage from "../components/Ui/CheckoutPage.js";
import CheckoutPage from '../components/Ui/CheckoutPage.js';
import CategoryProduct from "../components/Ui/CategoryProduct.js";
import ExerciseBikes from "../components/shared/ExerciseBikes.js";
import WeightPlates from "../components/shared/WeightPlates.js";
import About from "../pages/About/About";
const router = createBrowserRouter([
    {
        path: '/',
        element: _jsx(App, {}),
        children: [
            {
                path: '/',
                element: _jsx(HomePage, {})
            },
            {
                path: '/products',
                element: _jsx(Products, {})
            },
            {
                path: '/productDetails/:id',
                element: _jsx(ProductsDetails, {})
            },
            {
                path: '/myCart',
                element: _jsx(MyCart, {})
            },
            {
                path: '/about',
                element: _jsx(About, {})
            },
            {
                path: '/success',
                element: _jsx(SuccessPage, {})
            },
            {
                path: '/checkout',
                element: _jsx(CheckoutPage, {})
            },
            {
                path: '/category/Dumbbells',
                element: _jsx(CategoryProduct, {})
            },
            {
                path: '/category/ExerciseBikes',
                element: _jsx(ExerciseBikes, {})
            },
            {
                path: '/category/WeightPlates',
                element: _jsx(WeightPlates, {})
            },
            {
                path: '/productManagement',
                element: _jsx(ProductManagement, {})
            },
            {
                path: '/productManagement/:id',
                element: _jsx(UpdatedProduct, {})
            },
        ]
    },
]);
export default router;
