'use client';
import { useState } from 'react';
import data from './data.json';
import './product.css';

function SearchBar({ availableStock, filterProducts }) {
  const [filter, setFilter] = useState('');
  const [inStock, setInStock] = useState(false);

  function checkInStock(e) {
    setInStock(e.target.checked);
    availableStock(inStock);
  }

  function checkfiltered(e) {
    filterProducts(filter);
    setFilter(e.target.value);
    console.log(filter);
  }

  return (
    <div>
      <input type='text' value={filter} onChange={e => checkfiltered(e)} placeholder='Search...' />
      <br />
      <input type='checkbox' checked={inStock} id='inStock' onChange={e => checkInStock(e)} />
      <label htmlFor='inStock'>Only show products in stock</label>
    </div>
  );
}

function ProductTable({ products }) {
  return (
    <>
      <div className='product-table'>
        <span className='product-name'>Name</span>
        <span className='product-price'>Price</span>
      </div>
      <ProductCategoryRow products={products} title={'Fruits'} />
      <ProductCategoryRow products={products} title={'Vegetables'} />
    </>
  );
}

function ProductCategoryRow({ products, title }) {
  return (
    <div>
      <h3>{title}</h3>
      {products.map(product => (
        <ProductRow key={product.name} product={product} />
      ))}
    </div>
  );
}

function ProductRow({ product }) {
  return (
    <div className='product-row'>
      <p className={!product.stocked ? 'not-in-stock' : undefined}>{product?.name}</p>
      <p>{product?.price}</p>
    </div>
  );
}

export default function FilterableProduct() {
  const [products, setProducts] = useState(data);
  console.log(products);

  const filterProducts = filter =>
    setProducts(data.filter(product => product.name.toLowerCase().includes(filter)));

  const availableStock = instock => {
    instock ? setProducts(data) : setProducts(data.filter(products => products.stocked));
  };
  return (
    <div>
      <SearchBar availableStock={availableStock} filterProducts={filterProducts} />
      <ProductTable products={products} />
    </div>
  );
}
