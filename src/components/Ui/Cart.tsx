import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCartQuantity, removeFromCart, replaceCart, CartItem } from '../../redux/features/cart/cartSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../redux/store'; // Adjust path as per your project structure


const Cart: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      const parsedCartItems: CartItem[] = JSON.parse(storedCartItems);
      dispatch(replaceCart(parsedCartItems));
    }
  }, [dispatch]);

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity > 0) {
      dispatch(updateCartQuantity({ id, quantity }));
    }
  };

  const handleRemove = (id: string) => {
    const itemToRemove = cart.find(item => item.id === id);
    if (itemToRemove) {
      toast.dark(
        <div>
          <p>Are you sure you want to remove {itemToRemove.name}?</p>
          <button onClick={() => confirmRemove(id)}>Yes, Remove</button>
        </div>,
        {
          position: "top-center",
          autoClose: false,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
    }
  };

  const confirmRemove = (id: string) => {
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

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">Shopping Cart</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {cart.map((item: CartItem) => (
            <div key={item.id} className="flex gap-4 p-4 border rounded-lg">
              <img src={item.image} alt={item.name} className="h-24 w-24 object-cover" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">${item.price}</p>
                <div className="mt-4 flex items-center gap-2">
                  <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)} className="px-3 py-1 text-white bg-gray-500 rounded-lg" disabled={item.quantity === 1}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)} className="px-3 py-1 text-white bg-gray-500 rounded-lg" disabled={item.quantity >= item.stockQuantity}>+</button>
                </div>
                <button onClick={() => handleRemove(item.id)} className="mt-4 text-red-500">Remove</button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-end">
          <div className="text-right">
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Shipping: ${shipping.toFixed(2)}</p>
            <p className="font-bold">Total: ${total.toFixed(2)}</p>
          </div>
          <button
            className={`mt-4 px-4 py-2 text-white rounded-lg ${total === 0 ? 'bg-gray-500 cursor-not-allowed' : 'bg-[#3C43D1] hover:bg-indigo-600'}`}
            onClick={handleCheckout}
            disabled={total === 0}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
