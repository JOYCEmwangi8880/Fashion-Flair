"use client"
import React, { useContext } from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { BiUserCircle } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { useCart, CartContext } from '@/app/addtocart/usecart';

const HeaderMain = () => {
  const  {cartItems } = useContext(CartContext);
  const cartCount = cartItems.length;

  return (
    <div className='border-b border-gray-200 py-6'>
      <div className='container sm:flex justify-between items-center'>
        <div className='font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish text-red-950'>Fashion-Flair</div>
        <div className='w-full sm:w-[300px] md:w-[70%] relative'>
          <input
            className='border-gray-200 border p-2 px-4 rounded-lg w-full'
            type="text"
            placeholder='Enter any product name..'
          />
        </div>
        <div className='hidden lg:flex gap-4 text-gray-500 text-[30px]'>
          <BiUserCircle />
          <div className='relative'>
            <FiHeart />
            <div className='bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center -translate-x-1 -translate-y-1'>
              0
            </div>
          </div>
          <div className='relative'>
            <HiOutlineShoppingBag />
            <div className='bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center -translate-x-1 -translate-y-1'>
              {cartCount}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;