import React from 'react';
import { useGetProductsQuery, useDeleteProductMutation, useUpdateProductMutation } from '../../redux/features/products/productsApi';

import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from './CreateProduct';

interface Product {
    _id: string;
    name: string;
    price: number;
    category: string;
    image: string;
}

const ProductListTable = () => {
    const { data, error, isLoading } = useGetProductsQuery('');
    const [deleteProduct] = useDeleteProductMutation();
    const [updateProduct] = useUpdateProductMutation();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading products</div>;

    const products: Product[] = data?.data || [];

    const handleDelete = async (productId: string, productName: string) => {
        try {
            await deleteProduct(productId).unwrap();
            toast.success(`${productName} deleted successfully`);
        } catch (err) {
            console.error('Failed to delete the product: ', err);
            toast.error(`Failed to delete ${productName}`);
        }
    };

    const handleUpdate = async (product: Product) => {
        try {
            await updateProduct(product).unwrap();
            toast.success('Product updated successfully');
        } catch (err) {
            console.error('Failed to update the product: ', err);
            toast.error('Failed to update the product');
        }
    };

    return (
        <div>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />

            <div className="overflow-x-auto max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                <Modal />
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <Link to={`/productDetails/${product._id}`} className="font-bold">{product.name}</Link>
                                            <div className="text-sm opacity-50">{product.category}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>${product.price}</td>
                                <td>{product.category}</td>
                                <td>
                                    <Link to={`${product._id}`}>
                                        <button
                                            className="btn btn-ghost btn-xs bg-indigo-700 text-white"
                                            onClick={() => handleUpdate(product)}
                                        >
                                            Update
                                        </button>
                                    </Link>
                                    <button
                                        className="btn btn-ghost btn-xs bg-red-500 text-white"
                                        onClick={() => handleDelete(product._id, product.name)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    {/* foot */}
                    <tfoot></tfoot>
                </table>
            </div>
        </div>
    );
};

export default ProductListTable;
