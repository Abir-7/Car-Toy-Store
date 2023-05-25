import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Toycard from '../AllToys/Toycard';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import useTitle from '../../../Hooks/useTitle';
const ToyDetails = () => {
    useTitle('Car Toy Store/Toy Details')
    const toyDetails = useLoaderData()

    const { details, photo, price, quantity, rating, seller, t_name, email, sub_category } = toyDetails[0]
    return (
        <div className="flex justify-center  min-h-[78vh] bg-gray-100">
            <div className="bg-white  shadow-lg p-6">
                <div className=" lg:flex  ">
                    <img src={photo} alt={t_name} className="w-64 h-64 object-cover rounded-lg" />
                    <div className=" my-1 lg:ml-10 lg:mt-9 ">
                        <h2 className="text-2xl font-bold mb-2">{t_name}</h2>
                        <p className="text-gray-600 mb-2">
                            <span className="font-semibold">Seller:</span> {seller}
                        </p>
                        <p className="text-gray-600 mb-2">
                            <span className="font-semibold">Email:</span> {email}
                        </p>
                        <p className="text-gray-600 mb-2">
                            <span className="font-semibold">Price:</span> {price}$
                        </p>
                        <div className='flex items-center'>
                            <div > <p className="text-gray-600 mb-2 "><span className="font-semibold">Rating: </span> <span> {rating} </span> </p></div>
                            <Rating className=' mx-2 mb-2' readOnly style={{ maxWidth: 100 }} value={rating} />
                        </div>

                        <p className="text-gray-600 mb-2">
                            <span className="font-semibold">Available Quantity:</span> {quantity}
                        </p>

                    </div>
                </div>
                <div className="mt-4">
                    <h3 className="text-lg font-bold mb-2">Description:</h3>
                    <p className="text-gray-600">{details}</p>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;