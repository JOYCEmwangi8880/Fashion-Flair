import React from 'react'
import ProductCard from './ProductCard'


const productsData = [
     {
        
        img: '/cta-banner.jpg',
        title: 'Women\'s Shirt',
        price: 2600,
        description: 'cotton',
        rating: 4,
        category: 'Clothing',
        brand: 'prada'
     },
     {
        
        img: '/jacket-1.jpg',
        title: 'Women\'s Shirt',
        price: 2600,
        description: 'cotton',
        rating: 4,
        category: 'Clothing',
        brand: 'prada'
     },
     {
        
        img: '/jacket-2.jpg',
        title: 'Women\'s Shirt',
        price: 2600,
        description: 'cotton',
        rating: 4,
        category: 'Clothing',
        brand: 'prada'
     },
     {
        
        img: '/shirt-1.jpg',
        title: 'Women\'s Shirt',
        price: 2600,
        description: 'cotton',
        rating: 4,
        category: 'Clothing',
         brand: 'prada'
     },
     {
        
        img: '/patty-wear-1.jpg',
        title: 'Women\'s Shirt',
        price: 2600,
        description: 'cotton-wear',
        rating: 4,
        category: 'Shoes',
        brand: 'prada'
     },
     {
        
        img: '/watch-1.jpg',
        title: 'Women\'s Shirt',
        price: 2600,
        description: 'leather pouch',
        rating: 4,
        category: 'Accesories',
        brand: 'prada'
     },
     {
        
        img: '/watch-2.jpg',
        title: 'Women\'s Shirt',
        price: 2600,
        description: 'leather pouch',
        rating: 4,
        category: 'Accesories',
        brand: 'prada'
     },
     {
        
        img: '/skirt-1.jpg',
        title: 'Women\'s Skirt',
        price: 2600,
        description: 'jeans skirt',
        rating: 4,
        category: 'Clothing',
        brand: 'prada'
     }






]

function NewProducts() {
  return <div>
    <div className='container pt-18'>
        <h2 className='font-medium text-2xl pb-04'> New Products</h2>

        <div className='grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-10 xl:gap-x-20 xl:gap-y-10'>



        {productsData.map((item, index) => ( 
            <ProductCard  
            key={index}
            img={item.img}
            title={item.title}
            price={item.price}
            description={item.description}
            rating={item.rating}
            category={item.category}
            brand={item.brand}
            /> 

        ))}
        </div>

    </div>
  </div>
  
}

export default NewProducts
