import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCartQuantity, removeFromCart, replaceCart } from '../../redux/features/cart/cartSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
    const cart = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
            const parsedCartItems = JSON.parse(storedCartItems);
            dispatch(replaceCart(parsedCartItems));
        }
    }, [dispatch]);
    const handleQuantityChange = (id, quantity) => {
        if (quantity > 0) {
            dispatch(updateCartQuantity({ id, quantity }));
        }
    };
    const handleRemove = (id) => {
        const itemToRemove = cart.find(item => item.id === id);
        if (itemToRemove) {
            toast.dark(_jsxs("div", { children: [_jsxs("p", { children: ["Are you sure you want to remove ", itemToRemove.name, "?"] }), _jsx("button", { onClick: () => confirmRemove(id), children: "Yes, Remove" })] }), {
                position: "top-center",
                autoClose: false,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    };
    const confirmRemove = (id) => {
        dispatch(removeFromCart(id));
        toast.success('Item removed from cart!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = subtotal > 0 ? 4.99 : 0;
    const total = subtotal + shipping;
    const handleCheckout = () => {
        navigate('/checkout');
    };
    return (_jsx("div", { className: "bg-white py-6 sm:py-8 lg:py-12", children: _jsxs("div", { className: "mx-auto max-w-screen-xl px-4 md:px-8", children: [_jsx("h2", { className: "text-2xl font-bold text-gray-800 lg:text-3xl", children: "Shopping Cart" }), _jsx("div", { className: "mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4", children: cart.map((item) => (_jsxs("div", { className: "flex gap-4 p-4 border rounded-lg", children: [_jsx("img", { src: item.image, alt: item.name, className: "h-24 w-24 object-cover" }), _jsxs("div", { className: "flex-1", children: [_jsx("h3", { className: "text-lg font-semibold", children: item.name }), _jsxs("p", { className: "text-gray-600", children: ["$", item.price] }), _jsxs("div", { className: "mt-4 flex items-center gap-2", children: [_jsx("button", { onClick: () => handleQuantityChange(item.id, item.quantity - 1), className: "px-3 py-1 text-white bg-gray-500 rounded-lg", disabled: item.quantity === 1, children: "-" }), _jsx("span", { children: item.quantity }), _jsx("button", { onClick: () => handleQuantityChange(item.id, item.quantity + 1), className: "px-3 py-1 text-white bg-gray-500 rounded-lg", disabled: item.quantity >= item.stockQuantity, children: "+" })] }), _jsx("button", { onClick: () => handleRemove(item.id), className: "mt-4 text-red-500", children: "Remove" })] })] }, item.id))) }), _jsxs("div", { className: "mt-8 flex flex-col items-end", children: [_jsxs("div", { className: "text-right", children: [_jsxs("p", { children: ["Subtotal: $", subtotal.toFixed(2)] }), _jsxs("p", { children: ["Shipping: $", shipping.toFixed(2)] }), _jsxs("p", { className: "font-bold", children: ["Total: $", total.toFixed(2)] })] }), _jsx("button", { className: `mt-4 px-4 py-2 text-white rounded-lg ${total === 0 ? 'bg-gray-500 cursor-not-allowed' : 'bg-[#3C43D1] hover:bg-indigo-600'}`, onClick: handleCheckout, disabled: total === 0, children: "Proceed to Checkout" })] })] }) }));
};
export default Cart;
