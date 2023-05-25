import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
const Toycard = ({ toy }) => {
    const {_id, details, photo, price, quantity, rating, seller, t_name, sub_category } = toy
    return (

        <div className="max-w-[300px] lg:max-w-[400px] rounded-lg shadow border">
   
                <img className="rounded-t-lg" src={photo} alt="" />
                <hr />
  
            <div className="p-5">
             
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{t_name}</h5>
                 
        
              <div>
              <p className="mb-3 font-normal text-gray-700">Price:{price}$</p>
                <p className="mb-3 font-normal flex text-gray-700"> <b>Rating: </b> {rating}   <span><Rating className=' mx-2 mb-2' readOnly style={{ maxWidth: 100 }} value={rating} /></span> </p>
              
              </div>
                <Link to={`/toydetais/${_id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-success rounded-lg hover:bg-[#20af78] focus:ring-4 focus:outline-none ">
                   View Details
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
            </div>
        </div>

    );
};

export default Toycard;