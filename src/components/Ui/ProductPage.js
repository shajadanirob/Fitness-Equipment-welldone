import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetProductsQuery } from '../../redux/features/products/productsApi';
const ProductListings = () => {
    const { data, error, isLoading } = useGetProductsQuery('');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [sortOrder, setSortOrder] = useState('asc');
    if (isLoading)
        return _jsx("div", { children: "Loading..." });
    if (error)
        return _jsx("div", { children: "Error loading products" });
    // Extract products from the data field
    const products = data?.data || [];
    const handleCategoryChange = (category) => {
        setSelectedCategories((prev) => prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]);
    };
    const handleClearFilters = () => {
        setSearchTerm('');
        setSelectedCategories([]);
        setPriceRange([0, 1000]);
        setSortOrder('asc');
    };
    const filteredProducts = products
        .filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .filter((product) => selectedCategories.length === 0 || selectedCategories.includes(product.category))
        .filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1])
        .sort((a, b) => (sortOrder === 'asc' ? a.price - b.price : b.price - a.price));
    return (_jsxs("div", { className: "p-4 max-w-7xl mx-auto p-4 sm:p-6 lg:p-8", children: [_jsx("h1", { className: "text-3xl font-bold mb-4 text-center", children: "Product Listings" }), _jsx("div", { className: "mb-4", children: _jsx("input", { type: "text", placeholder: "Search products...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: "p-2 border border-gray-300 rounded w-full" }) }), _jsxs("div", { className: "flex flex-col md:flex-row justify-between mb-4", children: [_jsxs("div", { className: "mb-2 md:mb-0", children: [_jsx("h2", { className: "font-semibold mb-2", children: "Categories" }), _jsx("div", { className: "flex flex-wrap", children: ['Dumbbells', 'ExerciseBikes', 'WeightPlates'].map((category) => (_jsxs("label", { className: "mr-2 mb-2", children: [_jsx("input", { type: "checkbox", checked: selectedCategories.includes(category), onChange: () => handleCategoryChange(category), className: "mr-1" }), category] }, category))) })] }), _jsxs("div", { className: "mb-2 md:mb-0", children: [_jsx("h2", { className: "font-semibold mb-2", children: "Price Range" }), _jsxs("div", { className: "flex", children: [_jsx("input", { type: "text", value: priceRange[0], onChange: (e) => setPriceRange([+e.target.value, priceRange[1]]), className: "p-2 border border-gray-300 rounded mr-2 w-24", placeholder: "Min" }), _jsx("input", { type: "text", value: priceRange[1], onChange: (e) => setPriceRange([priceRange[0], +e.target.value]), className: "p-2 border border-gray-300 rounded w-24", placeholder: "Max" })] })] }), _jsxs("div", { className: "mb-2 md:mb-0", children: [_jsx("h2", { className: "font-semibold mb-2", children: "Sort By Price" }), _jsxs("select", { value: sortOrder, onChange: (e) => setSortOrder(e.target.value), className: "p-2 border border-gray-300 rounded", children: [_jsx("option", { value: "asc", children: "Ascending" }), _jsx("option", { value: "desc", children: "Descending" })] })] }), _jsx("div", { children: _jsx("button", { onClick: handleClearFilters, className: "p-2 bg-red-500 text-white rounded", children: "Clear Filters" }) })] }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10", children: filteredProducts.map((product) => (_jsxs("div", { className: "border border-gray-300 rounded-lg p-4", children: [_jsx("img", { src: product.image, alt: product.name, className: "w-full h-48 object-cover mb-4 rounded-lg" }), _jsx("h2", { className: "text-lg font-semibold mb-2", children: product.name }), _jsxs("p", { className: "text-gray-500 mb-2", children: ["$", product.price] }), _jsx("div", { className: "mt-4 p-4 border-t border-gray-200 dark:border-gray-500", children: _jsx(Link, { to: `/productDetails/${product._id}`, children: _jsx("button", { className: "w-full flex justify-between items-center font-bold cursor-pointer hover:underline text-gray-800 dark:text-gray-50", children: _jsx("span", { className: "text-base", children: "View Details" }) }) }) })] }, product.id))) })] }));
};
export default ProductListings;
