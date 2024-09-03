import React from 'react'
import { mensweardata } from '@/app/men/menswear';
import ProductCard from './ProductCard';


const MensWear = () => {
    return (
        <div>
          <div className="container pt-18">
            <h2 className="font-medium text-2xl pb-04"> Mens Wear</h2>
    
            <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-10 xl:gap-x-20 xl:gap-y-10">
              {mensweardata.map((item, index) => (
                < ProductCard
                  key={item.id}
                  id={item.id} 
                  img={item.img}
                  title={item.title}
                  price={item.price}
                  description={item.description}
                  rating={item.rating}
                  
                />
              ))}
            </div>
          </div>
        </div>
      );
    }

export default MensWear
