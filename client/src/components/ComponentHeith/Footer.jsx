import React, { useState } from 'react';
import { AiFillFacebook, AiOutlineInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import { BsPinterest } from 'react-icons/bs';

const Footer = () => {
  // State variable to manage the email input field
  const [email, setEmail] = useState('');

  // Update the email state when the input value changes
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Clear the email input when the "Join" button is clicked
  const handleJoinClick = () => {
    setEmail('');
  };

  return (
    <footer className="bg-[#27272A] py-8 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Links section */}
        <div className="mb-8 md:mb-0">
          <ul className="text-lg">
            <li className="hover:text-[#78716C]">
              <a href="#">FAQ</a>
            </li>
            {/* More links... */}
          </ul>
        </div>

        {/* Contact section */}
        <div className="mb-8 md:mb-0">
          <ul className="text-lg">
            <li className="hover:text-[#78716C]">
              <a href="#">ÉLIER</a>
            </li>
            {/* More contact details... */}
          </ul>
        </div>

        {/* Newsletter subscription and social media */}
        <div>
          <div className="mb-4">
            <label className="block">Subscribe to our Newsletter</label>
            <div className="flex">
              {/* Email input */}
              <input
                type="text"
                placeholder="Enter your email here*"
                value={email}
                onChange={handleEmailChange}
                className="mr-2 px-2 py-1 border text-black border-[#27272A]"
              />
              {/* Join button */}
              <button className="px-4 py-2 bg-[#78716C] text-white" onClick={handleJoinClick}>
                Join
              </button>
            </div>
          </div>
          {/* Social media icons */}
          <ul className="flex space-x-4 mb-4">
            <li className="hover:text-[#78716C]">
              <a href="#">
                <AiFillFacebook size={24} />
              </a>
            </li>
            {/* More social media icons... */}
          </ul>

          {/* Copyright */}
          <div className="text-right text-sm mt-8 md:mt-0">
            <p>&copy; {new Date().getFullYear()} ÉLIER. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
