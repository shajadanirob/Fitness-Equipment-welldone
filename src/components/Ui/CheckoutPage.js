import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CheckoutPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        paymentMethod: 'cashOnDelivery', // Default to cash on delivery
    });
    const navigate = useNavigate(); // Initialize useNavigate
    const cartItems = localStorage.getItem('cartItems');
    const cart = cartItems ? JSON.parse(cartItems) : [];
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = subtotal > 0 ? 4.99 : 0;
    const total = subtotal + shipping;
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would normally handle the backend order placement.
        // For this example, we will just simulate a success response.
        // Clear the cart after "successful" order placement
        localStorage.removeItem('cartItems');
        toast.success('Order placed successfully!', {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
        navigate('/success'); // Navigate to the success page
    };
    return (_jsx("div", { className: "bg-white py-6 sm:py-8 lg:py-12", children: _jsxs("div", { className: "mx-auto max-w-screen-xl px-4 md:px-8", children: [_jsx("h2", { className: "text-2xl font-bold text-gray-800 lg:text-3xl mb-8", children: "Checkout" }), _jsxs("form", { onSubmit: handleSubmit, children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { className: "mb-4", children: [_jsx("label", { htmlFor: "name", className: "block text-sm font-medium text-gray-700", children: "Name" }), _jsx("input", { type: "text", id: "name", name: "name", value: formData.name, onChange: handleChange, required: true, className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" })] }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700", children: "Email" }), _jsx("input", { type: "email", id: "email", name: "email", value: formData.email, onChange: handleChange, required: true, className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" })] }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { htmlFor: "phone", className: "block text-sm font-medium text-gray-700", children: "Phone Number" }), _jsx("input", { type: "tel", id: "phone", name: "phone", value: formData.phone, onChange: handleChange, required: true, className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" })] }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { htmlFor: "address", className: "block text-sm font-medium text-gray-700", children: "Delivery Address" }), _jsx("textarea", { id: "address", name: "address", value: formData.address, onChange: handleChange, rows: 3, required: true, className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" })] })] }), _jsxs("div", { className: "mt-6", children: [_jsx("h3", { className: "text-lg font-semibold text-gray-800 mb-4", children: "Order Summary" }), _jsxs("div", { className: "flex justify-between mb-2", children: [_jsx("span", { children: "Subtotal:" }), _jsxs("span", { children: ["$", subtotal.toFixed(2)] })] }), _jsxs("div", { className: "flex justify-between mb-2", children: [_jsx("span", { children: "Shipping:" }), _jsxs("span", { children: ["$", shipping.toFixed(2)] })] }), _jsxs("div", { className: "flex justify-between mb-4", children: [_jsx("span", { children: "Total:" }), _jsxs("span", { children: ["$", total.toFixed(2)] })] })] }), _jsx("div", { className: "mt-6 flex justify-end", children: _jsx("button", { type: "submit", className: "inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500", children: "Place Order" }) })] })] }) }));
};
export default CheckoutPage;
