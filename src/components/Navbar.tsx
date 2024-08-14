import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return <div className='hidden lg:block'>
    <div className='container'>
        <div className='flex w-fit gap-10 mx-auto font-medium py-4 text-black'>


        <Link className="navbar_link realtive" href="#">Home </Link>
        <Link className="navbar_link realtive" href="#">CATEGORIES </Link>
        <Link className="navbar_link realtive" href="#">MEN'S </Link>
        <Link className="navbar_link realtive" href="#">WOMEN'S </Link>
        <Link className="navbar_link realtive" href="#">JEWELLRY </Link>
        <Link className="navbar_link realtive" href="#">PERFUME </Link>
        <Link className="navbar_link realtive" href="#">BLOG </Link>
        <Link className="navbar_link realtive" href="#">HOT OFFERS </Link>
        </div>
        
    </div>


  </div>
  
}

export default Navbar
