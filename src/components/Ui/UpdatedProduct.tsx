import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetSingleProductsQuery, useUpdateProductMutation } from '../../redux/features/products/productsApi';
import { toast } from 'sonner';


const UpdateProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await updateProduct({ id, updatedProduct: formState }).unwrap();
      toast.success('Product updated successfully');
      navigate(`/productDetails/${id}`);
    } catch (err) {
      console.error('Failed to update the product:', err);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  
  let errorMessage;
  if (error) {
    if ('status' in error) {
      // Handle FetchBaseQueryError
      errorMessage = 'error' in error ? error.error : JSON.stringify(error.data);
    } else {
      // Handle SerializedError
      errorMessage = error.message;
    }
    return <div>Error: {errorMessage}</div>;
  }

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Update Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={formState.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Price</label>
          <input
            type="number"
            name="price"
            value={formState.price}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Stock</label>
          <input
            type="number"
            name="stockQuantity"
            value={formState.stockQuantity}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Image URL</label>
          <input
            type="text"
            name="image"
            value={formState.image}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProductPage;
