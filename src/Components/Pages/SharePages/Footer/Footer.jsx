
import { FaFacebook,FaInstagram,FaWhatsapp } from 'react-icons/fa'
import logo from '../../../../assets/logo.png'
const Footer = () => {
    return (
<footer className=" text-white bg-success ">
<div className='footer p-10 pb-4 '>
<div>
    <img width={'200px'} src={logo} alt="" />
    <p className='mx-2'>A trasted Shop</p>
  </div> 
  <div>
    <span className="font-extrabold text-xl">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="font-extrabold text-xl">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="font-extrabold  flex text-xl ">Social Link</span> 
    <a className="link link-hover  flex items-center"><FaFacebook className='mx-2'></FaFacebook> Facebook</a> 
    <a className="link link-hover flex items-center"><FaInstagram className='mx-2'></FaInstagram> Instagram</a> 
    <a className="link link-hover  flex items-center "><FaWhatsapp className='mx-2'></FaWhatsapp> WhatsApp</a>
  </div>
</div>
<hr />
<p className='text-white py-5 text-center mx-2' >©2023 Your Company/Organization Name. All rights reserved.</p>
</footer>
    );
};

export default Footer;