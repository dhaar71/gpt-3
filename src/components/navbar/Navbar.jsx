import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';

const Menu = ({ showMobileMenu }) => (
  <>
    <p className="ml-4 mr-4"> <a href="#home">Home</a></p>
    <p className="ml-4 mr-4"> <a href="#whatGPT3">What is GPT?</a></p>
    <p className="ml-4 mr-4"> <a href="#possibility">Open AI</a></p>
    <p className="ml-4 mr-4"> <a href="#features">Case Study</a></p>
    <p className="ml-4 mr-4"> <a href="#blog">Library</a></p>

    {showMobileMenu && (
      <>
        <p className="ml-4 mr-4"> <a href="#sign-up">Sign Up</a></p>
        <p className="ml-4 mr-4"> <a href="#sign-in">Sign In</a></p>
      </>
    )}
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenuToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="flex justify-between items-center py-2 px-6 md:px-8">
      <div className="flex items-center space-x-8 mt-6">
        <img src={logo} alt="logo" className="h-4 w-16" />
        <div className="hidden md:flex md:flex-row text-white font-medium text-lg capitalize">
          <Menu showMobileMenu={false} />
        </div>
      </div>
      <div className="text-white flex flex-row items-center">
        <p className="ml-4 mr-4 hidden md:block">Sign In</p>
        <button className="bg-orange-600 pl-2 pr-2 pt-1 pb-1 w-24 md:w-30 text-white rounded-md ml-4 mr-4 outline-none cursor-pointer">Sign Up</button>
        <div className="md:hidden">
          {toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={handleMenuToggle} />
            : <RiMenu3Line color="#fff" size={27} onClick={handleMenuToggle} />
          }
          {toggleMenu && (
            <div className="bg-blue-900 bg-blur ">
              <Menu showMobileMenu={true} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
