import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../../../AuthProvider/AuthProvider';

import { Link } from 'react-router-dom';

import useTitle from '../../../Hooks/useTitle';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { ToastContainer, toast } from 'react-toastify';
import { FaStar } from 'react-icons/fa';
const UserToys = () => {
    useTitle('Car Toy Store/My Toys')
    const { user } = useContext(Authcontext)

    const [myToys, setMyToys] = useState([])


    const url = `https://car-toy-shop-server.vercel.app/alltoys?email=${user?.email}`;
    // const {details,photo, price, quantity,rating,seller,t_name,sub_category}=toys
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [url]);





    const deleteToy = (id) => {

        confirmAlert({
            title: 'Confirm to Delete',
            message: 'Are you sure to do this.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        fetch(`https://car-toy-shop-server.vercel.app/alltoys/${id}`, {
                            method: 'DELETE'
                        })
                            .then(res => res.json())
                            .then(data => {
               
                                if (data.deleteCount) {
                                    toast("One Toy Deleted")
                                }
                
                                const remainToys = myToys.filter(toy => toy._id !== id)
                                setMyToys(remainToys)
                            })
                    }
                },
                {
                    label: 'No',
                    onClick: () =>{}
                }
            ]
        });
    };








return (




    <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-success mb-8 text-center">Toys Added By You</h1>
        <div className="overflow-x-auto ">
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Image</th>
                        <th className="px-4 py-2">Toy Name</th>
                        <th className="px-4 py-2">Price</th>
                        <th className="px-4 py-2">Available Quantity</th>
                        <th className="px-4 py-2">Rating</th>
                        <th className="px-4 py-2">Sub Categoty</th>
                        <th className="px-4 py-2">Details</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {myToys.map((item) => (
                        <tr key={item._id}>
                            <td className="border px-4 py-2">
                                <img src={item.photo} alt={item.name} className="h-26 w-26" />
                            </td>
                            <td className="border px-4 py-2">{item.t_name}</td>
                            <td className="border px-4 py-2">{item.price}$</td>
                            <td className="border px-4 py-2">{item.quantity}</td>
                            <td className="border  px-4 py-2"><p className='flex justify-center items-center'>{item.rating} <FaStar className='mx-1 text-warning mb-0.5'></FaStar></p> </td>
                            <td className="border px-4 py-2">{item.sub_category}</td>

                            <td className="border px-4 py-2  min-w-[200px] "><div className="  h-40 overflow-y-auto  ">{item.details}</div></td>
                            <td className="border px-4 py-2">
                                <button className="bg-success my-2 hover:bg-[#4bdb9f] text-white font-bold py-2 px-4 rounded mr-2">
                                    <Link to={`/update/${item._id}`}>Update</Link>
                                </button>
                                <button onClick={() => { deleteToy(item._id) }} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
            <ToastContainer />
        </div>
    </div>

);
};

export default UserToys;

