import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useGetProductsQuery, useDeleteProductMutation, useUpdateProductMutation } from '../../redux/features/products/productsApi';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from './CreateProduct';
const ProductListTable = () => {
    const { data, error, isLoading } = useGetProductsQuery('');
    const [deleteProduct] = useDeleteProductMutation();
    const [updateProduct] = useUpdateProductMutation();
    if (isLoading)
        return _jsx("div", { children: "Loading..." });
    if (error)
        return _jsx("div", { children: "Error loading products" });
    const products = data?.data || [];
    const handleDelete = async (productId, productName) => {
        try {
            await deleteProduct(productId).unwrap();
            toast.success(`${productName} deleted successfully`);
        }
        catch (err) {
            console.error('Failed to delete the product: ', err);
            toast.error(`Failed to delete ${productName}`);
        }
    };
    const handleUpdate = async (product) => {
        try {
            await updateProduct(product).unwrap();
            toast.success('Product updated successfully');
        }
        catch (err) {
            console.error('Failed to update the product: ', err);
            toast.error('Failed to update the product');
        }
    };
    return (_jsxs("div", { children: [_jsx(ToastContainer, { position: "top-right", autoClose: 3000, hideProgressBar: false, newestOnTop: false, closeOnClick: true, rtl: false, pauseOnFocusLoss: true, draggable: true, pauseOnHover: true }), _jsxs("div", { className: "overflow-x-auto max-w-7xl mx-auto p-4 sm:p-6 lg:p-8", children: [_jsx(Modal, {}), _jsxs("table", { className: "table", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "Product Name" }), _jsx("th", { children: "Price" }), _jsx("th", { children: "Category" }), _jsx("th", { children: "Actions" })] }) }), _jsx("tbody", { children: products.map((product) => (_jsxs("tr", { children: [_jsx("td", { children: _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "avatar", children: _jsx("div", { className: "mask mask-squircle h-12 w-12", children: _jsx("img", { src: product.image, alt: product.name }) }) }), _jsxs("div", { children: [_jsx(Link, { to: `/productDetails/${product._id}`, className: "font-bold", children: product.name }), _jsx("div", { className: "text-sm opacity-50", children: product.category })] })] }) }), _jsxs("td", { children: ["$", product.price] }), _jsx("td", { children: product.category }), _jsxs("td", { children: [_jsx(Link, { to: `${product._id}`, children: _jsx("button", { className: "btn btn-ghost btn-xs bg-indigo-700 text-white", onClick: () => handleUpdate(product), children: "Update" }) }), _jsx("button", { className: "btn btn-ghost btn-xs bg-red-500 text-white", onClick: () => handleDelete(product._id, product.name), children: "Delete" })] })] }, product._id))) }), _jsx("tfoot", {})] })] })] }));
};
export default ProductListTable;
