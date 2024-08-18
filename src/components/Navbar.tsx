import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='hidden lg:block'>
      <div className='container'>
        <div className='flex w-fit gap-10 mx-auto font-medium py-4 text-black'>
          <Link className="navbar_link relative" href="/">Home</Link>
          <Link className="navbar_link relative" href="/categories">CATEGORIES</Link>
          <Link className="navbar_link relative" href="/mens">MEN'S</Link>
          <Link className="navbar_link relative" href="/womens">WOMEN'S</Link>
          <Link className="navbar_link relative" href="/jewellery">JEWELLERY</Link>
          <Link className="navbar_link relative" href="/perfume">PERFUME</Link>
          <Link className="navbar_link relative" href="/blog">BLOG</Link>
          <Link className="navbar_link relative" href="/hot-offers">HOT OFFERS</Link>
          <Link className="navbar_link relative" href="/new-products">New Products</Link>
          <Link className="navbar_link relative" href="/testimonials">Testimonials</Link>
          <Link className="navbar_link relative" href="/contactus">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
