/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetProductsQuery } from '../../redux/features/products/productsApi';

const ProductListings = () => {
  const { data, error, isLoading } = useGetProductsQuery('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  // Extract products from the data field
  const products = data?.data || [];

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev: string[]) =>
      prev.includes(category) ? prev.filter((c: string) => c !== category) : [...prev, category]
    );
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedCategories([]);
    setPriceRange([0, 1000]);
    setSortOrder('asc');
  };

  const filteredProducts = products
    .filter((product: any) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((product: any) =>
      selectedCategories.length === 0 || selectedCategories.includes(product.category)
    )
    .filter((product: any) => product.price >= priceRange[0] && product.price <= priceRange[1])
    .sort((a: any, b: any) => (sortOrder === 'asc' ? a.price - b.price : b.price - a.price));

  return (
    <div className="p-4 max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Product Listings</h1>
      
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>
      
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <div className="mb-2 md:mb-0">
          <h2 className="font-semibold mb-2">Categories</h2>
          <div className="flex flex-wrap">
            {['Dumbbells', 'ExerciseBikes', 'WeightPlates'].map((category) => (
              <label key={category} className="mr-2 mb-2">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  className="mr-1"
                />
                {category}
              </label>
            ))}
          </div>
        </div>
        
        <div className="mb-2 md:mb-0">
          <h2 className="font-semibold mb-2">Price Range</h2>
          <div className="flex">
            <input
              type="text"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
              className="p-2 border border-gray-300 rounded mr-2 w-24"
              placeholder="Min"
            />
            <input
              type="text"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
              className="p-2 border border-gray-300 rounded w-24"
              placeholder="Max"
            />
          </div>
        </div>
        
        <div className="mb-2 md:mb-0">
          <h2 className="font-semibold mb-2">Sort By Price</h2>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>

        <div>
          <button
            onClick={handleClearFilters}
            className="p-2 bg-red-500 text-white rounded"
          >
            Clear Filters
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10">
        {filteredProducts.map((product: any) => (
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

export default ProductListings;
