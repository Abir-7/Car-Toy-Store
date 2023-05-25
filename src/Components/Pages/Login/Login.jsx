
import logo from '../../../assets/login.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { Authcontext } from '../../../AuthProvider/AuthProvider';
import useTitle from '../../../Hooks/useTitle';

const Login = () => {

    useTitle('Car Toy Store/Login')
    const [sts, setSts] = useState('')
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const { user, loginUser, googleSignin } = useContext(Authcontext)



    const handleGoogole = () => {
        setSts('')
        googleSignin()
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate(from, { replace: true })
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
        
            });
    }


    const handleLogin = (event) => {
        setSts('')
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
      
        loginUser(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setSts("Login in Successful ")
                navigate(from, { replace: true })
                // ...
            })
            .catch((error) => {

                const errorMessage = error.message;
                setSts(errorMessage)
            });
    }


    return (
        <div className='text-center bg-slate-100 pt-8 '>
            <h1 className='text-success text-5xl lg:text-7xl'>Login Here</h1>
            <div className=" hero mt-5 min-h-[80vh] bg-slate-100">
                <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img width={'700px'} src={logo} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-state-100">
                        <div className="card-body">
                           <form  onSubmit={handleLogin} action="">
                           <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email"className='placeholder-gray-400 input bg-slate-200' placeholder='Email' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" className='placeholder-gray-400 input bg-slate-200' placeholder='Password' />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-success hover:bg-[#18ad7b] text-white" type="submit" value="Login" />
                            </div>
                           </form>
                           <button onClick={handleGoogole} className="btn hover:bg-success hover:text-white text-black bg-[white] "> <FaGoogle className='mx-3'></FaGoogle> <span className=''>Google</span></button>
                            <label className="label">
                                <p href="#" className="label-text-alt ">Don't have an account?? <span className='link link-hover'><Link to='/signup' className='text-success'>Click Here</Link></span> </p>
                            </label>
                            <p>{sts}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;