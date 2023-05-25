import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
const Reviews = () => {

    const [allReview,setReview]=useState([]);

    useEffect(()=>{
        fetch('https://car-toy-shop-server.vercel.app/userreview')
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[])


    return (
      <div className='w-full flex justify-center'>
          <div className=' mb-5  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:gap-2 lg:grid-cols-3 gap-5 lg:gap-5  '>
{
    allReview.map(review=><div key={review._id} className="card w-[300px] h-[260px]  shadow-xl">
            <figure className="p-10  pb-2">
                <img src={review.image} className="rounded-xl w-20 " />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{review.name}</h2>
                <p>{review.comment}</p>
                <p className='flex text-warning'>{review.rating}  <FaStar className='mt-0.5 mx-1'></FaStar> </p>
            </div>
        </div>)
}
    
           
        </div>
      </div>
    );
};

export default Reviews;