import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import useTitle from '../../../Hooks/useTitle';
const UpdateToy = () => {
    useTitle('Car Toy Store/Update Toy')
    const toyInfo = useLoaderData()

    const id=toyInfo[0]._id;


    const updateToys = (e) => {
        e.preventDefault()
        const form=e.target;
        const price=form.price.value;
        const quantity=form.quantity.value;
        const details=form.details.value;
        const newData={price,quantity,details}


        fetch(`https://car-toy-shop-server.vercel.app/alltoys/${id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(newData)
        })
        .then(res=>res.json())
        .then(data=>{

        if(data.modifiedCount>0){
            toast("Toy is Updated")
        }
        })

    }
    return (
        <div>
            <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold text-success mb-8 text-center">Update Toys Information</h1>
                <form onSubmit={updateToys} className="max-w-md mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" className='placeholder-gray-400 input bg-slate-200' defaultValue={toyInfo[0].price} placeholder='Price $$' />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" name="quantity" className='placeholder-gray-400 input bg-slate-200' defaultValue={toyInfo[0].quantity} placeholder='Quantity' />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <textarea name='details' placeholder="Details" className="textarea textarea-bordered textarea-lg w-full bg-slate-200" defaultValue={toyInfo[0].details} ></textarea>
                    </div>
                    <div className="form-control mt-6">
                                <input className="btn btn-success text-white" type="submit" value="Update" />
                            </div>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default UpdateToy;