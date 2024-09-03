"use client";
import React from 'react';
import { useParams } from 'next/navigation'; 
import { productsData } from '@/app/data/products'; 
import ProductCard from '@/components/ProductCard';

const Page = () => {
  const { id } = useParams(); 

  // Find the product based on the id
  const product = productsData.find((item) => item.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <ProductCard
        id={product.id}
        img={product.img}
        title={product.title}
        price={product.price}
        description={product.description}
        rating={product.rating}
        category={product.category}
        brand={product.brand}
      />
    </div>
  );
};

export default Page;
