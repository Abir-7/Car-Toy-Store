import { useContext } from "react";
import { Authcontext } from "../../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from "../../../Hooks/useTitle";

const AddToys = () => {
    useTitle('Car Toy Store/Add Toys')
    const {user}=useContext(Authcontext)
const handleAddToys=(event)=>{

    event.preventDefault()
    const form=event.target;
    const seller=form.seller.value;
    const email=form.email.value;
    const t_name=form.name.value;
    const sub_category=form.sub_category.value;
    const price=parseFloat(form.price.value).toFixed(2);
    const rating=form.rating.value;
    const details=form.details.value;
    const photo=form.photo.value
    const quantity=form.quantity.value;

    const newtoy={seller,email,t_name,sub_category,price,rating,details,quantity,photo}

    fetch('https://car-toy-shop-server.vercel.app/alltoys',{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(newtoy)
    })
    .then(res=>res.json())
    .then(data=>{

        if(data.insertedId){
            toast("One Toy Added in Server")
            form.reset()
        }
    })
}


    return (
        <div className=' mx-2 lg:mx-20 text-center bg-white pt-8 '>
         <h1 className="text-4xl font-bold text-success mb-8 text-center">Add Toys</h1>

            <div className="card-body ">

              <form action="" onSubmit={handleAddToys}>


              <div className="form-control">
                    <label className="label">
                        <span className="label-text">Seller Name</span>
                    </label>
                    <input type="text" defaultValue={user?.displayName} name="seller" className='placeholder-gray-400 input bg-slate-200' placeholder='Seller' />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Seller Email</span>
                    </label>
                    <input type="email" name="email" className='placeholder-gray-400 input bg-slate-200' defaultValue={user?.email}  placeholder='Email' />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Toy Name</span>
                    </label>
                    <input type="text" name="name"  className='placeholder-gray-400 input bg-slate-200' placeholder='Toy Name' />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Sub-category</span>
                    </label>

                    <select name='sub_category' id="toys" className=" select  bg-slate-200  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500 ">
                        <option>Choose a Sub Category</option>
                        <option  value="Electric_Car">Electric Car</option>
                        <option value="Remote_Control">Remote Control Car</option>
                        <option value="Mini_Toy_Car">Mini Toy Car</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input required type="text" name="price"  className='placeholder-gray-400 input bg-slate-200' placeholder='Price $$' />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input required type="text" name="rating"className='placeholder-gray-400 input bg-slate-200' placeholder='Rating' />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <input required type="text" name="photo" className='placeholder-gray-400 input bg-slate-200' placeholder='Photo Url' />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <input required type="text" name="quantity"  className='placeholder-gray-400 input bg-slate-200' placeholder='Quantity' />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <textarea required name='details' placeholder="Details" className="textarea textarea-bordered textarea-lg w-full  bg-slate-200" ></textarea>
                </div>
                <div className=" flex justify-center form-control mt-6">
                    <div>
                    <input type="submit" className=" w-60 btn btn-success text-white" value='Add Toys' /> 
                    </div>
                </div>
              </form>
              <ToastContainer />
            </div>
        </div>

    );
};

export default AddToys;