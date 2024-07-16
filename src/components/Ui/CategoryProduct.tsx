import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Product {
  id: string;
  _id: string;
  name: string;
  price: number;
  image: string;
}

const CategoryProduct: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://assignment-foure-server.vercel.app/api/products?categories=Dumbbells');
        // Assuming response.data.data is the array of products
        setProducts(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4 max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Products for Category: Dumbbells</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10">
        {products.map((product) => (
          <div key={product.id} className="border border-gray-300 rounded-lg p-4">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-lg" />
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-500 mb-2">${product.price}</p>
            <div className="mt-4 p-4 border-t border-gray-200 dark:border-gray-500">
              <Link to={`/productDetails/${product._id}`}>
                <button className="w-full flex justify-between items-center font-bold cursor-pointer hover:underline text-gray-800 dark:text-gray-50">
                  <span className="text-base">View Details</span>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProduct;
