import React, {useState} from 'react';
import { AiFillFacebook, AiOutlineInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {

  const [email, setEmail] = useState('');
  console.log(email)



  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleJoinClick = () => {
    setEmail('');
  };

  return (
    <footer className="bg-[#27272A] text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0">
          <ul className="text-lg">
            <li className='hover:text-[#78716C]'><a href="#">FAQ</a></li>
            <li className='hover:text-[#78716C]'><a href="#">Shipping & Retuns</a></li>
            <li className='hover:text-[#78716C]'><a href="#">Store Policy</a></li>
            <li className='hover:text-[#78716C]'><a href="#">Payments</a></li>
          </ul>
        </div>
        <div className="mb-8 md:mb-0">
          <ul className="text-lg">
            <li>ALETIER</li>
            <li>Tel: 123-456-7890</li>
            <li>Email: info@atelier.com</li>
          </ul>
        </div>
        <div>
          <div className="mb-4">
            <label className="block">Subscribe to our Newsletter</label>
            <div className="flex">
              <input
              type="text"
              placeholder="Enter your email here*"
              value= {email}
              onChange={handleEmailChange}
              className="mr-2 px-2 py-1 border text-black border-gray-300" />
              <button className="px-4 py-2 bg-[#78716C] text-white" onClick={handleJoinClick}>Join</button>
            </div>
          </div>
          <ul className="flex space-x-4">
            <li className='hover:text-[#78716C]'><a href="#"><AiFillFacebook size={24} /></a></li>
            <li className='hover:text-[#78716C]'><a href="#"><AiOutlineTwitter size={24} /></a></li>
            <li className='hover:text-[#78716C]'><a href="#"><AiOutlineInstagram size={24} /></a></li>
            <li className='hover:text-[#78716C]'><a href="#"><AiFillYoutube size={24} /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
