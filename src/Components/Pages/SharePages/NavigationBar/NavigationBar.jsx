
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Authcontext } from "../../../../AuthProvider/AuthProvider";
import logo from '../../../../assets/logo.png'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import './NavigationBar.css'
const NavigationBar = () => {
    const { user, logoutUser } = useContext(Authcontext)

    const link = <>
        <NavLink to='/' className={({ isActive }) => isActive ? " text-decoration-none mx-4 active" : "text-decoration-none mx-4"}>Home</NavLink>
        <NavLink to='/alltoys' className={({ isActive }) => isActive ? " text-decoration-none mx-4 active" : " text-decoration-none mx-4"}>All Toys</NavLink>
        {user && <NavLink to='/usertoys' className={({ isActive }) => isActive ? " text-decoration-none mx-4 active" : " text-decoration-none mx-4"}>My Toys</NavLink>}
        {user && <NavLink to='/addtoys'className={({ isActive }) => isActive ? " text-decoration-none mx-4 active" : " text-decoration-none mx-4"}>Add Toys</NavLink>}
        <NavLink to='/blog' className={({ isActive }) => isActive ? " text-decoration-none mx-4 active" : "text-decoration-none mx-4"}>Blog</NavLink>
    </>



    return (
        <div className="navbar bg-success text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-success text-white rounded-box w-52">
                        {link}
                        <div className="mt-4" tabIndex={0}>
                            {
                                user ? <div className="flex"><a  data-tooltip-id="my-tooltip"
                                data-tooltip-content={user?.displayName}data-tooltip-place="top"><img className="mx-3" style={{ width: '50px', borderRadius: '50%' }} src={user?.photoURL} alt="" /> </a> <button className="btn text-white border-none hover:bg-[#28996ee7] bg-[#29b47fe7]" onClick={() => { logoutUser() }}>Logout</button></div> : <Link to='/login' className="btn text-white border-none hover:bg-[#28996ee7] bg-[#29b47fe7]">Login</Link>
                    
                            }
                           <Tooltip id="my-tooltip" />
                        </div>
                    </ul>



                </div>
                <img className="lg:mx-5" src={logo} width={'150px'} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <div className="grow">
                    <ul className="menu  menu-horizontal px-1  ">
                        {
                            link
                        }
                    </ul>
                </div>

            </div>
            <div className=" lg:flex lg:navbar-end  hidden " >
                {
                    user ? <div className="flex"> <a  data-tooltip-id="my-tooltip"
                    data-tooltip-content={user?.displayName}data-tooltip-place="left"> <img className="mx-2" style={{ width: '50px', borderRadius: '50%' }} src={user?.photoURL} alt="" /> </a><button className="btn text-white border-none hover:bg-[#28996ee7] bg-[#29b47fe7]" onClick={() => { logoutUser() }}>Logout</button></div> : <Link to='/login' className="btn text-white border-none hover:bg-[#28996ee7] bg-[#29b47fe7]">Login</Link>
                }
          <Tooltip id="my-tooltip" />

            </div>


        </div>
    );
};

export default NavigationBar;

//   <button data-tooltip-target="tooltip-default" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default tooltip</button>