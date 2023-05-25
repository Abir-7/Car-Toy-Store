
import { Link } from 'react-router-dom';
import logo from '../../../assets/login.png'
import { useContext, useState } from 'react';
import { Authcontext } from '../../../AuthProvider/AuthProvider';
import useTitle from '../../../Hooks/useTitle';
const Signup = () => {
    useTitle('Car Toy Store/Signup')
    const[msg,setMsg]=useState('')
    const { createUser,updateUserProfile}=useContext(Authcontext)
 const   hangleSignup=(event)=>{
    event.preventDefault()
    const form=event.target;
    const email=form.email.value;
    const name=form.name.value;
    const photo=form.photo.value;
    const password=form.password.value;
    if(!(password.length>=6)){
        return setMsg('Passwoord Shoudbe 6 letter')
    }
    createUser(email,password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        if(user){
            setMsg('signup successfull')
        }
   
        updateUserProfile(name,photo)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    
 }
    return (
        <div className='text-center bg-slate-100 pt-8 '>
            <h1 className='text-success text-5xl lg:text-7xl'>Signup Here</h1>
            <div className=" hero mt-5 min-h-[80vh] bg-slate-100">
                <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img width={'700px'} src={logo} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-state-100">

                        <form action="" onSubmit={hangleSignup}>
                            <div className="card-body">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input required type="text" name="name" id="" className='placeholder-gray-400 input bg-slate-200' placeholder='Name' />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input required type="email" name="email" className='placeholder-gray-400 input bg-slate-200' placeholder='Email' />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input required type="text" name="photo" className='placeholder-gray-400 input bg-slate-200' placeholder='Photo Url' />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span  className="label-text">Password</span>
                                    </label>
                                    <input required type="password" name="password" className='placeholder-gray-400 input bg-slate-200' placeholder='Password' />
                                </div>
                                <div className="form-control mt-6">
                                   <input className='btn btn-success hover:bg-[#18ad7b] text-white' type="submit" value="Signup" />
                                </div>
                                <label className="label">
                                    <p className="label-text-alt ">Allready have an account?? <span className='link link-hover'><Link to='/login' className='text-success'>Click Here</Link></span> </p>
                                </label>
                                <p>{msg}</p>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Signup;