import React from 'react'
import Image from 'next/image'

const Testimonials = () => {
  return (
    <div>
        <div className='container pt-16 pb-16 grid-cols-2'>
            <h2 className='font-medium text-2xl pb-4'>Testimonies</h2>
            <div className='grid lg:grid-cols-[300px,1fr] gap-4'>

                <div className='border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0'>
                    <div className='text-center flex flex-col items-center gap-1'>
                        <img className='rounded-full inline-block'
                        src='/user.jpg'
                        width={80}
                        height={80}
                        alt='dp' 
                        />

                        <h2 className='text-gray-500 font-black text-[20px]'>Joyce Mwangi</h2>
                        <p>Software Developer</p>
                        <img className='inline-block py-2' 
                         src='/quotes.jpg'
                         width={30}
                         height={30}
                         alt='quotes'
                        />
                        <p className='max-w-[200px] text-gray-500'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel libero vitae urna malesuada suscipit. Sed vel libero vitae urna malesuada suscipit.
                        </p>

                    </div>
                </div>

            <div className='bg-red-600 bg-[url(/cta-banner-1.jpg)] bg-cover h-[500px] rounded-2xl grid place-items-center'>
            <div className='bg bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3'>
                <button className='bg-black text-white p-2 rounded-md'>
                    25% DISCOUNT

                </button>
                <h2 className='font-extrabold text-2xl text-black'> Christmas Collection</h2>
                <p className='ctext-gray-500 text-[20px]'> Starting @ Ksh1500 <b>Shop Now</b></p>

            </div>

            </div>
            </div>

        </div>
      
    </div>
  )
}

export default Testimonials
