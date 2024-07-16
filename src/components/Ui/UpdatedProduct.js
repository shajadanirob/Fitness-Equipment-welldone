import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetSingleProductsQuery, useUpdateProductMutation } from '../../redux/features/products/productsApi';
import { toast } from 'sonner';
const UpdateProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data, error, isLoading } = useGetSingleProductsQuery(id);
    const [updateProduct] = useUpdateProductMutation();
    const [formState, setFormState] = useState({
        name: '',
        description: '',
        price: '',
        stockQuantity: '',
        image: '',
    });
    useEffect(() => {
        if (data) {
            const product = data.data;
            setFormState({
                name: product.name,
                description: product.description,
                price: product.price,
                stockQuantity: product.stockQuantity,
                image: product.image,
            });
        }
    }, [data]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateProduct({ id, updatedProduct: formState }).unwrap();
            toast.success('Product updated successfully');
            navigate(`/productDetails/${id}`);
        }
        catch (err) {
            console.error('Failed to update the product:', err);
        }
    };
    if (isLoading)
        return _jsx("div", { children: "Loading..." });
    let errorMessage;
    if (error) {
        if ('status' in error) {
            // Handle FetchBaseQueryError
            errorMessage = 'error' in error ? error.error : JSON.stringify(error.data);
        }
        else {
            // Handle SerializedError
            errorMessage = error.message;
        }
        return _jsxs("div", { children: ["Error: ", errorMessage] });
    }
    return (_jsxs("div", { className: "max-w-lg mx-auto p-4", children: [_jsx("h2", { className: "text-2xl font-bold mb-4", children: "Update Product" }), _jsxs("form", { onSubmit: handleSubmit, children: [_jsxs("div", { className: "mb-4", children: [_jsx("label", { className: "block text-gray-700", children: "Name" }), _jsx("input", { type: "text", name: "name", value: formState.name, onChange: handleChange, className: "w-full p-2 border border-gray-300 rounded" })] }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { className: "block text-gray-700", children: "Description" }), _jsx("textarea", { name: "description", value: formState.description, onChange: handleChange, className: "w-full p-2 border border-gray-300 rounded" })] }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { className: "block text-gray-700", children: "Price" }), _jsx("input", { type: "number", name: "price", value: formState.price, onChange: handleChange, className: "w-full p-2 border border-gray-300 rounded" })] }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { className: "block text-gray-700", children: "Stock" }), _jsx("input", { type: "number", name: "stockQuantity", value: formState.stockQuantity, onChange: handleChange, className: "w-full p-2 border border-gray-300 rounded" })] }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { className: "block text-gray-700", children: "Image URL" }), _jsx("input", { type: "text", name: "image", value: formState.image, onChange: handleChange, className: "w-full p-2 border border-gray-300 rounded" })] }), _jsx("button", { type: "submit", className: "bg-blue-500 text-white p-2 rounded", children: "Update Product" })] })] }));
};
export default UpdateProductPage;
