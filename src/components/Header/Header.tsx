import React, { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import logo from "../../img/logo.svg";

import "./Header.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const handleMobileMenu = () => { 
    setOpenMobileMenu(!openMobileMenu);
  }
  return (
    <>
      <header className="container mx-auto">
        <nav
            className="
              flex flex-wrap
              items-center
              justify-between
              w-full
              py-4
              md:py-0
              px-4
              text-lg text-gray-700
            "
          >
            <div>
              <NavLink to="/">
              <img className="w-80" src={logo} alt="" />
              </NavLink>
            </div>
          
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer md:hidden block"
                fill="none"
                viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={handleMobileMenu}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
          
            <div className={`${!openMobileMenu && "hidden"} w-full md:flex md:items-center md:w-auto`} id="menu">
              <ul
                className="
                  pt-4
                  text-base text-white
                  md:flex
                  md:justify-between 
                  md: items-center
                  md:space-x-4
                  md:pt-0
                  space-y-4
                  md:space-y-0"
              >
                <li>
                  <NavLink className="block hover:text-orange-400" to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink className="block hover:text-orange-400" to="/blog">Blog</NavLink>
                </li>
                <li>
                  <NavLink className="block hover:text-orange-400" to="/fund/portfolio">
                    <button className="px-10 py-2 bg-gradient-to-r from-orange-600 to-orange-400 rounded-lg font-medium">
                      Invest
                    </button>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="block hover:text-orange-400" to="/create-fund">
                    <button className="px-10 py-2 bg-gradient-to-r from-orange-600 to-orange-400 rounded-lg font-medium">
                      Create Fund
                    </button>
                  </NavLink>
                </li>
                <li>
                <ConnectButton />
                </li>
              </ul>
            </div>
        </nav>
      </header>
      {/* <header>
        <div className="App-header large">
          <div className="App-header-container-left">
            <Link className="App-header-link-main" to="/">
              <img src={logoImg} className="big" alt="Barren Wuffet Logo" />
              <img
                src={logoSmallImg}
                className="small"
                alt="Barren Wuffet Logo"
              />
            </Link>
            <AppHeaderLinks />
          </div>
          <AppHeaderUser />
        </div>
        <div className={`App-header small active`}>
          <div className={`App-header-link-container App-header-top active`}>
            <div className="App-header-container-left">
              <div className="App-header-link-main clickable">
                <img src={logoImg} className="big" alt="Barren Wuffet Logo" />
                <img
                  src={logoSmallImg}
                  className="small"
                  alt="Barren Wuffet Logo"
                />
              </div>
            </div>
            <AppHeaderUser />
          </div>
        </div>
      </header> */}
    </>
  );
}
