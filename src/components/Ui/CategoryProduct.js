import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const CategoryProduct = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://assignment-foure-server.vercel.app/api/products?categories=Dumbbells');
                // Assuming response.data.data is the array of products
                setProducts(response.data.data);
                setLoading(false);
            }
            catch (error) {
                console.error('Error fetching data:', error);
                setError('Error fetching data. Please try again later.');
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    if (loading)
        return _jsx("p", { children: "Loading..." });
    if (error)
        return _jsx("p", { children: error });
    return (_jsxs("div", { className: "p-4 max-w-7xl mx-auto p-4 sm:p-6 lg:p-8", children: [_jsx("h1", { className: "text-3xl font-bold mb-4 text-center", children: "Products for Category: Dumbbells" }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10", children: products.map((product) => (_jsxs("div", { className: "border border-gray-300 rounded-lg p-4", children: [_jsx("img", { src: product.image, alt: product.name, className: "w-full h-48 object-cover mb-4 rounded-lg" }), _jsx("h2", { className: "text-lg font-semibold mb-2", children: product.name }), _jsxs("p", { className: "text-gray-500 mb-2", children: ["$", product.price] }), _jsx("div", { className: "mt-4 p-4 border-t border-gray-200 dark:border-gray-500", children: _jsx(Link, { to: `/productDetails/${product._id}`, children: _jsx("button", { className: "w-full flex justify-between items-center font-bold cursor-pointer hover:underline text-gray-800 dark:text-gray-50", children: _jsx("span", { className: "text-base", children: "View Details" }) }) }) })] }, product.id))) })] }));
};
export default CategoryProduct;
