import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../img/logo.png';
import HierMePopup from './HierMePopup';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Nav = () => {
  const MyNavigator = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleHomeNavigate = () => {
    MyNavigator("/");
    closeDrawer();
  };

  const handleAboutNavigate = () => {
    MyNavigator("/about");
    closeDrawer();
  };

  const handlePortfolioNavigate = () => {
    MyNavigator("/portfolio");
    closeDrawer();
  };

  const handleContactNavigate = () => {
    MyNavigator("/contact");
    closeDrawer();
  };

  const handleHireMeClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
 
  return (
    <div className='sticky top-0 z-50'>
      <nav className='flex justify-between items-center  md:py-5 h-14 px-6 md:px-6 md:bg-red-500  bg-gradient-to-l from-blue-600 to-purple-800'>
        <div className='flex items-center'>
         <h1 className='nameplatenav font-extrabold text-white '>Shiv Raj Raut</h1>
        </div>
        <div className='md:hidden  bg-red-500 rounded p-1.5'>
          <MenuIcon onClick={openDrawer} className="cursor-pointer  text-xl  rounded text-white " />
        </div>
        <div className='hidden md:flex gap-10 list-none text-white'>
          <li onClick={handleHomeNavigate} className='cursor-pointer hover:text-red-500'>Home</li>
          <li onClick={handleAboutNavigate} className='cursor-pointer hover:text-red-500'>About</li>
          <li onClick={handlePortfolioNavigate} className='cursor-pointer hover:text-red-500'>Portfolio</li>
          <li onClick={handleContactNavigate} className='cursor-pointer hover:text-red-500'>Contact</li>
        </div>
        <div className='hidden md:block'>
          <button
            onClick={handleHireMeClick}
            type="button"
            className='bg-myColor-primary py-2 px-6 text-white rounded-md hover:bg-red-700'
          >
            Hire Me
          </button>
        </div>
      </nav>

      {/* Side Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-myColor-navcolor transform ${
          isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className='flex justify-between items-center p-4 bg-myColor-navcolor'>
          <img src={Logo} alt="Logo" className='h-12 w-12 rounded-full' />
          <CloseIcon className="cursor-pointer text-red-600 h-8 w-8" onClick={closeDrawer} />
        </div>
        <div className='flex flex-col p-4 text-black'>
          <li onClick={handleHomeNavigate} className='list-none cursor-pointer py-2 hover:text-red-500'>Home</li>
          <li onClick={handleAboutNavigate} className='list-none cursor-pointer py-2 hover:text-red-500'>About</li>
          <li onClick={handlePortfolioNavigate} className='list-none cursor-pointer py-2 hover:text-red-500'>Portfolio</li>
          <li onClick={handleContactNavigate} className='list-none cursor-pointer py-2 hover:text-red-500'>Contact</li>
          <button
            onClick={handleHireMeClick}
            type="button"
            className='mt-4 bg-myColor-primary py-2 text-white rounded-md hover:bg-red-700'
          >
            Hire Me
          </button>
        </div>
      </div>

      <HierMePopup isOpen={isPopupOpen} onClose={handleClosePopup} />
    </div>
  );
};

export default Nav;
