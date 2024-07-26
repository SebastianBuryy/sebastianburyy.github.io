import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { menu, logo, close } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full py-5 fixed flex
      items-center top-0 z-50 bg-primary shadow-nav`}
    >
      <div className="w-full items-center flex justify-between
      mx-auto max-w-7xl">
        <Link
          to="/"
          className="flex gap-2 items-center"
          onClick={
            () => {
              setActive("");
              window.scrollTo(0, 0);
            }
          }
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white font-bold cursor-pointer text-[18px] flex">Sebastian Bury</p> 
            {/* <span className="sm:block hidden">| Software Engineer</span></p> */}
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? "text-white"
                  : "text-secondary"
              } font-medium text-[18px] cursor-pointer hover:text-white`}
              onClick={() => {
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="justify-end items-center sm:hidden flex flex-1">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="h-[28px] w-[28px] cursor-pointer object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20
          right-0 mx-4 my-2 min-w[140px] rounded-xl z-10`}>
          
            <ul className="list-none flex justify-end items-start gap-4 flex-col flex-1">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title
                    ? "text-white"
                    : "text-secondary"
                } font-medium font-poppins cursor-pointer text-[16px]`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
            </ul>
  
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;