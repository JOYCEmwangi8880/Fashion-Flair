'use client';

import { useState } from 'react';
import Link from 'next/link';


export default function Navbar() {
  const [showCategories, setShowCategories] = useState(false);
  

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <div className='hidden lg:block'>
      <div className='container'>
        <div className='flex w-fit gap-10 mx-auto font-medium py-4 text-black'>
          <Link className="navbar_link relative" href="/">Home</Link>

          <li
            onMouseEnter={toggleCategories}
            onMouseLeave={toggleCategories}
            className="navbar_link relative list-none"
          >
            <Link href="#">Categories</Link>
            {showCategories && (
              <ul className="dropdown absolute left-0 mt-2 w-40 bg-white shadow-lg">
                <li className="py-2 px-4 hover:bg-gray-200">
                  <Link href="/men">MEN'S</Link>
                </li>
                <li className="py-2 px-4 hover:bg-gray-200">
                  <Link href="/women">WOMEN'S</Link>
                </li>
                <li className="py-2 px-4 hover:bg-gray-200">
                  <Link href="/jewellery">JEWELLERY</Link>
                </li>
                <li className="py-2 px-4 hover:bg-gray-200">
                  <Link href="/hot-offers">HOT OFFERS</Link>
                </li>
              </ul>
            )}
          </li>

          <Link className="navbar_link relative" href="/new-products">New Products</Link>
          <Link className="navbar_link relative" href="/testimonials">Testimonials</Link>
          <Link className="navbar_link relative" href="/contactus">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
