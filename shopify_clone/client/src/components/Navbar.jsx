import React from 'react'
import { RiShoppingBag2Line } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  return (
    <div>
        <div className='flex bg-primary w-screen h-20 text-white gap-x-10 p-10 font-bold'>
            <NavLink to="/products">Shop All</NavLink>
            <NavLink to="/products">Men</NavLink>
            <NavLink to="/products">Women</NavLink>
            <NavLink to="/products">Teens</NavLink>
            <NavLink to="/products">Kids</NavLink>
            <NavLink className='ml-auto mb-4 text-4xl'><RiShoppingBag2Line/></NavLink>
        </div>
    </div>
  )
}

export default Navbar