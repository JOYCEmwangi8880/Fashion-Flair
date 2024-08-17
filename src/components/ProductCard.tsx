import React from 'react'
import Image from "next/image";
import { AiFillStar, AiOutlineStar, AiOutlineShoppingCart } from "react-icons/ai"

interface propstype {
  img: string;
  title: string;
  price: number;
  description: string;
  rating: number;
  category: string;
  brand: string;
}

const ProductCard: React.FC<propstype> = ({ img, title, price, description, rating, category, brand }) => {

  const generateRating = (rating: number) => {
    switch (rating) {
      case 1:
        return (
          <div className='flex gap-1 text-[20px] text-[#FF9529]'>
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 2:
        return (
          <div className='flex gap-1 text-[20px] text-[#FF9529]'>
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 3:
        return (
          <div className='flex gap-1 text-[20px] text-[#FF9529]'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 4:
        return (
          <div className='flex gap-1 text-[20px] text-[#FF9529]'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        );
      case 5:
        return (
          <div className='flex gap-1 text-[20px] text-[#FF9529]'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <div className='px-4 border-gray-200 rounded-xl max-w-[400px]'>
      <div>
        <Image className='w-full h-auto' src={img} width={450} height={400} alt={title} />
      </div>

      <div className='space-y-2 py-2'>
        <h2 className='text-accent font-medium uppercase'>{title}</h2>
        <p className='text-gray-500 max-w-[150px]'>{description}</p>
        <div>{generateRating(rating)}</div>

        <div className='font-bold flex gap-4'>
          Ksh(price)
          <del className='text-gray-500 font-normal'> Ksh {price + 500}</del>
        </div>

        <button className='flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-800'>
          <AiOutlineShoppingCart />
          Shop Now
        </button>
      </div>
    </div>
  )
}

export default ProductCard
