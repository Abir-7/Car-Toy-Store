import React, { useContext, useEffect, useState, } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import { Authcontext } from '../../../AuthProvider/AuthProvider';
import useTitle from '../../../Hooks/useTitle';

const AllToys = () => {
    useTitle('Car Toy Store/All Toys')


    const toys = useLoaderData();

    const [alltoy, setToys] = useState(toys);

    const { user, loader } = useContext(Authcontext)




    const handleSearch = (event) => {
        event.preventDefault();
        const form = event.target;
        const search = form.search.value;

        const url = `https://car-toy-shop-server.vercel.app/alltoys?name=${search}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))

    }

    const sortByPrice = (event) => {
        event.preventDefault();
        const form = event.target;
        const sort = form.sort.value;

        const url = `https://car-toy-shop-server.vercel.app/alltoys?value=${sort}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))
    }

    const showAllToy = (limit) => {

        const url = `https://car-toy-shop-server.vercel.app/alltoys?limit=${limit}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))

        document.getElementById('show').classList.add('hidden')
    }




    if (loader) {
        return <progress className="progress "></progress>
    }

    return (


        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold text-success mb-8 text-center">All Toys</h1>
            <div className='mb-5 lg:flex justify-around'>
                <form onSubmit={handleSearch} >
                    <input name='search' className='input my-2 mx-2 bg-slate-200' type="text" placeholder='Search by Toy Name' /> 
                <input  value='Search' type="submit" className='btn mx-2 my-2 btn-success text-white' />
                </form>
                <div>
            <form onSubmit={sortByPrice} action="" className='lg:flex gap-4'>
                    <select name='sort' id="toys" className="  mx-2 my-2 min-w-[130px] select  bg-slate-200  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500 ">

                        <option value='1'>Low to High</option>
                        <option value="-1"> High to Low</option>
                    </select>
                    <input  value='Apply' type="submit" className='btn btn-success  mx-2 my-2 text-white' />
                </form>
            </div>
            </div>
          
            <div className="overflow-x-auto " data-aos="fade-right">
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Image</th>
                            <th className="px-4 py-2">Seller</th>
                            <th className="px-4 py-2">Toy Name</th>
                            <th className="px-4 py-2">Sub Categoty</th>
                            <th className="px-4 py-2">Price</th>
                            <th className="px-4 py-2">Available Quantity</th>
                            <th className="px-4 py-2">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alltoy.map((item) => (
                            <tr key={item._id}>
                                <td className="border px-4 py-2">
                                    <img src={item.photo} alt={item.name} className=" w-[200px]" />
                                </td>
                                <td className="border px-4 py-2">{item.seller}</td>
                                <td className="border px-4 py-2">{item.t_name}</td>
                                <td className="border px-4 py-2">{item.sub_category}</td>
                                <td className="border px-4 py-2">{item.price}$</td>
                                <td className="border px-4 py-2">{item.quantity}</td>
                                <td className="border px-4 py-2">
                                    <button className='btn btn-success text-white'><Link to={`/toydetais/${item._id}`}>View Details</Link></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
            <div className='flex justify-center mt-5 '>
                <button id='show' onClick={() => {
                    showAllToy(0)
                }} className='btn btn-success mx-auto text-white hover:bg-[#11b981]' >View All</button>
            </div>
        </div>
    );
};

export default AllToys;