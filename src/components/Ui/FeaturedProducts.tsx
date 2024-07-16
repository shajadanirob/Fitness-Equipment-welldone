import React from 'react';
import { useGetProductsQuery } from '../../redux/features/products/productsApi';
import { Link } from 'react-router-dom';

interface Product {
  _id: string; // Assuming id is a string
  name: string;
  price: number;
  image: string;
}

const FeaturedProducts = () => {
  const { data, error, isLoading } = useGetProductsQuery('');
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  // Extract products from the data field
  const products: Product[] = data?.data || [];
    
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="container mx-auto px-6 p-6 bg-white">
          <div className="mb-16 text-center">
            <h4 className="text-base text-[#1E2128] font-semibold tracking-wide uppercase">
              Featured
            </h4>
            <p className="mt-2 text-5xl lg:text-5xl font-semibold tracking-tight text-[#1E2128]">
              NEW COLLECTION
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.slice(0, 4).map((product: Product) => (
              <div key={product._id} className="border border-gray-300 rounded-lg p-4">
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
      </div>
    </section>
  );
};

export default FeaturedProducts;
