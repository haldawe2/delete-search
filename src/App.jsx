import React, { useState } from 'react';
import './App.css';
import productData from './products.json';
import ProductCard from './components/ProductCard';
import SearchInput from './components/SearchInput';
import AddProductForm from './components/AddProduct';

function App() {
  const [products, setProducts] = useState(productData);

  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (string) => {
    setSearchValue(string)
  };

  const handleDelete = (id) => {
    const newListProducts = products.filter(elem => elem._id !== id);
    setProducts(newListProducts);
  }

  const handleNewProduct = (newProduct) => {
    newProduct['id']= Date.now();
    setProducts(prev => [...prev, newProduct])
  }

  return (
    <>
      <h1>My shopping cart</h1>
      <SearchInput handleSearch={handleSearch} />
      <AddProductForm handleNewProduct={handleNewProduct} />
      <div className="cart">
        {products.filter(product => product.name.includes(searchValue)).map(product => {
          return (
            <ProductCard product={product} handleDelete={handleDelete} />
          )
        })}
      </div>
    </>
  );
}

export default App;
