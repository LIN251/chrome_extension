import React, { useState, useEffect } from 'react';
import { db } from './Firebase';

function ProductForm() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('products').onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => doc.data());
      setProducts(data);
    });

    return unsubscribe;
  }, []);

  return (
    <div>
      <h1>Sales Page</h1>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.name}>
            <div>Name: {product.name}</div>
            <div>Price: {product.price}</div>
            <div>Sales: {product.sales}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductForm;