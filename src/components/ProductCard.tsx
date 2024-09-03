"use client";
import React from 'react';
import Image from 'next/image';
import { AiFillStar, AiOutlineStar, AiOutlineShoppingCart } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import { useCart } from '@/app/addtocart/usecart';


interface PropType {
  id: number; 
  img: string;
  title: string;
  price: number;
  description: string;
  rating: number;
  category: string;
  brand: string;
}

const ProductCard: React.FC<PropType> = ({ id, img, title, price, description, rating, category, brand }) => {
  const router = useRouter();
  const { addToCart } = useCart();
  
  
  

  const handleImageClick = () => {
    router.push(`/products/${id}`); 
  };
  
  const handleAddToCart = () => {
    addToCart({ id, img, title, price, description, rating, category, brand });
  };
  
 

  const generateRating = (rating: number) => {
    const stars = Array(5).fill(false).map((_, index) => index < rating);
    return (
      <div className='flex gap-1 text-[20px] text-[#FF9529]'>
        {stars.map((filled, index) => (
          filled ? <AiFillStar key={index} /> : <AiOutlineStar key={index} />
        ))}
      </div>
    );
  };

  return (
    <div className='px-4 border-gray-200 rounded-xl max-w-[400px]'>
      <div onClick={handleImageClick} className='cursor-pointer'>
        <Image className='w-full h-auto' src={img} width={450} height={400} alt={title} />
      </div>

      <div className='space-y-2 py-2'>
        <h2 className='text-accent font-medium uppercase'>{title}</h2>
        <p className='text-gray-500 max-w-[150px]'>{description}</p>
        <div>{generateRating(rating)}</div>

        <div className='font-bold flex gap-4'>
          Ksh {price}
          <del className='text-gray-500 font-normal'> Ksh {price + 500}</del>
        </div>

        <button 
          onClick={handleAddToCart}
          className='flex items-center gap-1 bg-red-900 text-white px-4 py-1 rounded-lg mt-4 hover:bg-blue-800'>
          <AiOutlineShoppingCart />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
