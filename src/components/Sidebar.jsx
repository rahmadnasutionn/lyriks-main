import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';
import { HiOutlineMenu } from 'react-icons/hi';

import { logo } from '../assets';
import { links } from '../assets/constants';

const NavLinks = ({ handleClick }) => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink key={item.name} to={item.to} className="flex justify-start font-medium items-center my-8 text-sm text-gray-400 hover:text-cyan-400" onClick={() => handleClick()}>
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
        <img src={logo} alt={logo} className="w-full h-14 object-contain" />
        <NavLinks />
      </div>
      <div className="absolute z-30 md:hidden block top-6 right-3">
        {openMenu ? <RiCloseLine className="w-6 h-6 text-white mr-2" onClick={() => setOpenMenu(false)} /> : <HiOutlineMenu className="w-6 h-6 text-white mr-2" onClick={() => setOpenMenu(true)} />}
      </div>

      <div className={`absolute top-0 h-screen w-full bg-gradient-to-tl from-white/10 to-[#483d86] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${openMenu ? 'left-0' : '-left-full'}`}>
        <img src={logo} alt={logo} className="w-full h-14 object-contain" />
        <NavLinks handleClick={() => setOpenMenu(false)} />
      </div>
    </>
  );
};

export default Sidebar;
