import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";


const HeaderTop = () => {
    return (
      <div className='border-b border-gray-200 hidden sm:block'>
        <div className='container py-4'>
          <div className='flex justify-between items-center border border-gray-300 px-4 py-2'>
            <div className="flex gap-2">
              <div className="header_top_icon_wrapper">
                <FaFacebook />
              </div>
              <div className="header_top_icon_wrapper">
                <FaTwitter />
              </div>
              <div className="header_top_icon_wrapper">
                <FaInstagram />
              </div>
              <div className="header_top_icon_wrapper">
                <FaLinkedin />
              </div>
            </div>
            <div className='text-gray-500 text-[12px]'>
              <b className='text-red-500'>FREE DELIVERY</b> THIS WEEK ORDERS ABOVE Ksh5500
            </div>
            <div className='flex gap-4'>
              <select className='text-gray-500 text[12px] w-[70px]' name='currency' id='currency'>
                <option value="Ksh ">Ksh </option>
                <option value="USD $">USD $ </option>
                <option value="EUR ���">EUR ��� </option>

              </select>
              <select className='text-gray-500 text-[12px] w-[80px]' name='Language' id='Language'>

                <option value="English">English</option>
                <option value="Swahili">Swahili</option>

              </select>

            </div>







          </div>
        </div>
      </div>
    );
  };

export default HeaderTop
