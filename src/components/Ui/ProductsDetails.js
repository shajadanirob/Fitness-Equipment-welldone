import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useGetSingleProductsQuery } from '../../redux/features/products/productsApi';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, updateCartQuantity } from '../../redux/features/cart/cartSlice';
import { toast } from 'sonner';
const ProductsDetails = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useGetSingleProductsQuery(id);
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.items);
    const productInCart = cart.find((item) => item.id === id);
    const product = data?.data || {};
    const handleAddToCart = () => {
        if (!id) {
            return; // Handle case where id is undefined or null
        }
        if (productInCart) {
            if (productInCart.quantity < product.stockQuantity) {
                dispatch(updateCartQuantity({ id, quantity: productInCart.quantity + 1 }));
            }
        }
        else {
            dispatch(addToCart({ ...product, quantity: 1 }));
            toast.success('Added to cart!');
        }
    };
    React.useEffect(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
            const parsedCartItems = JSON.parse(storedCartItems);
            // Replace Redux cart state with items from localStorage
            dispatch({ type: 'cart/replaceCart', payload: parsedCartItems });
        }
    }, [dispatch]);
    if (isLoading)
        return _jsx("div", { children: "Loading..." });
    if (error)
        return _jsx("div", { children: "Error loading product details" });
    return (_jsx("div", { className: "bg-white py-6 sm:py-8 lg:py-12", children: _jsx("div", { className: "mx-auto max-w-screen-xl px-4 md:px-8", children: _jsxs("div", { className: "grid gap-8 md:grid-cols-2", children: [_jsx("div", { className: "grid gap-4 lg:grid-cols-5", children: _jsxs("div", { className: "relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4", children: [_jsx("img", { src: product.image, loading: "lazy", alt: product.name, className: "h-full w-full object-cover object-center" }), _jsx("span", { className: "absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white", children: "Sale" })] }) }), _jsxs("div", { className: "md:py-8", children: [_jsx("div", { className: "mb-2 md:mb-3", children: _jsx("h2", { className: "text-2xl font-bold text-gray-800 lg:text-3xl", children: product.name }) }), _jsxs("div", { className: "mb-6 flex items-center gap-3 md:mb-10", children: [_jsxs("div", { className: "flex h-7 items-center gap-1 rounded-full bg-[#3C43D1] px-2 text-white", children: [_jsx("span", { className: "text-sm", children: "4.2" }), _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", viewBox: "0 0 20 20", fill: "currentColor", children: _jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }) })] }), _jsx("span", { className: "text-sm text-gray-500 transition duration-100", children: "56 ratings" })] }), _jsxs("div", { className: "mb-8 md:mb-10", children: [_jsx("span", { className: "mb-3 inline-block text-sm font-semibold text-gray-500 md:text-base", children: "Stock Quantity" }), _jsx("div", { className: "flex flex-wrap gap-3", children: _jsx("span", { className: "flex h-8 w-12 cursor-not-allowed items-center justify-center rounded-md border border-transparent bg-white text-center text-sm font-semibold text-gray-400", children: product.stockQuantity }) })] }), _jsxs("div", { className: "mb-4", children: [_jsx("div", { className: "flex items-end gap-2", children: _jsxs("span", { className: "text-xl font-bold text-gray-800 md:text-2xl", children: ["$", product.price] }) }), _jsx("span", { className: "text-sm text-gray-500", children: "incl. VAT plus shipping" })] }), _jsxs("div", { className: "mb-6 flex items-center gap-2 text-gray-500", children: [_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: [_jsx("path", { d: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" }), _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" })] }), _jsx("span", { className: "text-sm", children: "2-4 day shipping" })] }), _jsxs("div", { className: "flex gap-2.5", children: [_jsx("button", { onClick: handleAddToCart, className: `inline-block flex-1 rounded-lg px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 ${productInCart && productInCart.quantity >= product.stockQuantity ? 'bg-gray-500 cursor-not-allowed' : 'bg-[#3C43D1] hover:bg-indigo-600 active:bg-indigo-700'}`, disabled: productInCart && productInCart.quantity >= product.stockQuantity, children: productInCart ? 'Update Cart' : 'Add to Cart' }), _jsx("a", { href: "#", className: "inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base", children: "Buy now" })] })] }), _jsx("p", { className: "text-gray-500", children: product.description })] }) }) }));
};
export default ProductsDetails;
