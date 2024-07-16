import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useGetProductsQuery } from '../../redux/features/products/productsApi';
import { Link } from 'react-router-dom';
const FeaturedProducts = () => {
    const { data, error, isLoading } = useGetProductsQuery('');
    if (isLoading)
        return _jsx("div", { children: "Loading..." });
    if (error)
        return _jsx("div", { children: "Error loading products" });
    // Extract products from the data field
    const products = data?.data || [];
    return (_jsx("section", { className: "bg-white", children: _jsx("div", { className: "max-w-7xl mx-auto p-4 sm:p-6 lg:p-8", children: _jsxs("div", { className: "container mx-auto px-6 p-6 bg-white", children: [_jsxs("div", { className: "mb-16 text-center", children: [_jsx("h4", { className: "text-base text-[#1E2128] font-semibold tracking-wide uppercase", children: "Featured" }), _jsx("p", { className: "mt-2 text-5xl lg:text-5xl font-semibold tracking-tight text-[#1E2128]", children: "NEW COLLECTION" })] }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", children: products.slice(0, 4).map((product) => (_jsxs("div", { className: "border border-gray-300 rounded-lg p-4", children: [_jsx("img", { src: product.image, alt: product.name, className: "w-full h-48 object-cover mb-4 rounded-lg" }), _jsx("h2", { className: "text-lg font-semibold mb-2", children: product.name }), _jsxs("p", { className: "text-gray-500 mb-2", children: ["$", product.price] }), _jsx("div", { className: "mt-4 p-4 border-t border-gray-200 dark:border-gray-500", children: _jsx(Link, { to: `/productDetails/${product._id}`, children: _jsx("button", { className: "w-full flex justify-between items-center font-bold cursor-pointer hover:underline text-gray-800 dark:text-gray-50", children: _jsx("span", { className: "text-base", children: "View Details" }) }) }) })] }, product._id))) })] }) }) }));
};
export default FeaturedProducts;
